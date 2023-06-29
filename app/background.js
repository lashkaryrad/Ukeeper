let showCurrentURL = document.getElementById("action-url");
var currentSiteURL;

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var currentSiteURL = tabs[0].url;
  showCurrentURL.value = currentSiteURL;
});

