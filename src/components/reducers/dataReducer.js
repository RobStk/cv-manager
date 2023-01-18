/* eslint-disable indent */
export default function dataReducer(data, action) {
	const newData = { ...data };
	switch (action.type) {
		case "data_updated": {
			return action.data;
		}
		case "name_updated": {
			newData.name = action.name;
			return newData;
		}
	}
}