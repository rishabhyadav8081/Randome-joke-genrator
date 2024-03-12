const jokecontainer = document.getElementById("joke");
const button = document.getElementById("btn");
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
let getjoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokecontainer.textContent =`${ item.joke}`
    });
    button.addEventListener("click",getjoke)
}
getjoke();