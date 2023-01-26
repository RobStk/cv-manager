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
import DiagramsColumn from "./components/DiagramsColumn";
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
			if (!ignore) {
				const jsonData = await DataService.getData();
				if (jsonData) {
					dispatchData({
						type: "data_updated",
						data: jsonData
					});
				}
			}
		}
		fetchData();
		return () => { ignore = true; };
	}, []);

	const footer = data.footer;

	return (
		<ThemeProvider theme={simpleTheme}>
			<GlobalStyle />
			{modalState.isActive && <Modal onClose={() => dispatchModal({ type: "modal_closed" })}>{modalState.content}</Modal>}
			<CVManagerLayout>
				<DataProvider data={data} dataDispatch={dispatchData} modalDispatch={dispatchModal}>
					<MainContainerLayout>
						<Section className="cv-header">
							<div className="name-wrapper">
								<Name data={data.name} theme={simpleThemeInverted} />
							</div>
							<div className="contact-wrapper">
								<ContactSection data={data.contact} />
							</div>
						</Section>
						<Section className="cv-content">
							<div className="content-column">
								<AboutColumn theme={simpleThemeInverted} data={data} />
							</div>
							<div className="content-column">
								<DiagramsColumn data={data.skillDiagrams} />
							</div>
						</Section>
					</MainContainerLayout>
					<MainFooter data={footer} />
				</DataProvider>
			</CVManagerLayout>
		</ThemeProvider>
	);
}