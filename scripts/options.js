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
document.getElementById('save').addEventListener('click', saveOptions);

const addButton = document.getElementById('addButton');
const websiteInput = document.getElementById('websiteInput');

addButton.addEventListener('click', function () {
  const newWebsite = websiteInput.value;

  if (newWebsite) {
      let websites = result.websiteList || [];

      chrome.storage.local.set({ "websiteList": websites }, function() {
        console.log('Website list is saved.');
    });
      chrome.storage.local.get({ "websiteList": websites }, function(result) {
        const websites = result.websiteList || [];
        updateWebsiteListUI(websites)
    });
function updateWebsiteListUI(websites) {
  websiteList.innerHTML = ''; 
  websites.forEach(function (website) {
      const listItem = document.createElement('li');
      listItem.textContent = website;
      websiteList.appendChild(listItem);
  });
}
}
});