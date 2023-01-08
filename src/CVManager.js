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
import DataService from "./modules/data-service";

class CVManager extends React.Component {
	static propTypes = {
		dataUrl: PropTypes.string
	};

	/* -------------------------------------------- */
	/* Constructor 									*/
	/* -------------------------------------------- */
	constructor(props) {
		super(props);
		this.dataManager = new DataService(this.props.dataUrl);
		this.state = { personalData: {} };
	}

	/* -------------------------------------------- */
	/* Initialization 								*/
	/* -------------------------------------------- */
	componentDidMount() {
		this.getPersonalData();
	}

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		const name = this.state.personalData.name;
		const contacts = this.state.personalData.contact;
		const skillDiagrams = this.state.personalData.skillDiagrams;
		const footer = this.state.personalData.footer;
		console.log(footer);
		return (
			<ThemeProvider theme={simpleTheme}>
				<GlobalStyle />
				<CVManagerLayout>
					<MainContainerLayout>
						<CVHeaderLayout>
							<div className="name-wrapper">
								<Name data={name} />
							</div>
							<div className="contact-wrapper">
								<ContactSection data={contacts} />
							</div>
						</CVHeaderLayout>
						<CVContentLayout>							
							<div className="content-column">
								<AboutColumn data={this.state.personalData} />
							</div>
							<div className="content-column">
								<DiagramsColumn data={skillDiagrams} />
							</div>
						</CVContentLayout>
					</MainContainerLayout>
					<MainFooter data={footer} />
				</CVManagerLayout>
			</ThemeProvider>
		);
	}

	/* -------------------------------------------- */
	/* Methods 										*/
	/* -------------------------------------------- */
	async getPersonalData() {
		const data = await this.dataManager.getData();
		if (data) this.setState({ personalData: data });
	}
}

export default CVManager;