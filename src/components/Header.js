/* eslint-disable indent */
import React, { useContext } from "react";
import LevelContext from "./context_providers/LevelProvider";
import PropTypes from "prop-types";

export default function Header(props) {
	const level = props.level || useContext(LevelContext);

	switch (level) {
		case 1: {
			return <h1>{props.children}</h1>;
		}
		case 2: {
			return <h2>{props.children}</h2>;
		}
		case 3: {
			return <h3>{props.children}</h3>;
		}
		case 4: {
			return <h4>{props.children}</h4>;
		}
		case 5: {
			return <h5>{props.children}</h5>;
		}
		case 6: {
			return <h6>{props.children}</h6>;
		}
		default:
			throw Error("header must be level 1 to 6.");
	}
}

Header.propTypes = {
	level: PropTypes.number,
	children: PropTypes.string,
};