import { getActiveChunkElems } from "./getActiveChunkElems.js"

/**
 * @description The scrollTo function maintains the main scrolling logic.
 * @param {string} to - indicates the direction of scrolling: either backwards or forwards.
 * @param {Nodelist} collectionArr - nodelists of timeline chunks and player chunks.
 * @param {Array<string>} classes - additional classnames for timeline chunks and player chunks.
 * @returns {undefined} The function contains the main scrolling logic without returning anything, if both to-directions turn out to be different than expected, the function returns undefined.
 */
function scrollTo(to, collectionArr, classes) {
    const [timelineChunkCollection, playerChunkCollection] = collectionArr
    const [timelineChunkActiveClass, timelineChunkInnerClass, playerChunkActiveClass] = classes
    const {
        currentNode: currentTimelineChunk,
        currentInnerNode: currentInnerTimelineChunk,
        currentInnerNodeWidth: currentInnerTimelineChunkWidth,
        prevNode: prevTimelineChunk,
        nextNode: nextTimelineChunk
    } = getActiveChunkElems(timelineChunkCollection, timelineChunkActiveClass, timelineChunkInnerClass)
    const {
        currentNode: currentPlayerChunk,
        prevNode: prevPlayerChunk,
        nextNode: nextPlayerChunk
    } = getActiveChunkElems(playerChunkCollection, playerChunkActiveClass)

    if (to === "back") {
        if (currentInnerTimelineChunkWidth < 50) {
            // timeline chunk logic
            if (prevTimelineChunk) {
                currentTimelineChunk.classList.remove(timelineChunkActiveClass)
                currentInnerTimelineChunk.style.width = ""
                prevTimelineChunk.classList.add(timelineChunkActiveClass)
            } else if (currentInnerTimelineChunk) currentInnerTimelineChunk.style.width = 0
            // player chunk logic
            if (prevPlayerChunk) {
                currentPlayerChunk.classList.remove(playerChunkActiveClass)
                prevPlayerChunk.classList.add(playerChunkActiveClass)
            }
        } else currentInnerTimelineChunk.style.width = 0
    } else if (to === "forward") {
        // timeline chunk logic
        if (nextTimelineChunk) {
            currentTimelineChunk.classList.remove(timelineChunkActiveClass)
            if (currentInnerTimelineChunkWidth < 100) currentInnerTimelineChunk.style.width = "100%"
            nextTimelineChunk.classList.add(timelineChunkActiveClass)
        }
        // player chunk logic
        if (nextPlayerChunk) {
            currentPlayerChunk.classList.remove(playerChunkActiveClass)
            nextPlayerChunk.classList.add(playerChunkActiveClass)
        }
    } else return
}

export { scrollTo }