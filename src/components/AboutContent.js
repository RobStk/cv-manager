import React from "react";
import PropTypes from "prop-types";
import AboutContentStyled from "./AboutContentStyled";
import ContentBlock from "./ContentBlock";
import { moveItemDown, moveItemUp } from "../utils/move-item";

export default function AboutContent(props) {
	const data = props.data || "";
	const content = Array.isArray(data) ? data : [data];
	const contentArr = createContentArr();

	return (
		<AboutContentStyled className={props.className}>
			{contentArr}
		</AboutContentStyled>
	);

	function handleUpdate(index, value) {
		const newData = [...props.data];
		newData[index] = value;
		props.onUpdate(newData);
	}

	function createContentArr() {
		const contentArr = content.map((item, index) =>
			<ContentBlock
				data={item}
				key={index}
				onUpdate={newData => handleUpdate(index, newData)}
				onMoveUp={() => handleMoveUp(index)}
				onMoveDown={() => handleMoveDown(index)}
				onDeletion={() => handleDeletion(index)}
				className="content-item"
			/>
		);
		return contentArr;
	}

	function handleMoveUp(index) {
		const newData = [...props.data];
		moveItemUp(newData, index);
		newData.forEach((cont, index) => cont.id = index);
		props.onUpdate(newData);
	}

	function handleMoveDown(index) {
		const newData = [...props.data];
		moveItemDown(newData, index);
		newData.forEach((cont, index) => cont.id = index);
		props.onUpdate(newData);
	}

	function handleDeletion(index) {
		const newData = [...props.data];
		newData.splice(index, 1);
		newData.forEach((el, index) => el.id = index);
		props.onUpdate(newData);
	}
}

AboutContent.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	]),
	onUpdate: PropTypes.func,
	className: PropTypes.string
};