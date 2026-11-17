import { createElem } from "../../dom/createElem.js"

function PlayerImage() {
    if (!new.target) return new PlayerImage()

    this.elem

    this.create = function (elemParams) {
        this.elem = createElem({elemTag: "img", elemParams: elemParams})
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerImage }