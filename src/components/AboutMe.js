import React from "react";
import propTypes from "prop-types";
import AboutMeStyled from "./AboutMeStyled";

class AboutMe extends React.Component {
	/* -------------------------------------------- */
	/* Types 										*/
	/* -------------------------------------------- */
	static propTypes = {
		data: propTypes.string,
	};

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		const content = this.props.data;
		return (
			<AboutMeStyled>
				<p>{content}</p>
			</AboutMeStyled>
		);
	}
}

export default AboutMe;