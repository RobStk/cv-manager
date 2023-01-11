import React from "react";
import PropTypes from "prop-types";
import AboutColumnStyled from "./AboutColumnStyled";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

export default function AboutColumn({ data }) {
	return (
		<AboutColumnStyled>
			<div className="about-section">
				<div className="header"><h2>O mnie</h2></div>
				<div className="content">
					<AboutMe data={data.aboutMe} />
				</div>

			</div>
			<div className="about-section">
				<div className="header"><h2>Wykształcenie</h2></div>
				<div className="content">
					<Education data={data?.education || []} />
				</div>
			</div>
			<div className="about-section">
				<div className="header"><h2>Doświadczenie</h2></div>
				<div className="content">
					<Experience data={data?.experience || []} />
				</div>
			</div>
		</AboutColumnStyled>
	);
}

AboutColumn.propTypes = {
	data: PropTypes.object
};