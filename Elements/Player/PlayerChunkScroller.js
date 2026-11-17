import { createElem } from "../../dom/createElem.js"

function PlayerChunkScroller() {
    if (!new.target) return new PlayerChunkScroller()

    this.elem

    this.create = function (elemClasses) {
        this.elem = createElem({ elemTag: "div", elemClasses: elemClasses })
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerChunkScroller }