import React from "react";
import AboutColumnStyled from "./AboutColumnStyled";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

class AboutColumn extends React.Component {
	render() {
		return (
			<AboutColumnStyled>
				<AboutMe />
				<div className="about-section">
					<div className="header"><h2>Wykształcenie</h2></div>
					<div className="content"><Education /></div>
				</div>
				<div className="about-section">
					<div className="header"><h2>Doświadczenie</h2></div>
					<div className="content"><Experience /></div>
				</div>
			</AboutColumnStyled>
		);
	}
}

export default AboutColumn;