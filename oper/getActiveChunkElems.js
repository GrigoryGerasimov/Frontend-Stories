import { getParsedStyleWidth } from "../utils/getParsedStyleWidth.js"

const getActiveElem = (elem, elemClass) => elem.classList.contains(elemClass) ? elem : null

function getActiveChunkElems(nodeCollection, activeParentNodeClass, activeChildNodeClass) {
    const nodeCollectionArray = Array.from(nodeCollection)
    const currentNode = nodeCollectionArray.find(e => getActiveElem(e, activeParentNodeClass))
    const currentInnerNode = activeChildNodeClass && currentNode.querySelector(`.${activeChildNodeClass}`)
    const currentInnerNodeWidth = currentInnerNode && getParsedStyleWidth(currentInnerNode)
    const prevNode = currentNode.previousElementSibling
    const nextNode = currentNode.nextElementSibling

    return {
        currentNode, currentInnerNode, currentInnerNodeWidth, prevNode, nextNode
    }
}

export { getActiveChunkElems }