import React, { useReducer } from "react";
import { ThemeProvider } from "styled-components";
import simpleTheme from "./main-styles/themes/simple-theme";
import simpleThemeInverted from "./main-styles/themes/simple-theme-inverted";
import CVManagerLayout from "./layout/CVManagerLayout";
import GlobalStyle from "./main-styles/base/GlobalStyle";
import MainContainerLayout from "./layout/MainContainerLayout";
import MainFooter from "./components/MainFooter";
import Name from "./components/Name";
import ContactSection from "./components/ContactSection";
import AboutColumn from "./components/AboutColumn";
import DiagramColumn from "./components/DiagramColumn";
import MainFeatureProvider from "./components/context_providers/MainFeatureProvider";
import modalReducer from "./components/reducers/modalReducer";
import Modal from "./components/Modal";
import DataService from "./modules/data-service";
import Section from "./components/Section";
import useData from "./utils/useData";
import DataPart from "./modules/data-part";

export default function CVManager() {
	const [data, dispatchData] = useData(DataService);
	const [modalState, dispatchModal] = useReducer(modalReducer, { isActive: false, content: null });

	const nameDataPart = new DataPart(data.name, dispatchData, "name_updated");
	const contactDataPart = new DataPart(data.contact, dispatchData, "contact_updated");
	const aboutDataPart = new DataPart(data.about, dispatchData, "about_updated");
	const diagramsDataPart = new DataPart(data.diagrams, dispatchData, "diagrams_updated");
	const footerDataPart = new DataPart(data.footer, dispatchData, "footer_updated");

	const modal = <Modal onClose={() => dispatchModal({ type: "modal_closed" })}>{modalState.content}</Modal>;

	return (
		<ThemeProvider theme={simpleTheme}>
			<GlobalStyle />
			<CVManagerLayout>
				<MainFeatureProvider modalDispatch={dispatchModal}>
					{modalState.isActive && modal}
					<MainContainerLayout>
						<Section className="cv-header">
							<div className="name-wrapper">
								<Name dao={nameDataPart} theme={simpleThemeInverted} />
							</div>
							<Section className="contact-wrapper">
								<ContactSection dao={contactDataPart} />
							</Section>
						</Section>
						<Section className="cv-content">
							<Section className="content-column">
								<AboutColumn dao={aboutDataPart} theme={simpleThemeInverted} />
							</Section>
							<Section className="content-column">
								<DiagramColumn dao={diagramsDataPart} />
							</Section>
						</Section>
					</MainContainerLayout>
					<Section className="main-footer">
						<MainFooter dao={footerDataPart} />
					</Section>
				</MainFeatureProvider>
			</CVManagerLayout>
		</ThemeProvider>
	);
}