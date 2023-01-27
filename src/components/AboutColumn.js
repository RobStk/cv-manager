import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import AboutColumnStyled from "./AboutColumnStyled";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import { DataContext } from "./context_providers/DataProvider";
import Header from "./Header";

export default function AboutColumn(props) {
	const theme = props.theme || useContext(ThemeContext);
	const data = props.data || useContext(DataContext) || {};
	return (
		<ThemeProvider theme={theme}>
			<AboutColumnStyled>
				<div className="about-section">
					<div className="header">
						<Header>{data?.aboutMe?.title}</Header>
					</div>
					<div className="content">
						<AboutMe data={data?.aboutMe?.value} />
					</div>
				</div>
				<div className="about-section">
					<div className="header">
						<Header>{data?.education?.title}</Header>
					</div>
					<div className="content">
						<Education data={data?.education?.value || []} />
					</div>
				</div>
				<div className="about-section">
					<div className="header">
						<Header>{data?.experience?.title}</Header>
					</div>
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