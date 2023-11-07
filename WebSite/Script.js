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
    const iframe = document.getElementById('myIframe');

    const buttons = document.querySelectorAll('.episode');
    const dubBotton = document.getElementById('dubBotton');
    const subBotton = document.getElementById('subBotton');
    // // Store URLs in an array
    const urlsSub = [
        "//goone.pro/streaming.php?id=MTEwMzY5&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+1&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEwNDk0&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+2&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEwNjEx&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+3&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEwNzM0&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+4&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEwODY0&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+5&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEwOTg1&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+6&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExMTE0&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+7&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExMjE5&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+8&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExMzIw&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+9&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExNDIy&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+10&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExNTM1&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+11&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExNzA5&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+12&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEyMDI5&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+13&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEyMzE3&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+14&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEyNTE3&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+15&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEyNjYz&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+16&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEyOTQz&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+17&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEzMjI2&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+18&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEzMzk5&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+19&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEzNzk0&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+20&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE0MDM1&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+21&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE0NjQw&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+22&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE1MTEx&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+23&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE1NTI1&amp;title=Tensei+shitara+Slime+Datta+Ken+Episode+24&amp;typesub=SUB"

    ];
    const urlsDub = [
        "//goone.pro/streaming.php?id=MTEwNzU3&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+1&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEwODc3&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+2&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEwOTk5&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+3&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExMTI4&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+4&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExMjI2&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+5&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExMzMx&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+6&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExNDQy&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+7&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExNTQ4&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+8&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTExNzIw&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+9&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEyMDM5&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+10&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEyMzIz&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+11&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEyNTIx&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+12&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEyNjY5&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+13&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEyOTQ4&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+14&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEzMjMz&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+15&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEzNDA0&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+16&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTEzNzk5&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+17&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE0MDQw&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+18&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE0NjQ3&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+19&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE1MTE3&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+20&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE1NTMy&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+21&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE1OTE3&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+22&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE2MzM3&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+23&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE2OTQ1&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+24&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTE3NjE3&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+24.5&amp;typesub=SUB",
        "//goone.pro/streaming.php?id=MTUyMTEw&amp;title=Tensei+shitara+Slime+Datta+Ken+%28Dub%29+Episode+24.9&amp;typesub=SUB",
    ];
    // // Add a click event listener to each button
    let urls = urlsSub.slice();
    let currentEpisode;




    buttons.forEach((button, index) => {
        if (index == '0') { currentEpisode = 0; }
        // Event for Episode list 
        button.addEventListener('click', () => {
            // Change the src of the iframe based on the button clicked
            iframe.src = urls[index];
            EpisodeNo.querySelector('h4').textContent = `Episode - ${index + 1}`;
            currentEpisode = index;

        });
        // Event for Sub Button 
        subBotton.addEventListener('click', () => {
            subBotton.style.backgroundColor = 'rgb(212, 230, 133)';
            subBotton.style.color = 'black';
            dubBotton.style.backgroundColor = 'inherit';
            dubBotton.style.color = 'inherit';
            urls = urlsSub.slice();
            iframe.src = urls[currentEpisode];
        });
        // Event for Dub Button 
        dubBotton.addEventListener('click', () => {
            dubBotton.style.backgroundColor = 'rgb(212, 230, 133)';
            dubBotton.style.color = 'black';
            subBotton.style.backgroundColor = 'inherit';
            subBotton.style.color = 'inherit';
            urls = urlsDub.slice();
            iframe.src = urls[currentEpisode];
        });

    });

    const loadingIndicator = document.getElementById('loading-indicator');

    iframe.addEventListener('load', () => {
        loadingIndicator.style.display = 'none';
        iframe.style.display = 'block';
    });
    iframe.addEventListener('ended', ()=>{
        prompt('Video you watch is Ended');
    });
   
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
    const filteredResults = data.filter((result) =>
        result.title.toLowerCase().includes(query)
    );
    displayResults(filteredResults);
});
