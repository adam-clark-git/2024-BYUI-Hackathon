function restoreOptions() {
  // Load saved website options from storage (localStorage or Chrome's storage API)
  // Example using localStorage:
  let savedWebsites = localStorage.getItem('websites');
  if (savedWebsites) {
      siteArray = JSON.parse(savedWebsites);
      // Now populate your website list with the saved websites
      // For example:
      siteArray.forEach(website => {
          let li = document.createElement('li');
          li.textContent = website;
          websiteList.appendChild(li);
      });
  }
}

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
const submit = document.getElementById('submit');

dropdownHeader.addEventListener('click', function(event) {
    event.stopPropagation(); 
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        dropdownHeader.classList.remove('active');
    } else {
        dropdownContent.style.display = 'block';
        dropdownHeader.classList.add('active');
    }
});

dropdownContent.addEventListener('click', function(event) {
    event.stopPropagation(); 
});

document.addEventListener('click', function(event) {
    if (!dropdownHeader.contains(event.target)) {
        dropdownContent.style.display = 'none';
        dropdownHeader.classList.remove('active');
    }
});

if (submit) {
    submit.addEventListener('click', function(event) {
        event.stopPropagation(); 
        dropdownContent.style.display = 'none';
        dropdownHeader.classList.remove('active');
    });
}
