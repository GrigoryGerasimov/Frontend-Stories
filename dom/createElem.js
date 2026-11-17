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