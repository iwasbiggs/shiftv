
safari.application.addEventListener('message', function (event) {
  if (event.name === 'open' && event.message && event.message.url) {
    safari.application.activeBrowserWindow.openTab(
      'background').url = event.message.url;
  }
}, false);

