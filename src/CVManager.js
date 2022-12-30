import React from "react";
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

class CVManager extends React.Component {
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
								<ContactSection />
							</div>
						</CVHeaderLayout>
						<CVContentLayout>							
							<div className="content-column">
								<AboutColumn />
							</div>
							<div className="content-column">
								col 2
							</div>
						</CVContentLayout>
					</MainContainerLayout>
					<MainFooter />
				</CVManagerLayout>
			</ThemeProvider>
		);
	}
}

export default CVManager;