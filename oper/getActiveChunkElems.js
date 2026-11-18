import { getParsedStyleWidth } from "../utils/getParsedStyleWidth.js"

/**
 * @description The function checks and returns a certain element identified as an active one by containing an active element class.
 * @param {Element} elem - a node element to be checked for activeness.
 * @param {string} elemClass - a node element class which aproved the activeness of the checked element if the element contains this class.
 * @returns {(Element|null)} Returns the checked active element or null if the checked element failed to be active.
 */
const getActiveElem = (elem, elemClass) => elem.classList.contains(elemClass) ? elem : null

/**
 * @description The function provides an active chunk node + its previous and next sibling element.
 * @param {Nodelist} nodeCollection - nodelist to search for the active node element.
 * @param {string} activeParentNodeClass - class of the active parent node.
 * @param {string} activeChildNodeClass - class of the active child node.
 * @returns {{
 * Element, Element, (number|undefined), Element, Element
 * }} Returns an object with the current node data including its previous and next sibling element.
 */
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