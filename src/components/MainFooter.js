import React from "react";
import propTypes from "prop-types";
import InfoBar from "./InfoBar";
import MainFooterStyled from "./MainFooterStyled";

class MainFooter extends React.Component {
	/* -------------------------------------------- */
	/* Types 										*/
	/* -------------------------------------------- */
	static propTypes = {
		data: propTypes.object,
	};

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		const mainContent = this.props.data ? this.props.data.mainContent : "";
		return (
			<MainFooterStyled>
				<p>{mainContent}</p>
				<InfoBar content="placeholder" />
			</MainFooterStyled>
		);
	}
}

export default MainFooter;