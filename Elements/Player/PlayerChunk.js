import { createElem } from "../../dom/createElem.js"
import { PlayerImage } from "./PlayerImage.js"

function PlayerChunk() {
    if (!new.target) return new PlayerChunk()

    this.elem

    this.create = function ({playerChunkClasses, playerImageParams}) {
        const newPlayerChunk = createElem({elemTag: "div", elemClasses: playerChunkClasses})
        PlayerImage().create(playerImageParams).mount(newPlayerChunk)
        this.elem = newPlayerChunk
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerChunk }