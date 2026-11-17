import { createElem } from "../../dom/createElem"

function PlayerImage() {
    if (!new.target) return new PlayerImage()

    create = function (elemParams) {
        const newPlayerImage = document.createElement("img")
        for (const elemParam in elemParams) {
            newPlayerImage[elemParam] = elemParams[elemParam]
        }
        this.elem = newPlayerImage
        return this
    }

    mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerImage }