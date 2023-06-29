/*   ----   Core   ----    */
let actionURL = document.getElementById("action-url"); // Define actionURL input.
var currentSiteURL; // Define current Site's URL.

// Getting current Site's URL from chrome Tabs.
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var currentSiteURL = tabs[0].url;
  actionURL.value = currentSiteURL;
});



