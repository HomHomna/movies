import movies from './movies.json'

import icons from './icon.json'

import './style.scss'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('card')
    const movie = movies
    
    movie.forEach(movieDom => {
        let cardDOM = buildCardDOM(movieDom)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
})

function buildCardDOM(movie) {

    let IconScore = ''
    let t = movie.tomatoScore
    if (t < 60 ) {
        IconScore += `<img class="icon" src="${icons[2].img}" alt="#" />`
    }
    else if (t < 80) {
        IconScore += `<img class="icon" src="${icons[1].img}" alt="#" />`
    } else {
        IconScore += `<img class="icon" src="${icons[0].img}" alt="#" />`
    }
    
    return (
        `<div class="cards">
            <img src="${movie.posters.primary}" alt="">
            <h2 class="title">${movie.title}</h2>
            <h4 class="tomatoScore">${IconScore}${movie.tomatoScore}%</h4>
            <P class="dvdReleaseDate">${movie.dvdReleaseDate}</P>
        </div>`
    )
}
