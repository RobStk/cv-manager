import React, { useEffect, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import simpleTheme from "./main-styles/themes/simple-theme";
import simpleThemeInverted from "./main-styles/themes/simple-theme-inverted";
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
import EditableDataComponent from "./components/EditableDataComponent";
import DataProvider from "./components/context_providers/DataProvider";
import dataReducer from "./components/reducers/dataReducer";
import modalReducer from "./components/reducers/modalReducer";
import Modal from "./components/Modal";
import DataService from "./modules/data-service";

export default function CVManager() {
	const [data, dispatchData] = useReducer(dataReducer, {});
	const [modalState, dispatchModal] = useReducer(modalReducer, { isActive: false, content: null });
	console.log("render");

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

	const contacts = data.contact;
	const skillDiagrams = data.skillDiagrams;
	const footer = data.footer;

	return (
		<ThemeProvider theme={simpleTheme}>
			<GlobalStyle />
			{modalState.isActive && <Modal onClose={() => dispatchModal({ type: "modal_closed" })}>{modalState.content}</Modal>}
			<CVManagerLayout>
				<MainContainerLayout>
					<CVHeaderLayout>
						<ThemeProvider theme={simpleThemeInverted}>
							<DataProvider data={data.name} contentName="Name" dataDispatch={dispatchData} modalDispatch={dispatchModal}>
								<div className="name-wrapper"><Name /></div>
							</DataProvider>
						</ThemeProvider>
						<EditableDataComponent className="contact-wrapper" contentName="Contact">
							<ContactSection data={contacts} />
						</EditableDataComponent>
					</CVHeaderLayout>
					<CVContentLayout>
						<ThemeProvider theme={simpleThemeInverted}>
							<div className="content-column">
								<AboutColumn data={data} />
							</div>
						</ThemeProvider>
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