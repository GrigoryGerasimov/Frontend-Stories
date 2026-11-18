import { createElem } from "../../dom/createElem.js"
import { PlayerImage } from "./PlayerImage.js"
import { PlayerChunkOverlay } from "./PlayerChunkOverlay.js"

function PlayerChunk() {
    if (!new.target) return new PlayerChunk()

    this.elem

    this.create = function ({ playerChunkClasses, playerChunkParams }) {
        const newPlayerChunk = createElem({ elemTag: "div", elemClasses: playerChunkClasses })
        const { playerImageParams, playerChunkOverlayParams } = playerChunkParams
        PlayerImage().create(playerImageParams).mount(newPlayerChunk)
        if (playerChunkOverlayParams?.overlays) {
            for (const playerChunkOverlayParam of playerChunkOverlayParams.overlays) {
                const { type: playerChunkOverlayType, value: playerChunkOverlayValue, styles: playerChunkOverlayStyles } = playerChunkOverlayParam
                const playerChunkOverlayStyle = Object.entries(playerChunkOverlayStyles).map(style => style.join(": ")).join("; ")
                PlayerChunkOverlay().create({
                    style: playerChunkOverlayStyle, 
                    type: playerChunkOverlayType, 
                    value: playerChunkOverlayValue
                }).mount(newPlayerChunk)
            }
        }
        this.elem = newPlayerChunk
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerChunk }