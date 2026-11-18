/**
 * @description A utils function that receives a node element and parses its width into a float number, returning either the parsed width or 0 if parsing fails.
 * @param {Element} elem - node element which width needs to be parsed.
 * @returns {number} The function returns either the parsed width number or 0.
 */
const getParsedStyleWidth = elem => parseFloat(elem?.style?.width) || 0

export { getParsedStyleWidth }