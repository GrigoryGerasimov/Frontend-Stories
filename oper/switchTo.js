import { getActiveChunkElems } from "./getChunkElems.js"

function switchTo(to, collection, activeClass) {
    const { currentNode, prevNode, nextNode } = getActiveChunkElems(collection, activeClass)

    if (to === "back") {
        if (prevNode) {
            currentNode.classList.remove(activeClass)
            prevNode.classList.add(activeClass)
        }
    } else if (to === "forward") {
        if (nextNode) {
            currentNode.classList.remove(activeClass)
            nextNode.classList.add(activeClass)
        }
    } else return

}

export { switchTo }