import { getActiveChunkElems } from "./getActiveChunkElems.js"

function switchTo(to, collectionArr) {
    const [timelineChunkCollection, playerChunkCollection] = collectionArr
    const {
        currentNode: currentTimelineChunk,
        currentInnerNode: currentInnerTimelineChunk,
        currentInnerNodeWidth: currentInnerTimelineChunkWidth,
        prevNode: prevTimelineChunk,
        nextNode: nextTimelineChunk
    } = getActiveChunkElems(timelineChunkCollection, "timeline-chunk-active", "timeline-chunk-inner")
    const {
        currentNode: currentPlayerChunk,
        prevNode: prevPlayerChunk,
        nextNode: nextPlayerChunk
    } = getActiveChunkElems(playerChunkCollection, "player-chunk-active")

    if (to === "back") {
        if (currentInnerTimelineChunkWidth < 50) {
            // timeline chunk logic
            if (prevTimelineChunk) {
                currentTimelineChunk.classList.remove("timeline-chunk-active")
                currentInnerTimelineChunk.style.width = ""
                prevTimelineChunk.classList.add("timeline-chunk-active")
            } else if (currentInnerTimelineChunk) currentInnerTimelineChunk.style.width = 0
            // player chunk logic
            if (prevPlayerChunk) {
                currentPlayerChunk.classList.remove("player-chunk-active")
                prevPlayerChunk.classList.add("player-chunk-active")
            }
        } else currentInnerTimelineChunk.style.width = 0
    } else if (to === "forward") {
        // timeline chunk logic
        if (nextTimelineChunk) {
            currentTimelineChunk.classList.remove("timeline-chunk-active")
            if (currentInnerTimelineChunkWidth < 100) currentInnerTimelineChunk.style.width = "100%"
            nextTimelineChunk.classList.add("timeline-chunk-active")
        }
        // player chunk logic
        if (nextPlayerChunk) {
            currentPlayerChunk.classList.remove("player-chunk-active")
            nextPlayerChunk.classList.add("player-chunk-active")
        }
    } else return
}

export { switchTo }