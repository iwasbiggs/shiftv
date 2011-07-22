
window.addEventListener('keydown', function (event) {
  if (event.target.nodeName.toLowerCase() !== 'input' &&
      String.fromCharCode(event.keyCode) === 'V' &&
      event.shiftKey) {
    safari.self.tab.dispatchMessage('open', {
      url: document.getElementById(
             'current-entry').querySelectorAll('h2 > a')[0].href
    });
  }
});

