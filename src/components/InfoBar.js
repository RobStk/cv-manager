import React from "react";
import PropTypes from "prop-types";
import InfoBarStyled from "./InfoBarStyled";

export default function InfoBar({ content }) {
	return (
		<InfoBarStyled>
			{content}
		</InfoBarStyled>
	);
}

InfoBar.propTypes = {
	content: PropTypes.string
};