import { createElem } from "../../dom/createElem"

function TimelineContainer() {
    if (!new.target) return new TimelineContainer()

    create = function () {
        const newTimelineContainer = document.createElement("div")
        newTimelineContainer.classList.add("timeline")
        this.elem = newTimelineContainer
        return this
    }
    
    mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { TimelineContainer }