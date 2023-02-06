import React from "react";
import FlexColumnLayout from "../../layout/FlexColumnLayout";
import FlexRowCenterLayout from "../../layout/FlexRowCenterLayout";
import BarDiagram from "../BarDiagram";
import Diagram from "../Diagram";

class DiagramSectionFactory extends React.Component {

	/**
	 * @param {object} data 
	 * @param {string|number|undefined} key 
	 * @returns {React.Component|null}
	 */
	static create(data) {
		console.log(data);
		switch (data.type) {
		case "pie":
		{
			const diagrams = data.diagrams.map((diagram, index) => <Diagram data={diagram} key={index} type="pie"/>);
			return (
				<FlexRowCenterLayout paddingTop="0.5rem" paddingBottom="0.5rem">
					{diagrams}
				</FlexRowCenterLayout>
			);
		}

		case "bar":
		{
			const diagrams = data.diagrams.map((diagram, index) => <BarDiagram data={diagram} key={index} />);
			return (
				<FlexColumnLayout gap={"0.2rem"}>
					{diagrams}
				</FlexColumnLayout>
			);
		}

		case "list":
		{
			const diagrams = data.diagrams.map((diagram, index) => <li key={index}>{diagram.title}</li>);
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

export default DiagramSectionFactory;