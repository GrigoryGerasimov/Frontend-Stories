import { switchTo } from "./function/switchTo.js"

(() => {
    window.addEventListener("load", () => {
        const playerChunkSwitcherPrev = document.querySelector(".player-chunk-prev")
        const playerChunkSwitcherNext = document.querySelector(".player-chunk-next")
        const timelineChunkCollection = document.querySelectorAll(".timeline-chunk")
        const playerChunkCollection = document.querySelectorAll(".player-chunk")

        playerChunkSwitcherPrev.addEventListener("click", () => {
            switchBackwards(timelineChunkCollection, "timeline-chunk-active")
            switchBackwards(playerChunkCollection, "player-chunk-active")
        })
        playerChunkSwitcherNext.addEventListener("click", () => {
            switchForwards(timelineChunkCollection, "timeline-chunk-active")
            switchForwards(playerChunkCollection, "player-chunk-active")
        })

        function switchBackwards(...args) {
            switchTo("back", ...args)
        }
        function switchForwards(...args) {
            switchTo("forward", ...args)
        }
    })
})()