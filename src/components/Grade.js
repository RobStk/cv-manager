import React from "react";
import PropTypes from "prop-types";
import GradeStyled from "./GradeStyled";
import RowItem from "./RowItem";

class Grade extends React.Component {
	static propTypes = {
		data: PropTypes.object
	};

	/* -------------------------------------------- */
	/* Constructor 									*/
	/* -------------------------------------------- */
	constructor(props) {
		super(props);
		this.additionalArr = this.props.data.additional.map((add, index) => {
			return <RowItem key={index} title={add.title} content={add.content} />;
		});
	}

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		return (
			<GradeStyled>
				<div className="grade-header">
					<div className="date">{this.props.data.date}</div>
					<h3 className="grade">{this.props.data.grade}</h3>
					<div className="desc">{this.props.data.desc}</div>
				</div>
				<div className="grade-items">
					{this.additionalArr}
				</div>
			</GradeStyled>
		);
	}
}

export default Grade;