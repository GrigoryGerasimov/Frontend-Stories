import { getActiveChunkElems } from "./getChunkElems.js"

function switchTo(to, collection, activeClass) {
    const { currentNode, currentNodeIndex, prevNode, nextNode } = getActiveChunkElems(collection, activeClass)

    if (to === "back") {
        if (currentNodeIndex > 0) {
            currentNode.classList.remove(activeClass)
            prevNode.classList.add(activeClass)
        }
    } else if (to === "forward") {
        if (currentNodeIndex < collection.length - 1) {
            currentNode.classList.remove(activeClass)
            nextNode.classList.add(activeClass)
        }
    } else return

}

export { switchTo }