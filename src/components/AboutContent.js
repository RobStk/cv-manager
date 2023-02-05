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
		let newData = null;
		if (Array.isArray(props.data)) {
			newData = [...props.data];
			newData[index] = value;
		}
		else {
			newData = value;
			console.log(newData);
		}
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