import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import AboutColumnStyled from "./AboutColumnStyled";
import { DataDispatchContext } from "./context_providers/DataProvider";
import AboutHeader from "./AboutHeader";
import Section from "./Section";
import AboutContent from "./AboutContent";

export default function AboutColumn(props) {
	const theme = props.theme || useContext(ThemeContext);
	const dispatchUpdate = useContext(DataDispatchContext);
	const dataArr = props.data || [];
	const content = dataArr.map((element, index) => {
		return (
			<div key={element.id || index} className="about-section">

				<AboutHeader
					data={element.title}
					actionType="aboutMeTitleUpdated"
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
		dispatchUpdate({
			type: "about_updated",
			data: newData
		});
	}

	function handleContentUpdate(index, value) {
		const newData = [...dataArr];
		newData[index].value = value;
		dispatchUpdate({
			type: "about_updated",
			data: newData
		});
	}
}

AboutColumn.propTypes = {
	data: PropTypes.array,
	theme: PropTypes.object
};