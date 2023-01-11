import React from "react";
import propTypes from "prop-types";
import NameStyled from "./NameStyled";

export default function Name({ data }) {
	const name = data || "";
	const nameElement = <h1>{name}</h1>;
	return (
		<NameStyled>
			{nameElement}
		</NameStyled>
	);
}

Name.propTypes = {
	data: propTypes.string,
};
