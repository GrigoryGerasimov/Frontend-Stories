const getActiveElem = (elem, elemClass) => elem.classList.contains(elemClass) ? elem : null

function getActiveChunkElems(nodeCollection, activeParentNodeClass, activeChildNodeClass) {
    const nodeCollectionArray = Array.from(nodeCollection)
    const currentNode = nodeCollectionArray.find(e => getActiveElem(e, activeParentNodeClass))
    const currentInnerNode = activeChildNodeClass && currentNode.querySelector(activeChildNodeClass)
    const prevNode = currentNode.previousElementSibling
    const nextNode = currentNode.nextElementSibling

    return {
        currentNode, currentInnerNode, prevNode, nextNode
    }
}

export { getActiveChunkElems }