import { switchTo } from "./oper/switchTo.js"
import { getActiveChunkElems } from "./oper/getChunkElems.js"

(() => {
    window.addEventListener("load", () => {
        const playerChunkSwitcherPrev = document.querySelector(".player-chunk-prev")
        const playerChunkSwitcherNext = document.querySelector(".player-chunk-next")
        const timelineChunkCollection = document.querySelectorAll(".timeline-chunk")
        const playerChunkCollection = document.querySelectorAll(".player-chunk")

        const step = 1

        playerChunkSwitcherPrev.addEventListener("click", back)
        playerChunkSwitcherNext.addEventListener("click", forward)

        setInterval(() => {
            const { currentNode } = getActiveChunkElems(timelineChunkCollection, "timeline-chunk-active")
            const currentInnerNode = currentNode.querySelector(".timeline-chunk-inner")
            let currentInnerNodeWidth = parseFloat(currentInnerNode.style.width) || 0

            if (currentInnerNodeWidth === 100) {
                //currentInnerNodeWidth = ""
                forward()
                return
            }

            currentInnerNode.style.width = `${currentInnerNodeWidth + step}%`

        }, 2000 * step / 100)

        function switchBackwards(...args) {
            switchTo("back", ...args)
        }
        function switchForwards(...args) {
            switchTo("forward", ...args)
        }

        function back() {
            switchBackwards(timelineChunkCollection, "timeline-chunk-active")
            switchBackwards(playerChunkCollection, "player-chunk-active")
        }
        function forward() {
            switchForwards(timelineChunkCollection, "timeline-chunk-active")
            switchForwards(playerChunkCollection, "player-chunk-active")
        }
    })
})()