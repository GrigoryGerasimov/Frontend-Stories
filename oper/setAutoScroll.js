import { getActiveChunkElems } from "./getActiveChunkElems.js"
import { removeAutoScroll } from "./removeAutoScroll.js"

/**
 * @description Callback function scrollTo with the main scrolling logic.
 * @callback scrollCallback
 * @param {string} to - indicates the direction of scrolling: either backwards or forwards.
 * @param {Nodelist} collectionArr - nodelists of timeline chunks and player chunks.
 * @param {Array<string>} classes - additional classnames for timeline chunks and player chunks.
 */
/**
 * @description The setAutoScroll function sets time interval for automatic stories scrolling.
 * @param {scrollCallback} scroll - the callback function scrollTo with the main scrolling logic.
 * @param {number} time - how long a player image is being shown.
 * @param {number} step - the speed at which a player image is being shown.
 * @param {Nodelist} collection - nodelists of timeline chunks and player chunks.
 * @param {Array<string>} classes - additional classnames for timeline chunks and player chunks.
 * @returns {number} Returns autoScrollTimer for further timer managing.
 */
function setAutoScroll(scroll, time, step, collection, classes) {
    const [timelineChunkActiveClass, timelineChunkInnerClass] = classes

    const autoScrollTimer = setInterval(() => {
        const { currentInnerNode, currentInnerNodeWidth, nextNode } = getActiveChunkElems(collection, timelineChunkActiveClass, timelineChunkInnerClass)

        if (currentInnerNodeWidth === 100) {
            scroll()
            if (nextNode) currentInnerNode.style.width = ""
            else removeAutoScroll(autoScrollTimer)
            return
        }

        currentInnerNode.style.width = `${currentInnerNodeWidth + step}%`

    }, time * step / 100)

    return autoScrollTimer
}

export { setAutoScroll }