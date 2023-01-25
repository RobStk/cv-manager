/**
 * @param {string} color 
 * @param {number} opacity 
 */
export default function addOpacityToColor(color, opacity) {
	const format = getFormat(color);
	if (format === "hex") {
		//Note: The number is always rounded down. If super precision is required, appropriate conversions must be made.
		let op = (opacity * 256).toString(16);
		op = op.slice(0, 2);
		const newColor = (color + op);
		return newColor;
	}
	const firstPart = color.substring(0, color.length - 1);
	const lastPart = color.substring(color.length - 1);
	const middlePart = ` / ${opacity * 100}%`;
	const newColor = (firstPart + middlePart + lastPart);
	return newColor;
}

/**
 * @param {string} color 
 * @returns {string}
 */
function getFormat(color) {
	if (color[0] === "#") return "hex";
	return color.substring(0, 3);
}