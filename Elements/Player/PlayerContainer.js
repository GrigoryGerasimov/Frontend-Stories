import { createElem } from "../../dom/createElem.js"
import { PlayerChunkScroller } from "./PlayerChunkScroller.js"
import { PlayerContentContainer } from "./PlayerContentContainer.js"

const PLAYER_CHUNK_CLASSES = ["player-chunk"]

function PlayerContainer() {
    if (!new.target) return new PlayerContainer()

    this.elem

    this.create = function (playerChunkScrollerClasses, playerImageParams) {
        const playerContainer = createElem({ elemTag: "div", elemClasses: ["player-container"] })
        if (playerChunkScrollerClasses) {
            for (const playerChunkScrollerClass of playerChunkScrollerClasses) {
                PlayerChunkScroller().create([playerChunkScrollerClass]).mount(playerContainer)
            }
        }
        PlayerContentContainer().create(PLAYER_CHUNK_CLASSES, playerImageParams).mount(playerContainer)
        this.elem = playerContainer
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerContainer }