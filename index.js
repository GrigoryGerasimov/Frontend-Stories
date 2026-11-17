import { scrollTo } from "./oper/scrollTo.js"
import { setAutoScroll } from "./oper/setAutoScroll.js"
import { TimelineContainer } from "./Elements/Timeline/TimelineContainer.js"
import { PlayerContentContainer } from "./Elements/Player/PlayerContentContainer.js"
import { TimelineChunk } from "./Elements/Timeline/TimelineChunk.js"
import { PlayerChunk } from "./Elements/Player/PlayerChunk.js"

function initPlayer(paramsObj) {
    const { target, chunks, delayPerChunk } = paramsObj
    const myPlayer = document.querySelector(target)
    
    const timelineContainer = TimelineContainer().create().mount(myPlayer)
    const playerContentContainer = PlayerContentContainer().create().mount(myPlayer)

    for (const chunk of chunks) {
        TimelineChunk().create().mount(timelineContainer)
        PlayerChunk().create(chunk).mount(playerContentContainer)
    }

}

initPlayer({
    target: ".my-player",
    chunks: [
        {url: "./img/alex-azabache-8L7mOETNgHA-unsplash.jpg", alt: "Pirámida mexicana"},
        {url: "./img/andres-sanz-uILhNE1VcwA-unsplash.jpg", alt: "Desierto al atardecer"},
        {url: "./img/bhargava-marripati-7LDBKPWAHJ4-unsplash.jpg", alt: "El Zócalo"},
        {url: "./img/carlos-aguilar-oGRrpBX2ER4-unsplash.jpg", alt: "El Templo"},
        {url: "./img/christopher-kuzman-2LhCDvS_7xs-unsplash.jpg", alt: "Paisaje oceánico"},
        {url: "./img/david-carballar-FZU-vIW-lk8-unsplash.jpg", alt: "La Catedral"},
        {url: "./img/marv-watson-UfK0P6WygEE-unsplash.jpg", alt: "Pirámida de los Maya"},
        {url: "./img/megumi-sugiyama-17SkY0uq23A-unsplash.jpg", alt: "Calle oaxaqueña"},
    ],
    delayPerChunk: 5000
})


(() => {
    window.addEventListener("load", () => {
        const TIME = 5000
        const STEP = 1
        const TIMELINE_CHUNK_ACTIVE_CLASS = "timeline-chunk-active"
        const TIMELINE_CHUNK_INNER_CLASS = "timeline-chunk-inner"
        const PLAYER_CHUNK_ACTIVE_CLASS = "player-chunk-active"

        const playerChunkScrollerPrev = document.querySelector(".player-chunk-prev")
        const playerChunkScrollerNext = document.querySelector(".player-chunk-next")
        const timelineChunkCollection = document.querySelectorAll(".timeline-chunk")
        const playerChunkCollection = document.querySelectorAll(".player-chunk")

        playerChunkScrollerPrev.addEventListener(
            "click", () => scrollTo(
                "back",
                [timelineChunkCollection, playerChunkCollection],
                [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS, PLAYER_CHUNK_ACTIVE_CLASS]
            ))
        playerChunkScrollerNext.addEventListener(
            "click", () => scrollTo(
                "forward",
                [timelineChunkCollection, playerChunkCollection],
                [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS, PLAYER_CHUNK_ACTIVE_CLASS]
            ))

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
    })
})()