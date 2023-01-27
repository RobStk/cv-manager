import React, { useContext } from "react";
import LevelContext from "./context_providers/LevelProvider";
import PropTypes from "prop-types";

export default function Section(props) {
	const level = props.level || useContext(LevelContext);

	return (
		<LevelContext.Provider value={level + 1}>
			<section className={props.className}>
				{props.children}
			</section>
		</LevelContext.Provider>
	);
}

Section.propTypes = {
	className: PropTypes.string,
	level: PropTypes.number,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object)
	])
};