import { getActiveChunkElems } from "./getChunkElems.js"

(() => {
    window.addEventListener("load", () => {
        const playerChunkSwitcherPrev = document.querySelector(".player-chunk-prev")
        const playerChunkSwitcherNext = document.querySelector(".player-chunk-next")
        const timelineChunkCollection = document.querySelectorAll(".timeline-chunk")
        const playerChunkCollection = document.querySelectorAll(".player-chunk")

        function switchBackwards(chunkCollection, activeClass) {
            const { currentNode, currentNodeIndex, prevNode } = getActiveChunkElems(chunkCollection, activeClass)

            if (currentNodeIndex > 0) {
                currentNode.classList.remove(activeClass)
                prevNode.classList.add(activeClass)
            }
        }

        function switchForwards(chunkCollection, activeClass) {
            const { currentNode, currentNodeIndex, nextNode } = getActiveChunkElems(chunkCollection, activeClass)

            if (currentNodeIndex < chunkCollection.length - 1) {
                currentNode.classList.remove(activeClass)
                nextNode.classList.add(activeClass)
            }
        }

        playerChunkSwitcherPrev.addEventListener("click", () => {
            switchBackwards(timelineChunkCollection, "timeline-chunk-active")
            switchBackwards(playerChunkCollection, "player-chunk-active")
        })
        playerChunkSwitcherNext.addEventListener("click", () => {
            switchForwards(timelineChunkCollection, "timeline-chunk-active")
            switchForwards(playerChunkCollection, "player-chunk-active")
        })
    })
})()