export function moveItemUp(array, index) {
	if (index == 0) return;
	const item = array[index];
	const prevItem = array[index - 1];
	array[index - 1] = item;
	array[index] = prevItem;
}

export function moveItemDown(array, index) {
	if (index == (array.length - 1)) return;
	const item = array[index];
	const nextItem = array[index + 1];
	array[index + 1] = item;
	array[index] = nextItem;
}