let showCurrentURL = document.getElementById("show-current-url");
var currentSiteURL;

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var currentSiteURL = tabs[0].url;
  showCurrentURL.value = currentSiteURL;
});

