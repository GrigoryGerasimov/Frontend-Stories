import { createElem } from "../../dom/createElem.js"

function TimelineChunkInner() {
    if (!new.target) return new TimelineChunkInner()

    this.create = function () {
        this.elem = createElem({elemTag: "div", elemClasses: ["timeline-chunk-inner"]})
        return this
    }
    
    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { TimelineChunkInner }