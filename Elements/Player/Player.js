import { createElem } from "../../dom/createElem.js"
import { TimelineContainer } from "../Timeline/TimelineContainer.js"
import { PlayerContainer } from "./PlayerContainer.js"

function Player() {
    if (!new.target) return new Player()

    this.elem

    this.create = function (containerClasses) {
        const { playerImageParams, playerChunkScrollerClasses } = containerClasses

        const player = createElem({ elemTag: "div", elemClasses: ["player"] })
        TimelineContainer().create(playerImageParams).mount(player)
        PlayerContainer().create(playerChunkScrollerClasses, playerImageParams).mount(player)
        this.elem = player
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { Player }