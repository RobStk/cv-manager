import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import AboutColumnStyled from "./AboutColumnStyled";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import AboutContent from "./AboutContent";

export default function AboutColumn(props) {
	const theme = props.theme || useContext(ThemeContext);
	const dao = props.dao;
	const dataArr = dao.getData() || [];
	const content = dataArr.map((element, index) => {

		return (
			<div key={element.id || index} className="about-section">

				<SectionHeader
					data={element.title}
					label="About Me Title"
					onUpdate={data => handleHeaderUpdate(index, data)}
				/>

				<Section className="content">
					<AboutContent
						data={element.value}
						index={index}
						onUpdate={data => handleContentUpdate(index, data)}
					/>
				</Section>

			</div>
		);
	});

	return (
		<ThemeProvider theme={theme}>
			<AboutColumnStyled>
				{content}
			</AboutColumnStyled>
		</ThemeProvider>
	);

	function handleHeaderUpdate(index, value) {
		const newData = [...dataArr];
		newData[index].title = value;
		dao.setData(newData);
	}

	function handleContentUpdate(index, value) {
		const newData = [...dataArr];
		newData[index].value = value;
		dao.setData(newData);
	}
}

AboutColumn.propTypes = {
	dao: PropTypes.object,
	theme: PropTypes.object
};