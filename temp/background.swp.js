chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var site = tabs[0].url.split("/")[2];
  document.querySelector('h3').innerHTML = site;
});
