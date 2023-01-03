import React from "react";
import FlexRowCenterLayout from "../../layout/FlexRowCenterLayout";
import PieDiagram from "../PieDiagram";

class DiagramsSectionFactory extends React.Component {

	/**
	 * @param {object} data 
	 * @param {string|number|undefined} key 
	 * @returns {React.Component|null}
	 */
	static create(data) {
		const diagrams = data.diagrams.map((diagram, index) => <PieDiagram data={diagram} key={index} />);
		switch (data.type) {
		case "pie":
			return (
				<FlexRowCenterLayout>
					{diagrams}
				</FlexRowCenterLayout>
			);

		case "bar":
			return null; //TODO

		case "list":
			return null; //TODO

		default:
			return null;
		}
	}
}

export default DiagramsSectionFactory;