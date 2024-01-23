var jsonData;

// Function to load JSON data from file
async function loadJsonData() {
  try {
    const response = await fetch('articles.json');
    jsonData = await response.json();
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
}

// Function to search JSON data
function searchJson() {
  var searchInput = document.getElementById('searchInput').value.toLowerCase();
  var searchWords = searchInput.split(/\s+/);
  var searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  jsonData.forEach(function (item) {
    if (searchWords.every(word => item.title.toLowerCase().includes(word) || item.subtitle.toLowerCase().includes(word))) {
      var listItem = document.createElement('li');
      listItem.textContent = item.title + ' - ' + item.subtitle;
      searchResults.appendChild(listItem);
    }
  });
}

// Call the function to load JSON data
loadJsonData();