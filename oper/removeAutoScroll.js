/**
 * @description The removeAutoScroll function terminates the stories auto scrolling.
 * @param {(number|undefined)} timer - timer id from setInterval (setAutoScroll) function. 
 * @returns {undefined} The function only clears the interval returning nothing.
 */
function removeAutoScroll(timer) {
    clearInterval(timer)
}

export { removeAutoScroll }