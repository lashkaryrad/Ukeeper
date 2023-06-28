var site;

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var site = tabs[0].url;
  document.querySelector('h3').innerHTML = site;
});

