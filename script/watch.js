// Author: Max Yi-Hsun Chou <yihsunmaxchou@icloud.com>
// Github: https://github.com/maxchou415

const blocklist = ['韓國瑜', '韓市長', '韓主委', '韓總', '國瑜', '韓流', '韓粉', '韓導', '韓冰', '韓天', '韓清', '非韓不投', '是韓不投']
const templateHtml = '<div><h1 style="padding: 30px; text-align: center;">草包已被隱藏！</h1></div>'

const contentFromPosts = document.querySelector('#contentArea')
const contentFromPages = document.querySelector('#pagelet_timeline_main_column')
const content = contentFromPosts || contentFromPages

function removeElems () {
  const articles = content.querySelectorAll(`div[id][role="article"]`)

  function hasSensitiveWordInBlocklist (article) {
    return blocklist.some((sensitiveWord) => article.innerHTML.includes(sensitiveWord))
  }

  articles.forEach(function (article) {
    if (hasSensitiveWordInBlocklist(article)) {
      article.innerHTML = templateHtml
    }
  })
}

content.addEventListener('DOMContentLoaded', function (event) {
  removeElems()
})

content.addEventListener('DOMNodeInserted', function (event) {
  removeElems()
})

content.addEventListener('DOMSubtreeModified', function (event) {
  removeElems()
})
