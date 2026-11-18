import { mountApp } from "./App/App.js"

const TIME = 5000
const STEP = 1

const playerImages = [
    { src: "./img/alex-azabache-8L7mOETNgHA-unsplash.jpg", alt: "Pirámida mexicana" },
    { src: "./img/andres-sanz-uILhNE1VcwA-unsplash.jpg", alt: "Desierto al atardecer" },
    { src: "./img/bhargava-marripati-7LDBKPWAHJ4-unsplash.jpg", alt: "El Zócalo" },
    { src: "./img/carlos-aguilar-oGRrpBX2ER4-unsplash.jpg", alt: "El Templo" },
    { src: "./img/christopher-kuzman-2LhCDvS_7xs-unsplash.jpg", alt: "Paisaje oceánico" },
    { src: "./img/david-carballar-FZU-vIW-lk8-unsplash.jpg", alt: "La Catedral" },
    { src: "./img/marv-watson-UfK0P6WygEE-unsplash.jpg", alt: "Pirámida de los Maya" },
    { src: "./img/megumi-sugiyama-17SkY0uq23A-unsplash.jpg", alt: "Calle oaxaqueña" },
]

window.addEventListener("load", () => {
    mountApp({
        playerImageParams: playerImages,
        delayPerChunk: TIME,
        stepPerChunk: STEP
    })
})