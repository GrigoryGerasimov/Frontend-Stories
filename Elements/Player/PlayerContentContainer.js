import { createElem } from "../../dom/createElem"

function PlayerContentContainer() {
    if (!new.target) return new PlayerContentContainer()

    create = function () {
        const newPlayerContentContainer = document.createElement("div")
        newPlayerContentContainer.classList.add("player-content")
        this.elem = newPlayerContentContainer
        return this
    }

    mount = function (parentElem) {
        if (this.elem) parentElem.append(this.elem)
        return this
    }
}

export { PlayerContentContainer }