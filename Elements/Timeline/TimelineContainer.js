import { createElem } from "../../dom/createElem.js"
import { TimelineChunk } from "./TimelineChunk.js"

function TimelineContainer() {
    if (!new.target) return new TimelineContainer()

    this.elem

    this.create = function (timelineChunkClasses) {
        const newTimelineContainer = createElem({elemTag: "div", elemClasses: ["timeline"]})
        if (timelineChunkClasses) {
            for (const timelineChunkClass of timelineChunkClasses) {
                TimelineChunk().create(timelineChunkClass).mount(newTimelineContainer)
            }
        }
        this.elem = newTimelineContainer
        return this
    }
    
    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { TimelineContainer }