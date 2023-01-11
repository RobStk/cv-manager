import React from "react";
import PropTypes from "prop-types";
import GradeStyled from "./GradeStyled";
import RowItem from "./RowItem";

export default function Grade({ data }) {
	const additionalArr = data.additional.map((add, index) => {
		return <RowItem key={index} title={add.title} content={add.content} />;
	});

	return (
		<GradeStyled>
			<div className="grade-header">
				<div className="date">{data.date}</div>
				<h3 className="grade">{data.grade}</h3>
				<div className="desc">{data.desc}</div>
			</div>
			<div className="grade-items">
				{additionalArr}
			</div>
		</GradeStyled>
	);
}

Grade.propTypes = {
	data: PropTypes.object
};