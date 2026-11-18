import { scrollTo } from "./oper/scrollTo.js"
import { setAutoScroll } from "./oper/setAutoScroll.js"
import { mountApp } from "./App/App.js"

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
const playerChunkScrollerClasses = [
    "player-chunk-prev", "player-chunk-next"
]

window.addEventListener("load", () => {
    const TIME = 5000
    const STEP = 1
    const TIMELINE_CHUNK_ACTIVE_CLASS = "timeline-chunk-active"
    const TIMELINE_CHUNK_INNER_CLASS = "timeline-chunk-inner"
    const PLAYER_CHUNK_ACTIVE_CLASS = "player-chunk-active"

    mountApp({
        chunkParams: {
            playerImageParams: playerImages,
            playerChunkScrollerClasses
        },
        delayPerChunk: TIME
    })

    const playerChunkScrollerPrev = document.querySelector(".player-chunk-prev")
    const playerChunkScrollerNext = document.querySelector(".player-chunk-next")
    const timelineChunkCollection = document.querySelectorAll(".timeline-chunk")
    const playerChunkCollection = document.querySelectorAll(".player-chunk")

    if (playerChunkScrollerPrev && playerChunkScrollerNext) {
        playerChunkScrollerPrev.addEventListener(
            "click", () => {
                console.log("prev checked")
                scrollTo(
                    "back",
                    [timelineChunkCollection, playerChunkCollection],
                    [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS, PLAYER_CHUNK_ACTIVE_CLASS]
                )
            })
        playerChunkScrollerNext.addEventListener(
            "click", () => scrollTo(
                "forward",
                [timelineChunkCollection, playerChunkCollection],
                [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS, PLAYER_CHUNK_ACTIVE_CLASS]
            ))
    }

    if (timelineChunkCollection && playerChunkCollection) {
        try {
            setAutoScroll(() => scrollTo(
                "forward",
                [timelineChunkCollection, playerChunkCollection],
                [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS, PLAYER_CHUNK_ACTIVE_CLASS]
            ),
                TIME,
                STEP,
                timelineChunkCollection,
                [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS]
            )
        } catch (err) {
            throw new Error(err.message)
        }
    }

})