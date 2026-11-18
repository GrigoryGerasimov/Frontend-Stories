import { Player } from "../Elements/Player/Player.js"
import { scrollTo } from "../oper/scrollTo.js"
import { setAutoScroll } from "../oper/setAutoScroll.js"

const TIMELINE_CHUNK_ACTIVE_CLASS = "timeline-chunk-active"
const TIMELINE_CHUNK_INNER_CLASS = "timeline-chunk-inner"
const PLAYER_CHUNK_ACTIVE_CLASS = "player-chunk-active"

function mountApp({ playerImageParams, delayPerChunk, stepPerChunk }) {
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
            setAutoScroll(() => scrollTo(
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