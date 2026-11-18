import { Player } from "../Elements/Player/Player.js"

function mountApp({ chunkParams, delayPerChunk }) {    
    Player().create(chunkParams).mount(document.body)
}

export { mountApp }