import React from "react";
import GradeStyled from "./GradeStyled";

class Grade extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const rowFields = [];
		return (
			<GradeStyled>
				<div className="grade-header">
					<div className="date">11.12.2015</div>
					<div className="grade">Grade</div>
					<div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
				</div>
				<div>
					{rowFields}
				</div>
			</GradeStyled>
		);
	}
}

export default Grade;