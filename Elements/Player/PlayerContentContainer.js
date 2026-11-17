import { createElem } from "../../dom/createElem.js"

function PlayerContentContainer() {
    if (!new.target) return new PlayerContentContainer()

    this.create = function () {
        this.elem = createElem({elemTag: "div", elemClasses: ["player-content"]})
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerContentContainer }