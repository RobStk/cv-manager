import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import AboutColumnStyled from "./AboutColumnStyled";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import { DataContext } from "./context_providers/DataProvider";

export default function AboutColumn(props) {
	const theme = props.theme || useContext(ThemeContext);
	const data = props.data || useContext(DataContext) || {};
	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	);
}

AboutColumn.propTypes = {
	data: PropTypes.object,
	theme: PropTypes.object
};