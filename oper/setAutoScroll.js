import { getActiveChunkElems } from "./getActiveChunkElems.js"

function setAutoScroll(scroll, time, step, collection, classes) {
    const [timelineChunkActiveClass, timelineChunkInnerClass] = classes

    const autoScrollTimer = setInterval(() => {
        const { currentInnerNode, currentInnerNodeWidth, nextNode } = getActiveChunkElems(collection, timelineChunkActiveClass, timelineChunkInnerClass)

        if (currentInnerNodeWidth === 100) {
            scroll()
            if (nextNode) currentInnerNode.style.width = ""
            return
        }

        currentInnerNode.style.width = `${currentInnerNodeWidth + step}%`

    }, time * step / 100)

    return autoScrollTimer
}

export { setAutoScroll }