import { Player } from "../Elements/Player/Player.js"
import { scrollTo } from "../oper/scrollTo.js"
import { setAutoScroll } from "../oper/setAutoScroll.js"
import { removeAutoScroll } from "../oper/removeAutoScroll.js"

const TIMELINE_CHUNK_ACTIVE_CLASS = "timeline-chunk-active"
const TIMELINE_CHUNK_INNER_CLASS = "timeline-chunk-inner"
const PLAYER_CHUNK_ACTIVE_CLASS = "player-chunk-active"

/**
 * @description The mountApp function mounts the main App element into DOM.
 * @param {Array<{url: string, alt?: string}>} playerImageParams - a list of the images uploaded into the player.
 * @param {number} [delayPerChunk=3000] - how long a player image is being shown.
 * @param {number} [stepPerChunk=1] - the speed at which a player image is being shown.
 * @returns {undefined} The function only serves for mounting the App element and initiating the main app functionality, does not return anything.
 * @throws {Error} Throws a new error message on failing to set an auto scrolling interval.
 */
function mountApp({ playerImageParams, delayPerChunk = 3000, stepPerChunk = 1 }) {
    Player().create(playerImageParams).mount(document.body)

    const playerChunkScrollerPrev = document.querySelector(".player-chunk-prev")
    const playerChunkScrollerNext = document.querySelector(".player-chunk-next")
    const timelineChunkCollection = document.querySelectorAll(".timeline-chunk")
    const playerChunkCollection = document.querySelectorAll(".player-chunk")

    if (playerChunkScrollerPrev && playerChunkScrollerNext) {
        playerChunkScrollerPrev.addEventListener(
            "click", () => {
                scrollTo(
                    "back",
                    [timelineChunkCollection, playerChunkCollection],
                    [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS, PLAYER_CHUNK_ACTIVE_CLASS]
                )
            })
        playerChunkScrollerNext.addEventListener(
            "click", () => scrollTo(
                "forward",
                [timelineChunkCollection, playerChunkCollection],
                [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS, PLAYER_CHUNK_ACTIVE_CLASS]
            ))
    }

    if (timelineChunkCollection && playerChunkCollection) {
        try {
            let autoScrollTimer
            if (autoScrollTimer) removeAutoScroll(autoScrollTimer)
            autoScrollTimer = setAutoScroll(() => scrollTo(
                "forward",
                [timelineChunkCollection, playerChunkCollection],
                [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS, PLAYER_CHUNK_ACTIVE_CLASS]
            ),
                delayPerChunk,
                stepPerChunk,
                timelineChunkCollection,
                [TIMELINE_CHUNK_ACTIVE_CLASS, TIMELINE_CHUNK_INNER_CLASS]
            )
        } catch (err) {
            throw new Error(err.message)
        }
    }
}

export { mountApp }