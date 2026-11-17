import { createElem } from "../../dom/createElem.js"

function PlayerContainer() {
    if (!new.target) return new PlayerContainer()

    this.elem

    this.create = function () {
        this.elem = createElem({ elemTag: "div", elemClasses: ["player-container"] })
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerContainer }