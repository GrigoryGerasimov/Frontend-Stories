import { createElem } from "../../dom/createElem.js"

function Player() {
    if (!new.target) return new Player()

    this.elem

    this.create = function () {
        this.elem = createElem({ elemTag: "div", elemClasses: ["player"] })
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { Player }