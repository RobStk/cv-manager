import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import AboutColumnStyled from "./AboutColumnStyled";
import AboutSection from "./AboutSection";

export default function AboutColumn(props) {
	const theme = props.theme || useContext(ThemeContext);
	const dao = props.dao;
	const dataArr = dao.getData() || [];
	const sections = createSections();

	return (
		<ThemeProvider theme={theme}>
			<AboutColumnStyled>
				{sections}
			</AboutColumnStyled>
		</ThemeProvider>
	);

	function handleUpdate(index, data) {
		const newData = [...dataArr];
		newData[index] = data;
		dao.setData(newData);
	}

	function createSections() {
		const sections = dataArr.map((element, index) => {
			return (
				<AboutSection data={element} key={index} onUpdate={(data) => handleUpdate(index, data)} />
			);
		});
		return sections;
	}
}

AboutColumn.propTypes = {
	dao: PropTypes.object,
	theme: PropTypes.object
};