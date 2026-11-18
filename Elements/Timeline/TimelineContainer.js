import { createElem } from "../../dom/createElem.js"
import { TimelineChunk } from "./TimelineChunk.js"

const TIMELINE_CHUNK_CLASSES = ["timeline-chunk"]

function TimelineContainer() {
    if (!new.target) return new TimelineContainer()

    this.elem

    this.create = function (playerChunkParams) {
        const newTimelineContainer = createElem({elemTag: "div", elemClasses: ["timeline"]})
        if (playerChunkParams) {
            playerChunkParams.forEach((playerChunkParam, playerChunkParamIndex) => {
                let timelineChunkFinalClasses = [...TIMELINE_CHUNK_CLASSES]
                if (playerChunkParamIndex === 0) timelineChunkFinalClasses = [...TIMELINE_CHUNK_CLASSES, "timeline-chunk-active"]
                TimelineChunk().create(timelineChunkFinalClasses).mount(newTimelineContainer)
            })
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