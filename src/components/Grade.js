import React from "react";
import GradeStyled from "./GradeStyled";
import RowItem from "./RowItem";

class Grade extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const rowFields = [
			<RowItem key="0" title="Field: " content="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />,
			<RowItem key="1" title="Spec: " content="Repellendus molestias, magnam architecto consequuntur provident" />
		];
		return (
			<GradeStyled>
				<div className="grade-header">
					<div className="date">11.12.2015</div>
					<h3 className="grade">Grade</h3>
					<div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
				</div>
				<div className="grade-items">
					{rowFields}
				</div>
			</GradeStyled>
		);
	}
}

export default Grade;