import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import simpleTheme from "./main-styles/themes/simple-theme";
import CVManagerLayout from "./layout/CVManagerLayout";
import GlobalStyle from "./main-styles/base/GlobalStyle";
import MainContainerLayout from "./layout/MainContainerLayout";
import MainFooter from "./components/MainFooter";
import CVHeaderLayout from "./layout/CVHeaderLayout";
import CVContentLayout from "./layout/CVContentLayout";
import Name from "./components/Name";
import ContactSection from "./components/ContactSection";
import AboutColumn from "./components/AboutColumn";
import DiagramsColumn from "./components/DiagramsColumn";

class CVManager extends React.Component {
	static propTypes = {
		dataPath: PropTypes.string
	};

	/* -------------------------------------------- */
	/* Constructor 									*/
	/* -------------------------------------------- */
	constructor(props) {
		super(props);
		this.dataPath = props.dataPath;
		this.personalData = this.getPersonalData();
	}

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		return (
			<ThemeProvider theme={simpleTheme}>
				<GlobalStyle />
				<CVManagerLayout>
					<MainContainerLayout>
						<CVHeaderLayout>
							<div className="name-wrapper">
								<Name />
							</div>
							<div className="contact-wrapper">
								<ContactSection contacts={this.personalData.contact} />
							</div>
						</CVHeaderLayout>
						<CVContentLayout>							
							<div className="content-column">
								<AboutColumn data={this.personalData} />
							</div>
							<div className="content-column">
								<DiagramsColumn data={this.personalData.skillDiagrams} />
							</div>
						</CVContentLayout>
					</MainContainerLayout>
					<MainFooter />
				</CVManagerLayout>
			</ThemeProvider>
		);
	}

	/* -------------------------------------------- */
	/* Methods 										*/
	/* -------------------------------------------- */
	getPersonalData() {
		const tempData = {
			name: "Name Surname",
			contact: [
				{ type: "phone", value: "123456789" },
				{ type: "email", value: "email@host.com" },
				{ type: "gitHub", value: "profile.github.com" },
				{ type: "facebook", value: "profile.facebook.com" },
			],
			aboutMe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis libero aperiam, iste voluptatibus, tempora quam perspiciatis numquam maiores exercitationem odio qui quidem quasi similique laudantium sed ex veniam fugit ? Commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Laborum hic dolorum debitis eveniet animi sapiente, aliquid quidem accusantium necessitatibus minima ea vitae quia.Veritatis saepe modi dolore ipsum quibusdam sint ?",
			education: [
				{
					grade: "Grade1",
					date: "11.11.2011",
					desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
					additional: [
						{
							title: "Field",
							content: "Repellendus molestias, magnam architecto consequuntur provident"
						},
						{
							title: "Spec",
							content: "Repellendus molestias, magnam architecto consequuntur provident"
						}
					]
				},
				{
					grade: "Grade1",
					date: "11.11.2011",
					desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
					additional: [
						{
							title: "Field",
							content: "Repellendus molestias, magnam architecto consequuntur provident"
						},
						{
							title: "Spec",
							content: "Repellendus molestias, magnam architecto consequuntur provident"
						}
					]
				},
			],
			experience: [
				{
					grade: "Grade1",
					date: "12.12.2022",
					desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
					additional: [
						{
							title: "Title",
							content: "Repellendus molestias, magnam architecto consequuntur provident"
						}
					]
				},
			],
			skillDiagrams: [
				{
					type: "pie",
					name: "pie section name",
					diagrams: [
						{ name: "skill 1", value: "55" },
						{ name: "skill 2", value: "85" },
						{ name: "skill 3", value: "100" },
						{ name: "skill 4", value: "50" },
						{ name: "skill 5", value: "15" }
					]
				},
				{
					type: "list",
					name: "list section name",
					diagrams: [
						{ name: "skill 1" },
						{ name: "skill 2" },
						{ name: "skill 3" },
						{ name: "skill 4" },
						{ name: "skill 5" }
					]
				},
				{
					type: "bar",
					name: "bar section name",
					diagrams: [
						{ name: "skill 1", value: "55" },
						{ name: "skill 2", value: "85" },
						{ name: "skill 3", value: "100" },
						{ name: "skill 4", value: "50" },
						{ name: "skill 5", value: "15" }
					]
				}
			]
		};
		return tempData;
	}
}

export default CVManager;