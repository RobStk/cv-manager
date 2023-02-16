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
		case "value-number": {
			return {
				inputType: "number",
				label: "Value",
				...props,
			};
		}
		case "value-short": {
			return {
				inputType: "text",
				label: "Value",
				...props,
			};
		}
		case "value-long": {
			return {
				inputType: "textarea",
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