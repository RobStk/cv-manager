import React from "react";
import PropTypes from "prop-types";
import InfoBarStyled from "./InfoBarStyled";

export default function InfoBar() {
	return (
		<InfoBarStyled>
			<p>CV wykonane przy użyciu technologii webowych (React + Styled Components) - <a href="https://github.com/RobStk/cv-manager">github.com/RobStk/cv-manager</a></p>
		</InfoBarStyled>
	);
}

InfoBar.propTypes = {
	content: PropTypes.string
};