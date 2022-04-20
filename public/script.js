(function (window, document, undefined) {
  window.onload = init;
  function init() {
    const hostUrl = window.location.href.indexOf('localhost:3000') > 0 ? 'localhost:3000' : 'q4sales.github.io/uniphorecloud'
    const ifr = document.getElementById('iframe001')
    const origUrl = window.location.href;
    if (origUrl.indexOf(hostUrl) >= 0) {
      const targetUrl = origUrl.replace(hostUrl, 'uniphore.com')
      ifr.src = targetUrl
    }
  }
})(window, document, undefined);