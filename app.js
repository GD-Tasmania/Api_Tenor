const key = "AIzaSyAoW72T3zQ4RzgJhDuRqewj-0mDWNmnTTc"
const apiFeaturedURL = "https://tenor.googleapis.com/v2/featured?key="
const apiSearchURL = "https://tenor.googleapis.com/v2/search?q="

const input = document.getElementById('input')
const containerGif = document.getElementById("containerGif")

window.addEventListener("DOMContentLoaded", ()=>{
    fetch(`${apiFeaturedURL}${key}&q=`)
    .then(response => response.json())
    .then(data => createGift(data))
})

input.addEventListener('keyup', (event)=>{
    containerGif.innerHTML = " "

    fetch(`${apiSearchURL}${event.target.value}&key=${key}`)
    .then(response => response.json())
    .then(data => createGift(data))

    if(event.target.value === ""){
        location.reload()
    }
})

function createGift(data){
    data.results.forEach(element => {
        console.log(element.media_formats.gif.url)

        const card = document.createElement('div')
        card.classList.add("card")

        const gifImg = document.createElement('img')
        gifImg.src = element.media_formats.gif.url
        gifImg.classList.add("gifImg")

        card.appendChild(gifImg)
        containerGif.appendChild(card)
    });
}