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
		case "aboutMeTitleUpdated": {
			newData.aboutMe.title = action.title;
			break;
		}
		case "educationTitleUpdated": {
			newData.education.title = action.title;
			break;
		}
		case "experienceTitleUpdated": {
			newData.experience.title = action.title;
			break;
		}
		default: return newData;
	}
	DataService.setData(newData);
	return newData;
}