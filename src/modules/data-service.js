export default class DataService {
	static url = "http://localhost:5000/personal";

	/**
	 * Returns a promise resolved to a json-data or null.
	 * @returns {Promise<Array|null>}
	 */
	static async getData() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);
			const data = await response.json();
			return data;
		}
		catch (error) {
			console.error("Http error:", error.status || error);
			return null;
		}
	}

	// ----------------------------------------------------

	/**
	 * Updates data and return true if resolved or false if rejected.
	 * @param {Object} data 
	 * @returns {Promise<boolean>}
	 */
	static async setData(data) {
		const dataString = JSON.stringify(data);
		try {
			const response = await fetch(this.url, {
				method: "put",
				headers: {
					"Content-Type": "application/json"
				},
				body: dataString
			});
			if (!response.ok) throw new Error(response.status);
			return true;
		}
		catch (error) {
			console.error("Http error:", error.status || error);
			return false;
		}
	}

	// ----------------------------------------------------

	/**
	 * Adds data and return true if resolved or false if rejected.
	 * @param {Object} item 
	 * @returns {Promise<boolean>}
	 */
	static async addItem(item) {
		const dataString = JSON.stringify(item);
		try {
			const response = await fetch(this.url, {
				method: "post",
				headers: {
					"Content-Type": "application/json"
				},
				body: dataString
			});
			if (!response.ok) throw new Error(response.status);
			const jsonResult = await response.json();
			const id = jsonResult.id;
			return id;
		}
		catch (error) {
			console.error("Http error:", error.status || error);
			return null;
		}
	}

	// ----------------------------------------------------

	/**
	 * Updates data and return true if resolved or false if rejected.
	 * @param {Object} item 
	 * @returns {Promise<boolean>}
	 */
	static async changeItem(item) {
		const id = item.id;
		const tempId = item.tempId;
		if (id && tempId) delete item.tempId;
		const dataString = JSON.stringify(item);
		try {
			const response = await fetch(this.url + "/" + id, {
				method: "put",
				headers: {
					"Content-Type": "application/json"
				},
				body: dataString
			});
			if (!response.ok) throw new Error(response.status);
			return true;
		}
		catch (error) {
			console.error("Http error:", error.status || error);
			return false;
		}
	}

	// ----------------------------------------------------
}