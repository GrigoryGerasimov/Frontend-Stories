import { getActiveChunkElems } from "./getActiveChunkElems.js"

function setAutoScroll(scroll, step, collection, classes) {
    const [timelineChunkActiveClass, timelineChunkInnerClass] = classes

    const autoScroll = setInterval(() => {
        const { currentInnerNode, currentInnerNodeWidth, nextNode } = getActiveChunkElems(collection, timelineChunkActiveClass, timelineChunkInnerClass)

        if (currentInnerNodeWidth === 100) {
            scroll()
            if (nextNode) currentInnerNode.style.width = ""
            return
        }

        currentInnerNode.style.width = `${currentInnerNodeWidth + step}%`

    }, 2000 * step / 100)

    return autoScroll
}

export { setAutoScroll }