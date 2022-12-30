import React from "react";
import AboutColumnStyled from "./AboutColumnStyled";
import AboutMe from "./AboutMe";

class AboutColumn extends React.Component {
	render() {
		return (
			<AboutColumnStyled>
				<AboutMe />
			</AboutColumnStyled>
		);
	}
}

export default AboutColumn;