import React from "react";
import PropTypes from "prop-types";
import AboutColumnStyled from "./AboutColumnStyled";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

class AboutColumn extends React.Component {
	static propTypes = {
		data: PropTypes.object
	};

	render() {
		return (
			<AboutColumnStyled>
				<div className="about-section">
					<div className="header"><h2>O mnie</h2></div>
					<div className="content"><AboutMe /></div>

				</div>
				<div className="about-section">
					<div className="header"><h2>Wykształcenie</h2></div>
					<div className="content"><Education data={this.props.data.education} /></div>
				</div>
				<div className="about-section">
					<div className="header"><h2>Doświadczenie</h2></div>
					<div className="content"><Experience data={this.props.data.experience} /></div>
				</div>
			</AboutColumnStyled>
		);
	}
}

export default AboutColumn;