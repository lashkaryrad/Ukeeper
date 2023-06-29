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

/*       Styles for Doing add URL.        */
var addButton = document.getElementById('add-url');
let actionURL = document.getElementById('action-url');

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
