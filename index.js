import { switchTo } from "./oper/switchTo.js"
import { getActiveChunkElems } from "./oper/getActiveChunkElems.js"
import { getParsedStyleWidth } from "./utils/getParsedStyleWidth.js"

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
            const { currentInnerNode, nextNode } = getActiveChunkElems(timelineChunkCollection, "timeline-chunk-active", ".timeline-chunk-inner")

            let currentInnerNodeWidth = getParsedStyleWidth(currentInnerNode)

            if (currentInnerNodeWidth === 100) {
                forward()
                if (nextNode) currentInnerNode.style.width = ""
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
            switchBackwards(timelineChunkCollection, "timeline-chunk-active", ".timeline-chunk-inner")
            switchBackwards(playerChunkCollection, "player-chunk-active")
        }
        function forward() {
            switchForwards(timelineChunkCollection, "timeline-chunk-active", ".timeline-chunk-inner")
            switchForwards(playerChunkCollection, "player-chunk-active")
        }
    })
})()