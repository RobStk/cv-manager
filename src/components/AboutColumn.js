import React from "react";
import AboutColumnStyled from "./AboutColumnStyled";
import AboutMe from "./AboutMe";
import Education from "./Education";

class AboutColumn extends React.Component {
	render() {
		return (
			<AboutColumnStyled>
				<AboutMe />
				<Education />
			</AboutColumnStyled>
		);
	}
}

export default AboutColumn;