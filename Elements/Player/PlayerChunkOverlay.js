import { createElem } from "../../dom/createElem.js"
import { PlayerImage } from "./PlayerImage.js"

function PlayerChunkOverlay() {
    if (!new.target) return new PlayerChunkOverlay()

    this.elem

    this.create = function ({ style, type, value, img }) {
        this.elem = createElem({ elemTag: "div", elemClasses: ["player-chunk-overlay"], elemParams: {style} })
        if (this.elem) {
            switch (type) {
                case "text":
                    this.elem.innerHTML = value
                    break;
                case "image":
                    PlayerImage().create(img).mount(this.elem)
                    break;
            }
        }
        return this
    }

    this.mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerChunkOverlay }