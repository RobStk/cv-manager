import React, { useEffect, useReducer } from "react";
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
import DataProvider from "./components/context_providers/DataProvider";
import dataReducer from "./components/reducers/dataReducer";
import modalReducer from "./components/reducers/modalReducer";
import Modal from "./components/Modal";
import DataService from "./modules/data-service";
import Section from "./components/Section";

export default function CVManager() {
	const [data, dispatchData] = useReducer(dataReducer, {});
	const [modalState, dispatchModal] = useReducer(modalReducer, { isActive: false, content: null });

	useEffect(() => {
		let ignore = false;

		async function fetchData() {
			const jsonData = await DataService.getData();
			if (jsonData && !ignore) {
				dispatchData({
					type: "data_updated",
					data: jsonData
				});
			}
		}
		fetchData();
		return () => { ignore = true; };
	}, []);

	const footer = data.footer;

	return (
		<ThemeProvider theme={simpleTheme}>
			<GlobalStyle />
			<CVManagerLayout>
				<DataProvider data={data} dataDispatch={dispatchData} modalDispatch={dispatchModal}>
					{modalState.isActive && <Modal onClose={() => dispatchModal({ type: "modal_closed" })}>{modalState.content}</Modal>}
					<MainContainerLayout>
						<Section className="cv-header">
							<div className="name-wrapper">
								<Name data={data.name} theme={simpleThemeInverted} />
							</div>
							<Section className="contact-wrapper">
								<ContactSection data={data.contact} />
							</Section>
						</Section>
						<Section className="cv-content">
							<Section className="content-column">
								<AboutColumn theme={simpleThemeInverted} data={data.about} />
							</Section>
							<Section className="content-column">
								<DiagramColumn data={data.diagrams} />
							</Section>
						</Section>
					</MainContainerLayout>
					<Section className="main-footer">
						<MainFooter data={footer} />
					</Section>
				</DataProvider>
			</CVManagerLayout>
		</ThemeProvider>
	);
}