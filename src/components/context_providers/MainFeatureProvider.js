import React, { createContext } from "react";
import PropTypes from "prop-types";

export const ModalDispatchContext = createContext(null);
export default function MainFeatureProvider({ modalDispatch, children }) {

	return (
		<ModalDispatchContext.Provider value={modalDispatch}>
			{children}
		</ModalDispatchContext.Provider>
	);
}

MainFeatureProvider.propTypes = {
	data: PropTypes.object,
	dataDispatch: PropTypes.func,
	modalDispatch: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	])
};