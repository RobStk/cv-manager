export default class DataPart {
	#data;
	#dispatchType;
	#dispatch;

	/**
	 * @param {any} data 
	 * @param {Function} dispatch 
	 * @param {string} dispatchType
	 */
	constructor(data, dispatch, dispatchType) {
		this.#data = data;
		this.#dispatch = dispatch;
		this.#dispatchType = dispatchType;
	}

	getData() {
		return this.#data;
	}

	setData(data) {
		this.#dispatch({
			type: this.#dispatchType,
			data: data
		});
	}
}