/*   ----   Core   ----    */
let actionURL = document.getElementById("action-url"); // Define actionURL input.
var addButton = document.getElementById('add-url'); // Define Add Buttons.
var urlsList = document.getElementById('urls-list'); // Define URLs List.
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
    // if add button clicks, run 'appendURL' Function.
    addButton.onclick = appendURL();

    // addIcon animation 
    addIcon.style.display = 'none';
    checkIcon.style.display = 'inline';

    setTimeout(function() {
      addIcon.style.display = 'inline';
      checkIcon.style.display = 'none';
    }, 1000);
  });
});


/*   ----   POP UP    ----    */
function showPopup() {
  document.getElementById("popupContainer").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function hidePopup() {
  document.getElementById("popupContainer").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function validateAndHide() {
  // Add your form validation logic here
  var nameInput = document.getElementById("nameInput").value;
  if (nameInput !== "") {
    hidePopup();
  } else {
    alert("Please enter your name before closing the pop-up.");
  }

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Example validation: Check if any field is empty
  if (firstName === "" || lastName === "" || email === "" || password === "") {
    alert("Please fill out all the fields before closing the pop-up.");
  } else {
    hidePopup();
  }
}


// save URL function
function saveURL() {
  // Adds a pop Up for URL datails and save that
  // Pass
}


function appendURL() {

  // Create the <li> element
  const liElement = document.createElement('li');
  liElement.classList.add('pb-3', 'sm:pb-4');

  // Create the <div> element with the "flex items-center space-x-4" classes
  const divElement = document.createElement('div');
  divElement.classList.add('flex', 'items-center', 'space-x-4');

  // Create the first <div> element with the "flex-shrink-0" class
  const innerDivElement1 = document.createElement('div');
  innerDivElement1.classList.add('flex-shrink-0');

  // Create the <img> element with the specified attributes
  const imgElement = document.createElement('img');
  imgElement.classList.add('w-8', 'h-8', 'rounded-full');
  imgElement.src = '/docs/images/people/profile-picture-1.jpg';
  imgElement.alt = 'Neil image';

  // Append the <img> element to the first inner <div> element
  innerDivElement1.appendChild(imgElement);

  // Create the second <div> element with the "flex-1 min-w-0" class
  const innerDivElement2 = document.createElement('div');
  innerDivElement2.classList.add('flex-1', 'min-w-0');

  // Create the <p> element for the name
  const nameParagraph = document.createElement('p');
  nameParagraph.classList.add('text-sm', 'font-medium', 'text-gray-900', 'truncate', 'dark:text-white');
  nameParagraph.textContent = 'Neil Sims';

  // Create the <p> element for the WebSite's URL
  const webSiteURL = document.createElement('p');
  webSiteURL.classList.add('text-sm', 'text-gray-500', 'truncate', 'dark:text-gray-400');
  webSiteURL.textContent = actionURL.value;

  // Append the name and email paragraphs to the second inner <div> element
  innerDivElement2.appendChild(nameParagraph);
  innerDivElement2.appendChild(webSiteURL);

  // Create the third <div> element with the "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" classes
  const innerDivElement3 = document.createElement('div');
  innerDivElement3.classList.add('inline-flex', 'items-center', 'text-base', 'font-semibold', 'text-gray-900', 'dark:text-white');
  innerDivElement3.textContent = '$320';

  // Append the three inner <div> elements to the outer <div> element
  divElement.appendChild(innerDivElement1);
  divElement.appendChild(innerDivElement2);
  divElement.appendChild(innerDivElement3);

  // Append the <div> element to the <li> element
  liElement.appendChild(divElement);

  urlsList.appendChild(liElement);

}




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


