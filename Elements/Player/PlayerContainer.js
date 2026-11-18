import { createElem } from "../../dom/createElem.js"
import { PlayerChunkScroller } from "./PlayerChunkScroller.js"
import { PlayerContentContainer } from "./PlayerContentContainer.js"

const PLAYER_CHUNK_CLASSES = ["player-chunk"]
const PLAYER_CHUNK_SCROLLER_CLASSES = ["player-chunk-scroller"]
const PLAYER_CHUNK_SCROLLER_DIRECTION_CLASSES = ["player-chunk-prev", "player-chunk-next"]

function PlayerContainer() {
    if (!new.target) return new PlayerContainer()

    this.elem

    this.create = function (playerChunkParams) {
        const playerContainer = createElem({ elemTag: "div", elemClasses: ["player-container"] })
        for (const playerChunkScrollerDirectionClass of PLAYER_CHUNK_SCROLLER_DIRECTION_CLASSES) {
            const playerChunkScrollerFinalClasses = [...PLAYER_CHUNK_SCROLLER_CLASSES, playerChunkScrollerDirectionClass]
            PlayerChunkScroller().create(playerChunkScrollerFinalClasses).mount(playerContainer)
        }
        PlayerContentContainer().create(PLAYER_CHUNK_CLASSES, playerChunkParams).mount(playerContainer)
        this.elem = playerContainer
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerContainer }