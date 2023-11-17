    const sIcon = document.getElementById('search-icon');
    const sBar = document.querySelector('.search-bar');
    const resultsContainer = document.getElementById("results-container");
    

    sIcon.addEventListener('click', () => {
        if (sBar.style.display == 'none') {
            resultsContainer.style.display = 'block';
            sBar.style.display = 'block';
            sBarr.focus();
        } else {
            sBar.style.display = 'none';
            resultsContainer.style.display = 'none';

        }
    })
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    let menuLeft = menu.style.left;
    menuIcon.addEventListener('click', () => {
        menu.style.left = '0px';
    });

    menu.addEventListener('click', () => {
        menu.style.left = '-250px'
    });
    // Get a reference to the iframe, the buttons, and store URLs in an array
 
   
    // script.js
const searchInput = document.getElementById("sBarr");

const data = [
    {
        title: "Eminence in Shadow",
        description: "Description for Result 1",
        imageUrl: "/Eminence.jpg",
        link: "/Eminence In Shadow",
    },
    {
        title: "That time i got reincarnated as a slime",
        description: "Description for Result 2",
        imageUrl: "/That time i got reincarnated as a Slime/image/anime-image.jpg",
        link: "/That time i got reincarnated as a Slime",
    },
    {
        title: "The 100 Girls that really really really really love me ",
        description: "Description for Result 2",
        imageUrl: "/The 100 Girls.jpg",
        link: "/The 100 Girls really really really love me",
    },
    
];

function displayResults(results) {
    resultsContainer.innerHTML = "";
    results.forEach((result) => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
        resultItem.innerHTML = `
            <img src="${result.imageUrl}" alt="${result.title}">
            <h3>${result.title}</h3>
        
        `;
        resultItem.addEventListener("click", () => {
            window.location.href = result.link;
        });
        resultsContainer.appendChild(resultItem);
    });
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    query.replace(/ /g, "%20");
    const filteredResults = data.filter((result) =>
        result.title.toLowerCase().includes(query)
    );
    displayResults(filteredResults);
});

const elements = document.querySelectorAll(".item");

elements.forEach(element => {
  element.addEventListener("click", function() {
    const url = element.getAttribute("data-url");
    window.location.href = url; // Navigate to the specified URL
  });
});

