const getActiveElem = (elem, elemClass) => elem.classList.contains(elemClass) ? elem : null

function getActiveChunkElems(nodeCollection, activeNodeClass) {
    const nodeCollectionArray = Array.from(nodeCollection)
    const currentNode = nodeCollectionArray.find(e => getActiveElem(e, activeNodeClass))
    const prevNode = currentNode.previousElementSibling
    const nextNode = currentNode.nextElementSibling

    return {
        currentNode, prevNode, nextNode
    }
}

export { getActiveChunkElems }