const AvailList= document.getElementById('available-list');
const maxRetries = 3; // Maximum number of retry attempts
let retryCount = 0;


  
  // Usage
  
function fetchAvail(url) {
    function fetchDataWithRetry() {
        return fetch(url)
          .then(response => {
            if (!response.ok) {
              if (response.status === 429 ) {
                // Retry with exponential backoff
                retryCount++;
                const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff formula
                console.log(`Too Many Requests. Retrying in ${delay / 1000} seconds...`);
                return new Promise(resolve => setTimeout(resolve, 350)).then(fetchDataWithRetry);
              } else {
                throw new Error(`Network response was not ok, status: ${response.status}`);
              }
            }
            return response.json();
          });
      }
    fetchDataWithRetry()
        .then(jsonData => {
            console.log('JSON data:', jsonData);
            // Do something with the JSON data here
            const dataArray = jsonData.data;
            resultsContainer.innerHTML = "";
            // Looping through the 'data' array
           
                // Accessing the 'title' property within 'attributes'
                let itemTitle = dataArray.title_english;
                if(itemTitle === null){
                    itemTitle = dataArray.title;
                }
                const itemID= dataArray.mal_id;
                const itemImg = dataArray.images.jpg.image_url;
                const itemDesc = dataArray.synopsis;
                const availItem = document.createElement("div");
                availItem.classList.add("item-card");
                availItem.innerHTML = `
                <div class="item " onClick="redirectToPlayer('${itemID}')">
                <img src="${itemImg}" alt="${itemTitle}">
                <p>${itemTitle}</p>
            </div>
            <div class="floatItem" onClick="redirectToPlayer('${itemID}')">
            
            <span>${itemTitle}</span>
            <p>${itemDesc}</p>
                <div class="playButton" onClick="redirectToPlayer('${itemID}')">Play</div>
            </div>
                    `;
                AvailList.appendChild(availItem);
            

        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

}

let availAnime=[
  "48316",
    "42249",
    "54918",
    "53887",
    "41487",
    "54112",
    "52347",
    "29803",
    "21",
    "40748",
    "52830"
]           
availAnime.forEach(item =>{
    let url =`https://api.jikan.moe/v4/anime/${item}/full`
    fetchAvail(url);
});
