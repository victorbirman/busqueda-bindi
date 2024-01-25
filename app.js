let jsonData;

// Function to load JSON data from file
async function loadJsonData() {
  try {
    const response = await fetch('articles.json');
    jsonData = await response.json();
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
}


String.prototype.sanitize = function() {
  return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};


// Function to search JSON data
function searchJson() {
  let searchInput = document.getElementById('searchInput').value.toLowerCase();
  console.log (searchInput)
  let searchWords = searchInput.split(/\s+/);
  let searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  jsonData.forEach(function (item) {
    if (searchWords.every(word => item.title.toLowerCase().sanitize().includes(word.sanitize()) || item.subtitle.toLowerCase().includes(word))) {
    
    //  let listItem = document.createElement('li');
    //listItem.textContent = item.title + ' - ' + item.subtitle;
      //searchResults.appendChild(listItem);
      searchResults.appendChild(listItemPretty (item));
    }
  });
}


function listItemPretty ({title, subtitle, cover, href}) {

  const containerItem = document.createElement("div");
  containerItem.classList.add ("container-item")
  const hrefEl = document.createElement ("a")
  hrefEl.href = "./contenido/" + href
  const coverEl = document.createElement ("img")
  coverEl.src = "./contenido/" + cover
  const containerTitle = document.createElement ("div")
  containerTitle.classList.add ("container-title")

  const itemTitle = document.createElement ("p")
  itemTitle.textContent = title

  const itemSubtitle = document.createElement ("p")
  itemTitle.textContent = subtitle

    containerTitle.append(itemTitle)
    containerTitle.append(itemSubtitle)


  containerItem.append (hrefEl)
  hrefEl.append(coverEl)
  hrefEl.append(containerTitle)


  return containerItem

}
// Call the function to load JSON data
loadJsonData();