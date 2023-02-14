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
			newData.name = action.data;
			break;
		}
		case "contact_updated": {
			newData.contact = action.data;
			break;
		}
		case "about_updated": {
			newData.about = action.data;
			break;
		}
		case "diagrams_updated": {
			newData.diagrams = action.data;
			break;
		}
		case "footer_updated": {
			newData.footer = action.data;
			break;
		}
		default: return newData;
	}
	DataService.setData(newData);
	return newData;
}