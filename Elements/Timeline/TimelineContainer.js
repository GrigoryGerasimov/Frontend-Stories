import { createElem } from "../../dom/createElem.js"

function TimelineContainer() {
    if (!new.target) return new TimelineContainer()

    this.elem

    this.create = function () {
        this.elem = createElem({elemTag: "div", elemClasses: ["timeline"]})
        return this
    }
    
    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { TimelineContainer }