import React from "react";
import FlexColumnLayout from "../../layout/FlexColumnLayout";
import FlexRowCenterLayout from "../../layout/FlexRowCenterLayout";
import BarDiagram from "../BarDiagram";
import PieDiagram from "../PieDiagram";

class DiagramsSectionFactory extends React.Component {

	/**
	 * @param {object} data 
	 * @param {string|number|undefined} key 
	 * @returns {React.Component|null}
	 */
	static create(data) {
		switch (data.type) {
		case "pie":
		{
			const diagrams = data.diagrams.map((diagram, index) => <PieDiagram data={diagram} key={index} />);
			return (
				<FlexRowCenterLayout>
					{diagrams}
				</FlexRowCenterLayout>
			);
		}

		case "bar":
		{
			const diagrams = data.diagrams.map((diagram, index) => <BarDiagram data={diagram} key={index} />);
			return (
				<FlexColumnLayout>
					{diagrams}
				</FlexColumnLayout>
			);
		}

		case "list":
		{
			const diagrams = data.diagrams.map((diagram, index) => <li key={index}>{diagram.name}</li>);
			return (
				<ul>
					{diagrams}
				</ul>
			);
		}

		default:
			return null;
		}
	}
}

export default DiagramsSectionFactory;