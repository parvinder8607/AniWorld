

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
                <div  class="episode" onClick="playVideo(this,'${index}')">
               <span> <span>${index}</span>${item.title}</span>
            </div>
           
                    `;
        }
        else {
          EpisodeList.innerHTML = ` 
                         <div  class="episode color2" onClick="playVideo(this,'${index}')">
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
    animeLink:
    {
      Sub_link: ['link1', 'link2', 'link3']
    }
  },
  {
    animeId: 53887,
    animeName: 'Spy X family season 2',
    animeLink: {
      Sub_link: [
        'https://streamtape.site/e/jZarJB6emOsL8D/EP-01.mp4',
        'https://streamtape.site/e/JbgMLkmzYWij4ld/EP-02.mp4',
        'https://streamtape.site/e/vBPzmAVPeVtPlw/EP-03.mp4',
        'https://streamtape.site/e/D0rBGwd42JTAWv/EP-04.mp4',
        'https://streamtape.site/e/A4vkK6R6GDIX3l8/EP-05.mp4',
        'https://streamtape.site/e/ydyDk9gLeqFeYl/EP-06.mp4',
        'https://streamtape.site/e/lDzVD0y6e1U7Po0/EP-07.mp4',
        'https://streamtape.site/e/yAXdxPdBYxCm67/EP-08.mp4',
        'https://streamtape.site/e/QkAB8RymgBi00Qx/EP-09.mp4'
      ],
      Dub_link: [
        'https://streamtape.site/e/w61V972bBkiJO04/EP-01.mp4',
        'https://streamtape.site/e/W10RogVya3tbjky/EP-03.mp4',
        'https://streamtape.site/e/Og7AoO61mOTZvmJ/EP-04.mp4',
        'https://streamtape.site/e/BYdYyQW09Luy12J/EP-05.mp4',
        'https://streamtape.site/e/j4a4jppx1PfQ19/EP-06.mp4',
        'https://streamtape.site/e/J2Lmq7qdgDHjMKJ/EP-07.mp4'
      ],
    }
  },
  {
    animeId: 41487,
    animeName: 'that time season 2 part 2',
    animeLink: {
      Sub_link: [
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
    }
  },
  {
    animeId: 54112,
    animeName: 'Zom 100',
    animeLink: {
      Sub_link: [
        'https://streamtape.site/e/3BY2R6PWZxsdvrj/Zom100_Ep-01.mp4',
        'https://streamtape.site/e/bQR4jwYdW7sPY1j/Zom100_Ep-02.mp4',
        'https://streamtape.site/e/7k9De1Wd0jSAlgP/Zom100_Ep-03.mp4',
        'https://streamtape.site/e/Lqbe2061WKi4VY/Zom100_Ep-04.mp4',
        'https://streamtape.site/e/LOe1KWD1w1Tegx/Zom100_Ep-05.mp4',
        'https://streamtape.site/e/OaZWOMLeLVugeX/Zom100_Ep-06.mp4',
        'https://streamtape.site/e/KyW4zD8PAbhAG0/Zom100_Ep-07.mp4',
        'https://streamtape.site/e/z1L4a0LpQjHYlqe/Zom100_Ep-08.mp4',
        'https://streamtape.site/e/DXk0pYmqp8hkO13/Zom100_Ep-09.mp4'
      ],
      Dub_link: [
        'https://streamtape.site/e/0Ab8Ly2A2LFbpQ6/Zom_100_Ep-01',
        'https://streamtape.site/e/Q3BbpW2pBDFJLl/Zom_100_Ep-02',
        'https://streamtape.site/e/eYO8bOw4j9FoAX/Zom_100_Ep-03',
        'https://streamtape.site/e/dpgoJx90dxSkrPX/Zom_100_Ep-04',
        'https://streamtape.site/e/3PoJ2kK9reSdybV/Zom_100_Ep-05',
        'https://streamtape.site/e/vl1JrQAPRWH4Gya/Zom_100_Ep-06',
        'https://streamtape.site/e/my4jq7jVmGcXmb/Zom_100_Ep-07',
        'https://streamtape.site/e/APMgArPPP0Cwga/Zom_100_Ep-08',
        'https://streamtape.site/e/AL7ekbaqmqtXrGk/Zom_100_Ep-09'

      ],
      Hub_link: [
        'https://streamtape.site/e/3kzzXAlpgQcdv49/Zom100_Ep-01',
        'https://streamtape.site/e/WwZ3jl3RYMcWDV/Zom100_Ep-02',
        'https://streamtape.site/e/Dz6qPOrOOqUkglL/Zom100_Ep-03',
        'https://streamtape.site/e/XJ7Z1QbvApS3lw/Zom100_Ep-04',
        'https://streamtape.site/e/A27YKlpJYPFX3Pk/Zom100_Ep-05',
        'https://streamtape.site/e/4R3d0Pw266FKYXy/Zom100_Ep-06',
        'https://streamtape.site/e/aoBj9rpALwux1XB/Zom100_Ep-07',
        'https://streamtape.site/e/k2OWZ8YOa3Ue6k/Zom100_Ep-08',
        'https://streamtape.site/e/gwbrx8gW3wIvex/Zom100_Ep-09'
      ]
    }
  },
  {
    animeId: 52347,
    animeName: 'Shangri la',
    animeLink: ['link1', 'link2', 'link3']
  },
  {
    animeId: 29803,
    animeName: 'OverLord',
    animeLink:  {
      Sub_link:[
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
  }
  },
  {
    animeId: 40748,
    animeName: 'Jujutsu Kisein season 1',
    animeLink: {
      Sub_link: [
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
    }
  },
  {
    animeId: 52830,
    animeName: 'I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too',
    animeLink:  {
      Sub_link: [
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
  }
  },
  {
    animeId: 21,
    animeName: 'One Piece',
    animeLink: {
      Sub_link: ['link1', 'link2', 'link3']
    }
  }

];
let currentEp = 1;
let audioType = 'sub';
function changeAudio(divId) {
  var subBtn = document.getElementById('sub');
  var dubBtn = document.getElementById('dub');
  var hubBtn = document.getElementById('hub');
  if (divId == 'sub') {
    Iframe.src = result.animeLink.Sub_link[currentEp - 1];
    subBtn.style.backgroundColor = 'rgb(212, 230, 133)';
    dubBtn.style.backgroundColor = '#28283b';
    hubBtn.style.backgroundColor = '#28283b';

  }
  if (divId == 'dub') {
    Iframe.src = result.animeLink.Dub_link[currentEp - 1];
    subBtn.style.backgroundColor = '#28283b';
    hubBtn.style.backgroundColor = '#28283b';
    dubBtn.style.backgroundColor = 'rgb(212, 230, 133)';

  }
  if (divId == 'hub') {
    Iframe.src = result.animeLink.Hub_link[currentEp - 1];
    subBtn.style.backgroundColor = '#28283b';
    dubBtn.style.backgroundColor = '#28283b';
    hubBtn.style.backgroundColor = 'rgb(212, 230, 133)';

  }

  audioType = divId;
}
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
function playVideo(playEpd, index) {

  playEpd.style.backgroundColor = '#484f32';
  playEpd.style.color = 'yellow';

  let allElements = document.querySelectorAll('.episode');
  console.log(allElements[0]);
  // Loop through all elements and update the style
  allElements.forEach(function (element, i) {
    if (i < (index - 1)) {
      // Change the style of leftover divs
      element.style.backgroundColor = 'rgb(65 65 67)';
      element.style.color = '#898978';
    }
    if (i > (index - 1)) {
      element.style.backgroundColor = 'revert-layer';
      element.style.color = 'revert-layer';
    }
  });
  currentEp = index;
  if (result != null) {
    if (audioType == 'sub') {
      Iframe.src = result.animeLink.Sub_link[index - 1];
      console.log(result.animeLink.Sub_link[index - 1]);
    }
    if (audioType == 'dub') {
      Iframe.src = result.animeLink.Dub_link[index - 1];
      console.log(result.animeLink.Dub_link[index - 1]);
    }
    if (audioType == 'hub') {
      Iframe.src = result.animeLink.Hub_link[index - 1];
      console.log(result.animeLink.Hub_link[index - 1]);
    }
  }
}

const Iframe = document.getElementById('myIframe');
Iframe.src = result.animeLink.Sub_link[0];
console.log(result.animeLink);
// firstEp.style.color = 'red';