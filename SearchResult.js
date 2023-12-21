
function fetchJSON(url) {
    fetch(url, {
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
            if (!response.ok) { 
                if (response.status === 429 && retryCount < maxRetries) {
                // Retry with exponential backoff
                retryCount++;
                const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff formula
                console.log(`Too Many Requests. Retrying in ${delay / 1000} seconds...`);
                return new Promise(resolve => setTimeout(resolve, delay)).then(fetch);
              } else {
                throw new Error(`Network response was not ok, status: ${response.status}`);
              }

            }
            return response.json();
        })
        .then(jsonData => {
            console.log('JSON data:', jsonData);
            // Do something with the JSON data here
            const dataArray = jsonData.data;
            resultsContainer.innerHTML = "";
            // Looping through the 'data' array
            dataArray.forEach(item => {
                // Accessing the 'title' property within 'attributes'
                let itemTitle = item.title_english;
                if(itemTitle === null){
                    itemTitle = item.title;
                }
                const itemID = item.mal_id;
                const itemImg = item.images.jpg.image_url;
                console.log('Title:', itemTitle);
                console.log('ImageLink:', itemImg);
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");
                resultItem.innerHTML = `
                <div onClick="redirectToPlayer('${itemID}')">
                <img src="${itemImg}" alt="${itemTitle}">
                <span>${itemTitle}</span>
                </div>
                    `;
                resultsContainer.appendChild(resultItem);
            });

        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

}