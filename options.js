// Saves options to chrome.storage
const saveOptions = () => {
  const color = document.getElementById('color').value;
  const likesColor = document.getElementById('like').checked;

  chrome.storage.sync.set(
    { favoriteColor: color, likesColor: likesColor },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { favoriteColor: 'red', likesColor: true },
    (items) => {
      document.getElementById('color').value = items.favoriteColor;
      document.getElementById('like').checked = items.likesColor;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);

const form = document.getElementById('websiteForm');
const websiteList = document.getElementById('websiteList')
const websites = websiteList.getElementsByTagName('li'); 

const siteArray = Array.from(websites).map(item => item.textContent);

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const website = document.getElementById('name');
  array.push(website.value);
  console.log(siteArray);
  saveWebsites(siteArray)
});

const dropdownHeader = document.querySelector('.dropdown-header');
const dropdownContent = dropdownHeader.querySelector('.dropdown-content');

function saveWebsites(array) {
  chrome.storage.local.set({websites:array}).then(() => {
    console.log("Value is set");
  });
}

dropdownHeader.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop the click from propagating to the document
    this.classList.toggle('active');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    if (!dropdownHeader.contains(event.target)) {
        dropdownContent.style.display = 'none';
        dropdownHeader.classList.remove('active');
    }
});
