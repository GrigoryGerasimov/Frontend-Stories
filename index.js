import { switchTo } from "./oper/switchTo.js"
import { getActiveChunkElems } from "./oper/getActiveChunkElems.js"

(() => {
    window.addEventListener("load", () => {
        const playerChunkSwitcherPrev = document.querySelector(".player-chunk-prev")
        const playerChunkSwitcherNext = document.querySelector(".player-chunk-next")
        const timelineChunkCollection = document.querySelectorAll(".timeline-chunk")
        const playerChunkCollection = document.querySelectorAll(".player-chunk")

        const step = 1

        playerChunkSwitcherPrev.addEventListener("click", () => switchTo("back", [timelineChunkCollection, playerChunkCollection]))
        playerChunkSwitcherNext.addEventListener("click", () => switchTo("forward", [timelineChunkCollection, playerChunkCollection]))

        setInterval(() => {
            const { currentInnerNode, currentInnerNodeWidth, nextNode } = getActiveChunkElems(timelineChunkCollection, "timeline-chunk-active", "timeline-chunk-inner")

            if (currentInnerNodeWidth === 100) {
                switchTo("forward", [timelineChunkCollection, playerChunkCollection])
                if (nextNode) currentInnerNode.style.width = ""
                return
            }

            currentInnerNode.style.width = `${currentInnerNodeWidth + step}%`

        }, 2000 * step / 100)
    })
})()