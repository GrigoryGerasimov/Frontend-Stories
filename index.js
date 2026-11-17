import { scrollTo } from "./oper/scrollTo.js"
import { setAutoScroll } from "./oper/setAutoScroll.js"

(() => {
    window.addEventListener("load", () => {
        const playerChunkScrollerPrev = document.querySelector(".player-chunk-prev")
        const playerChunkScrollerNext = document.querySelector(".player-chunk-next")
        const timelineChunkCollection = document.querySelectorAll(".timeline-chunk")
        const playerChunkCollection = document.querySelectorAll(".player-chunk")

        const STEP = 1
        const TIMELINE_CHUNK_ACTIVE_CLASS = "timeline-chunk-active"
        const TIMELINE_CHUNK_INNER_CLASS = "timeline-chunk-inner"
        const PLAYER_CHUNK_ACTIVE_CLASS = "player-chunk-active"

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
            STEP, 
            timelineChunkCollection, 
            [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS]
        )
    })
})()