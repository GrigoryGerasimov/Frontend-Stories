import { createElem } from "../../dom/createElem.js"
import { PlayerChunk } from "./PlayerChunk.js"

function PlayerContentContainer() {
    if (!new.target) return new PlayerContentContainer()

    this.elem

    this.create = function (playerChunkClasses) {
        const playerContentContainer = createElem({elemTag: "div", elemClasses: ["player-content"]})
        if (playerChunkClasses) {
            for (const playerChunkClass of playerChunkClasses) {
                PlayerChunk().create(playerChunkClass).mount(playerContentContainer)
            }
        }
        this.elem = playerContentContainer
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerContentContainer }