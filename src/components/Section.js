import React, { useContext } from "react";
import LevelContext from "./context_providers/LevelProvider";
import PropTypes from "prop-types";

export default function Section({ className, children }) {
	const level = useContext(LevelContext);

	return (
		<LevelContext.Provider value={level + 1}>
			<div className={className}>
				{children}
			</div>
		</LevelContext.Provider>
	);
}

Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object)
	])
};