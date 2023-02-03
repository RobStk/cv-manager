import DataService from "../../modules/data-service";

/* eslint-disable indent */
export default function dataReducer(data, action) {
	let newData = { ...data };
	switch (action.type) {
		case "data_updated": {
			newData = action.data;
			break;
		}
		case "name_updated": {
			newData.name = action.name;
			break;
		}
		case "contact_updated": {
			newData.contact = action.contact;
			break;
		}
		case "about_updated": {
			newData.about = action.data;
			break;
		}
		default: return newData;
	}
	DataService.setData(newData);
	return newData;
}