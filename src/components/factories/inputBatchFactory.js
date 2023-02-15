/* eslint-disable indent */
export default function createInputBatch(props) {
	switch (props.type) {
		case "title": {
			return {
				inputType: "text",
				label: "Title",
				...props,
			};
		}
		case "value": {
			return {
				inputType: "number",
				label: "Value",
				...props,
			};
		}
		case "type": {
			return {
				inputType: "select",
				label: "Type",
				...props,
			};
		}
		default: throw Error("Unsupported input batch type.");
	}
}