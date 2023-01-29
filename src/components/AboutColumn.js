import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import AboutColumnStyled from "./AboutColumnStyled";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import { DataContext } from "./context_providers/DataProvider";
import AboutHeader from "./AboutHeader";

export default function AboutColumn(props) {
	const theme = props.theme || useContext(ThemeContext);
	const data = props.data || useContext(DataContext) || {};
	return (
		<ThemeProvider theme={theme}>
			<AboutColumnStyled>
				<div className="about-section">

					<AboutHeader
						data={data.aboutMe?.title}
						actionType="aboutMeTitleUpdated"
						label="About Me Title" />

					<div className="content">
						<AboutMe data={data?.aboutMe?.value} />
					</div>

				</div>
				<div className="about-section">

					<AboutHeader
						data={data.education?.title}
						actionType="educationTitleUpdated"
						label="Education Title" />

					<div className="content">
						<Education data={data?.education?.value || []} />
					</div>

				</div>
				<div className="about-section">

					<AboutHeader
						data={data.experience?.title}
						actionType="experienceTitleUpdated"
						label="Experience Title" />

					<div className="content">
						<Experience data={data?.experience?.value || []} />
					</div>

				</div>
			</AboutColumnStyled>
		</ThemeProvider>
	);
}

AboutColumn.propTypes = {
	data: PropTypes.object,
	theme: PropTypes.object
};