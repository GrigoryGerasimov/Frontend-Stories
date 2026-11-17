import { createElem } from "../../dom/createElem"
import { TimelineChunkInner } from "./TimelineChunkInner"

function TimelineChunk() {
    if (!new.target) return new TimelineChunk()

    create = function () {
        const newTimelineChunk = document.createElement("div")
        newTimelineChunk.classList.add("timeline-chunk")
        new TimelineChunkInner().create().mount(newTimelineChunk)
        this.elem = newTimelineChunk
        return this
    }
    
    mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { TimelineChunk }