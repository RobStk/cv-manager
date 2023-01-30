import React, { createContext } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext(null);
export const DataDispatchContext = createContext(null);
export const ModalDispatchContext = createContext(null);

export default function DataProvider({ data, dataDispatch, modalDispatch, children }) {

	return (
		<DataContext.Provider value={data}>
			<DataDispatchContext.Provider value={dataDispatch}>
				<ModalDispatchContext.Provider value={modalDispatch}>
					{children}
				</ModalDispatchContext.Provider>
			</DataDispatchContext.Provider>
		</DataContext.Provider>
	);
}

DataProvider.propTypes = {
	data: PropTypes.object,
	dataDispatch: PropTypes.func,
	modalDispatch: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	])
};