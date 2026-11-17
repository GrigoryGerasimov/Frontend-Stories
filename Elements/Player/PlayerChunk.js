import { createElem } from "../../dom/createElem"
import { PlayerImage } from "./PlayerImage"

function PlayerChunk() {
    if (!new.target) return new PlayerChunk()

    create = function (playerImageParams) {
        const newPlayerChunk = document.createElement("div")
        newPlayerChunk.classList.add("player-chunk")
        new PlayerImage.create(playerImageParams).mount(newPlayerChunk)
        this.elem = newPlayerChunk
        return this
    }

    mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerChunk }