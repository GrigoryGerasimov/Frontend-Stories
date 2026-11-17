import { TimelineContainer } from "../Elements/Timeline/TimelineContainer.js"
import { PlayerContentContainer } from "../Elements/Player/PlayerContentContainer.js"
import { TimelineChunk } from "../Elements/Timeline/TimelineChunk.js"
import { PlayerChunk } from "../Elements/Player/PlayerChunk.js"
import { Player } from "../Elements/Player/Player.js"

function initApp({ target, chunks, delayPerChunk }) {
    const myApp = document.querySelector(target)
    
    const player = Player().create().mount(document.body)
    const timelineContainer = TimelineContainer().create(timelineChunkClasses).mount(player).elem
    const playerContentContainer = PlayerContentContainer().create().mount(player).elem

    for (const chunk of chunks) {
        TimelineChunk().create().mount(timelineContainer)
        PlayerChunk().create(chunk).mount(playerContentContainer)
    }

}

export { initApp }