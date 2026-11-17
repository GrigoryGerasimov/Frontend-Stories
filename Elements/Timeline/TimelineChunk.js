import { createElem } from "../../dom/createElem.js"
import { TimelineChunkInner } from "./TimelineChunkInner.js"

function TimelineChunk() {
    if (!new.target) return new TimelineChunk()

    this.create = function () {
        const newTimelineChunk = createElem({elemTag: "div", elemClasses: ["timeline-chunk"]})
        new TimelineChunkInner().create().mount(newTimelineChunk)
        this.elem = newTimelineChunk
        return this
    }
    
    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { TimelineChunk }