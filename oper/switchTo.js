import { getActiveChunkElems } from "./getActiveChunkElems.js"
import { getParsedStyleWidth } from "../utils/getParsedStyleWidth.js"

function switchTo(to, collection, activeClass, activeChildClass) {
    const { currentNode, currentInnerNode, prevNode, nextNode } = getActiveChunkElems(collection, activeClass, activeChildClass)

    if (to === "back") {
        if (prevNode) {
            currentNode.classList.remove(activeClass)
            if (currentInnerNode) currentInnerNode.style.width = ""
            prevNode.classList.add(activeClass)
        }
    } else if (to === "forward") {
        if (nextNode) {
            currentNode.classList.remove(activeClass)
            if (currentInnerNode) {
                const currentInnerNodeWidth = getParsedStyleWidth(currentInnerNode)
                if (currentInnerNodeWidth < 100) currentInnerNode.style.width = "100%"
            }
            nextNode.classList.add(activeClass)
        }
    } else return

}

export { switchTo }