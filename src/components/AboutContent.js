import React from "react";
import PropTypes from "prop-types";
import AboutContentStyled from "./AboutContentStyled";
import ContentBlock from "./ContentBlock";

export default function AboutContent(props) {
	const data = props.data || "";
	const content = Array.isArray(data) ? data : [data];
	const contentArr = content.map((item, index) =>
		<ContentBlock data={item} key={index} onUpdate={newData => handleUpdate(index, newData)} />
	);

	return (
		<AboutContentStyled>
			{contentArr}
		</AboutContentStyled>
	);

	function handleUpdate(index, value) {
		const newData = [...props.data];
		newData[index] = value;
		props.onUpdate(newData);
	}
}

AboutContent.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	]),
	onUpdate: PropTypes.func
};