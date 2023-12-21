

const EpList = document.getElementById("EpisodeList"); //For EpisodeList
const animeIdValue = getAnimeIdParameter(); //For Getting anime ID from parameter

// Function for Getting AnimeId for page
function getAnimeIdParameter() {
  // Get the query string from the current URL
  const queryString = window.location.search;
  
  // Use URLSearchParams to easily get the value of the AnimeId parameter
  const params = new URLSearchParams(queryString);
  const animeId = params.get('AnimeId');
  
  return animeId;
}

// Example usage:


// Function for Getting List of Episode from API
function fetchEpList(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(jsonData => {
      console.log('JSON data:', jsonData);
      // Do something with the JSON data here
      const dataArray = jsonData.data;
      resultsContainer.innerHTML = "";
      // Looping through the 'data' array
      let index = 1;
      dataArray.forEach(item => {
        // Accessing the 'title' property within 'attributes'
        let itemTitle = item.title;
        if (itemTitle === null) {
          itemTitle = 'Ep ' + index;
        }
        // Log or use the retrieved 'title' value
        console.log('Title:', itemTitle);
        const EpisodeList = document.createElement("div");
        EpisodeList.classList.add("epName");
        if (index % 2 != 0) {
          EpisodeList.innerHTML = `
                <div  class="episode" onClick="playVideo('${index}','${animeIdValue}')">
               <span> <span>${index}</span>${item.title}</span>
            </div>
           
                    `;
        }
        else {
          EpisodeList.innerHTML = ` 
                         <div  class="episode color2" onClick="playVideo('${index}')">
                        <span> <span>${index}</span>${item.title}</span>
                         </div>
                
                `;
        }
        EpList.appendChild(EpisodeList);
        index++;
      });

    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });

}

let urlList = `https://api.jikan.moe/v4/anime/${animeIdValue}/episodes`;

fetchEpList(urlList);

var animeDetailDiv = document.getElementById("AnimeDetailBox");
var beforePseudoElement = window.getComputedStyle(animeDetailDiv, ':before');

// Change the :before background image
// let itemTitle;

// Function for Getting Anime Details from the API 
function fetchDetail(url) {
  fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(jsonData => {
      console.log('JSON data:', jsonData);
      // Do something with the JSON data here
      const dataArray = jsonData.data;
      // Accessing the 'title' property within 'attributes'
      itemTitle = dataArray.title_english;
      if (itemTitle === null) {
        itemTitle = dataArray.title;
      }
      const itemImg = dataArray.images.jpg.image_url;
      const itemEpNo = dataArray.episodes;
      const itemAired = dataArray.aired.string
      const itemDesc = dataArray.synopsis;
      AnimeTitle.innerHTML = `<p>${itemTitle}</p>`;
      animeDetailImg.innerHTML = `<img src="${itemImg}"
                alt="${itemTitle}" width="120px" height="160px">`;
      // beforePseudoElement.backgroundImage = "url('" + itemImg + "')";
      AnimeDetail.innerHTML = `
                <h3>${itemTitle}</h3>
                    <p>Total Episodes : ${itemEpNo}</p>
                    <p>Aired: ${itemAired}</p>
                `;
      animeDesc.innerHTML = `${itemDesc}`;
       document.title = `Watch ${itemTitle} English Sub/Dub Online on Aniworld.fun`

    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });

}
let url = `https://api.jikan.moe/v4/anime/${animeIdValue}/full`;
fetchDetail(url);



//function for play Video of Iframe 
// Array of anime objects
let arrayOfObjects = [
  {
    animeId: 54918,
    animeName: 'Tokyo Revenger Season 2',
    animeLink: ['link1', 'link2', 'link3']
  },
  {
    animeId: 53887,
    animeName: 'Spy X family season 2',
    animeLink: [
      'https://streamtape.site/e/jZarJB6emOsL8D/EP-01.mp4',
      'https://streamtape.site/e/JbgMLkmzYWij4ld/EP-02.mp4',
      'https://streamtape.site/e/vBPzmAVPeVtPlw/EP-03.mp4',
      'https://streamtape.site/e/D0rBGwd42JTAWv/EP-04.mp4',
      'https://streamtape.site/e/A4vkK6R6GDIX3l8/EP-05.mp4',
      'https://streamtape.site/e/ydyDk9gLeqFeYl/EP-06.mp4',
      'https://streamtape.site/e/lDzVD0y6e1U7Po0/EP-07.mp4',
      'https://streamtape.site/e/yAXdxPdBYxCm67/EP-08.mp4',
      'https://streamtape.site/e/QkAB8RymgBi00Qx/EP-09.mp4'
    ]
  },
  {
    animeId: 41487,
    animeName: 'that time season 2 part 2',
    animeLink: [
      'https://streamtape.site/e/OYgj1Ay8KAIkAK/EP-01.mp4',
      'https://streamtape.site/e/84rjwrxMLqHMYe/EP-02.mp4',
      'https://streamtape.site/e/mP2QgZ4mxLfb10y/EP-03.mp4',
      'https://streamtape.site/e/QX43dg3mAaI0XOZ/EP-04.mp4',
      'https://streamtape.site/e/jagvR88LlBUzAJe/EP-05.mp4',
      'https://streamtape.site/e/1Wq8mlYDwPFegkD/EP-06.mp4',
      'https://streamtape.site/e/RD00W9KZwXS7qJ/EP-07.mp4',
      'https://streamtape.site/e/qrpkYWrj3qfzbOb/EP-08.mp4',
      'https://streamtape.site/e/w4pJmZ1w2BtJ8rG/EP-09.mp4',
      'https://streamtape.site/e/Z1MVlZ4B2bhPz6/EP-10.mp4',
      'https://streamtape.site/e/OgW76yjmdRIm08/EP-11.mp4',
      'https://streamtape.site/e/7Y13l1AQZbiAry8/EP-12.mp4'
    ]
  },
  {
    animeId: 54112,
    animeName: 'Zom 100',
    animeLink: [
      'https://streamtape.site/e/3BY2R6PWZxsdvrj/Zom100_Ep-01.mp4',
      'https://streamtape.site/e/bQR4jwYdW7sPY1j/Zom100_Ep-02.mp4',
      'https://streamtape.site/e/7k9De1Wd0jSAlgP/Zom100_Ep-03.mp4',
      'https://streamtape.site/e/Lqbe2061WKi4VY/Zom100_Ep-04.mp4',
      'https://streamtape.site/e/LOe1KWD1w1Tegx/Zom100_Ep-05.mp4',
      'https://streamtape.site/e/OaZWOMLeLVugeX/Zom100_Ep-06.mp4',
      'https://streamtape.site/e/KyW4zD8PAbhAG0/Zom100_Ep-07.mp4',
      'https://streamtape.site/e/z1L4a0LpQjHYlqe/Zom100_Ep-08.mp4',
      'https://streamtape.site/e/DXk0pYmqp8hkO13/Zom100_Ep-09.mp4'
    ]
  },
  {
    animeId: 52347,
    animeName: 'Shangri la',
    animeLink: ['link1', 'link2', 'link3']
  },
  {
    animeId: 29803,
    animeName: 'OverLord',
    animeLink: [
      'https://streamtape.site/e/zL7WY1jWB1SYLV8/EP-01.mp4',
      'https://streamtape.site/e/8vgDrdjDPQhoqk6/EP-02.mp4',
      'https://streamtape.site/e/79793Bxym9cAjD6/EP-03.mp4',
      'https://streamtape.site/e/wPZqQK6o2VtJrm2/EP-04.mp4',
      'https://streamtape.site/e/019LBjdKlYFLOP/EP-05.mp4',
      'https://streamtape.site/e/APwRMvL7PQfXJrp/EP-06.mp4',
      'https://streamtape.site/e/A2VjZ0JOabTXo1P/EP-07.mp4',
      'https://streamtape.site/e/1RqrVD0mrlHez6A/EP-08.mp4',
      'https://streamtape.site/e/1zqQ6MoDRQhJGd/EP-09.mp4',
      'https://streamtape.site/e/JkVMyYODj4IogG/EP-10.mp4',
      'https://streamtape.site/e/rB3RgmyqWYSbV02/EP-11.mp4',
      'https://streamtape.site/e/9jM78PbegpI1KJ/EP-12.mp4',
      'https://streamtape.site/e/8X4ZzYVrKBFoA3K/EP-13.mp4'

    ]
  },
  {
    animeId: 40748,
    animeName: 'Jujutsu Kisein season 1',
    animeLink: [
      "https://streamtape.site/e/eA8ABOkqBJcYqkm",
      "https://streamtape.site/e/AlakKqw2xohXKKM",
      "https://streamtape.site/e/2PvWVZ4Y0jCZMPR",
      "https://streamtape.site/e/WPa9qyZo60H03w",
      "https://streamtape.site/e/QWYrBwJ7kAs0oez",
      "https://streamtape.site/e/GM3Lw20bDXC1XkD",
      "https://streamtape.site/e/r8J9K3l0YZSegB",
      "https://streamtape.site/e/mPlvdzaQdZFbxq1",
      "https://streamtape.site/e/jayl3gZXX4IaO4",
      "https://streamtape.site/e/oMyjyj8m0OFbbY",
      "https://streamtape.site/e/lkgY3bwbDotB16",
      "https://streamtape.site/e/2bVOBa2QKahRMg",
      "https://streamtape.site/e/kgD4vGdMoLSOxKY",
      "https://streamtape.site/e/llpLRbpyGvczvD",
      "https://streamtape.site/e/xPXGkJXrX9ikkrj",
      "https://streamtape.site/e/zk0dpBk8vWHQwK",
      "https://streamtape.site/e/016qr1BZKBIKRw",
      "https://streamtape.site/e/7DmDabBApDFAXGg",
      "https://streamtape.site/e/0dOb07qDaVFb7VM",
      "https://streamtape.site/e/AXpWvAzOXrIXYyo",
      "https://streamtape.site/e/02WzaX6xeZibGXa",
      "https://streamtape.site/e/LO9erQRjVvtRkyr",
      "https://streamtape.site/e/zrWq62ZvG9fYLRl",
      "https://streamtape.site/e/bRG2BYv1kWsPkZV"]
  },
  {
    animeId: 52830,
    animeName: 'I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too',
    animeLink: [
      'https://streamtape.site/e/BqwBMLgYWYTyLpX/EP-01.mp4',
      'https://streamtape.site/e/1DxkO4gBplCejgV/EP-02.mp4',
      'https://streamtape.site/e/jpmxAdoYORUQam/EP-03.mp4',
      'https://streamtape.site/e/w4ZwvXRj62Ulz9/EP-04.mp4',
      'https://streamtape.site/e/6pXWK3dxljt9aZK/EP-05.mp4',
      'https://streamtape.site/e/z7mw8GVeY6sYB2l/EP-06.mp4',
      'https://streamtape.site/e/L2JRyMwd93HRVrz/EP-07.mp4',
      'https://streamtape.site/e/3q447qPYJqUdQ89/EP-08.mp4',
      'https://streamtape.site/e/yAopGrbogKh16Z1/EP-09.mp4',
      'https://streamtape.site/e/4WpX4mKvKmFKerz/EP-10.mp4',
      'https://streamtape.site/e/Zkv4gO4W3ZFqbem/EP-11.mp4',
      'https://streamtape.site/e/8XwRzjr6YRu2dG/EP-12.mp4',
      'https://streamtape.site/e/aZ14pW42OWtxgGe/EP-13.mp4'
    ]
  },
  {
    animeId: 21,
    animeName: 'One Piece',
    animeLink: ['link1', 'link2', 'link3']
  }

];

// Function to search for animeId in the array
function searchAnimeById(idToSearch) {
  for (let i = 0; i < arrayOfObjects.length; i++) {
    if (arrayOfObjects[i].animeId == idToSearch) {
      return arrayOfObjects[i]; // Return the entire object if the animeId is found
    }
  }
  return null; // Return null if the animeId is not found
}

// Example usage


let result = searchAnimeById(animeIdValue);

function playVideo(index, AnimeId) {
  console.log('episode clicked! ');
  console.log(result);
  if (result != null) {
    Iframe.src = result.animeLink[index - 1];
    console.log(result.animeLink[index - 1]);
  }
}

const Iframe = document.getElementById('myIframe');
Iframe.src = result.animeLink[0];