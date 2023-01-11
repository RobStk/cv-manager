import React from "react";
import propTypes from "prop-types";
import AboutMeStyled from "./AboutMeStyled";

export default function AboutMe({ data }) {
	const content = data;
	return (
		<AboutMeStyled>
			<p>{content}</p>
		</AboutMeStyled>
	);
}

AboutMe.propTypes = {
	data: propTypes.string,
};