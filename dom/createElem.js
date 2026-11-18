/**
 * @description A DOM utils function that assists on creating a new node element.
 * @param {string} elemTag - a tag for the new element to be created.
 * @param {Array<string>} elemClasses - a collection of classes to be assigned to the new element to be created.
 * @param {Object} elemParams - further parameters to be assigned to the new element to be created.
 * @returns {Element} Returns the created new element.
 * @throws {Error} Throws a new error if the elemClasses have not been passed through as arrays or if the elemParams have not been passed through as objects.
 */
function createElem({ elemTag, elemClasses, elemParams }) {
    const newElem = document.createElement(elemTag)

    if (elemClasses) {
        if (!Array.isArray(elemClasses)) throw new Error("New element classes should always be passed as arrays")
        for (const elemClass of elemClasses) newElem.classList.add(elemClass)
    }

    if (elemParams) {
        if (elemParams?.toString() !== "[object Object]") throw new Error("New element parameters should always be passed as objects")
        for (const elemParam in elemParams) newElem[elemParam] = elemParams[elemParam]
    }

    return newElem
}

export { createElem }