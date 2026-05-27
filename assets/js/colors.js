import colorMap from "./colorMap.js";

/**
 * Returns a hexadecimal string corresponding to the provided color name
 * string. If it isn't found in the colorMap object, colorMap.default is
 * returned.
 *
 * @param {string} colorName
 * @returns a hexadecimal string
 */
function stringToHex(colorName) {
  const color = colorMap[colorName];
  return color || colorMap.default;
}

/**
 * Accepts a hexadecimal string and returns the corresponding color name key,
 * if found in colorMap. If a match isn't found, null is returned.
 *
 * @param {string} hexValue
 * @returns a color name string
 */
function hexToString(hexValue) {
  const colorString = Object.keys(colorMap).find((key) => {
    return colorMap[key] === hexValue;
  });
  return colorString || null;
}

/**
 * Accepts an HTML element and removes all BEM "_color_" modifiers from its
 * class list.
 *
 * @param {HTMLElement} element
 */
function removeColorClasses(element) {
  [...element.classList].forEach((cls) => {
    if (cls.startsWith("card_color_") || cls.startsWith("card__carousel_color_")) {
      element.classList.remove(cls);
    }
  });
}

export { stringToHex, hexToString, removeColorClasses };