import { createElem } from "../../dom/createElem.js"
import { PlayerChunk } from "./PlayerChunk.js"

function PlayerContentContainer() {
    if (!new.target) return new PlayerContentContainer()

    this.elem

    this.create = function (playerChunkClasses, playerImageParams) {
        const playerContentContainer = createElem({ elemTag: "div", elemClasses: ["player-content"] })
        if (playerImageParams) {
            playerImageParams.forEach((playerImageParam, playerImageParamIndex) => {
                let playerChunkFinalClasses = [...playerChunkClasses]
                if (playerImageParamIndex === 0) playerChunkFinalClasses = [...playerChunkClasses, "player-chunk-active"]
                PlayerChunk().create({ playerChunkClasses: playerChunkFinalClasses, playerImageParams: playerImageParam }).mount(playerContentContainer)
            })
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