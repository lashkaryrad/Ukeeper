/*   ----   Core   ----    */
let actionURL = document.getElementById("action-url"); // Define actionURL input.
var addButton = document.getElementById('add-url'); // Define Add Buttons
var currentSiteURL; // Define current Site's URL.

// Getting current Site's URL from chrome Tabs.
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var currentSiteURL = tabs[0].url;
  actionURL.value = currentSiteURL;
});

/*   ----   Save Current URL    ----    */
document.addEventListener('DOMContentLoaded', function() {
  // Define Variables
  var addButton = document.getElementById('add-url');
  var actionURL = document.getElementById('action-url')
  var addIcon = document.querySelector('.octicon-add');
  var checkIcon = document.querySelector('.octicon-check');

  addButton.addEventListener('click', function() {
    // Do adding URL, here...

    // addIcon animation 
    addIcon.style.display = 'none';
    checkIcon.style.display = 'inline';

    setTimeout(function() {
      addIcon.style.display = 'inline';
      checkIcon.style.display = 'none';
    }, 1000);
  });
});

/*   ----   Styles for Doing add URL.   ----    */
actionURL.addEventListener("mouseover", () => {
  addButton.style.display = 'block';
});

actionURL.addEventListener("mouseout", () => {
  addButton.style.display = 'none';
});


addButton.addEventListener("mouseover", () => {
  addButton.style.display = 'block';
});

addButton.addEventListener("mouseout", () => {
  addButton.style.display = 'none';
});


