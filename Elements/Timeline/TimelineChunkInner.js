import { createElem } from "../../dom/createElem"

function TimelineChunkInner() {
    if (!new.target) return new TimelineChunkInner()

    create = function () {
        const newTimelineChunkInner = document.createElement("div")
        newTimelineChunkInner.classList.add("timeline-chunk-inner")
        this.elem = newTimelineChunkInner
        return this
    }
    
    mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { TimelineChunkInner }