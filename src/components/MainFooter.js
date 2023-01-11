import React from "react";
import propTypes from "prop-types";
import InfoBar from "./InfoBar";
import MainFooterStyled from "./MainFooterStyled";

export default function MainFooter({ data }) {
	const mainContent = data ? data.mainContent : "";
	return (
		<MainFooterStyled>
			<p>{mainContent}</p>
			<InfoBar content="placeholder" />
		</MainFooterStyled>
	);
}

MainFooter.propTypes = {
	data: propTypes.object,
};