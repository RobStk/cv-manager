import React, { useEffect, useState } from "react";
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
import Modal from "./components/Modal";
import InputRow from "./components/InputRow";
import Form from "./components/Form";

export default function CVManager({ dataManager }) {
	const [data, setData] = useState({});
	const [isModalActive, setModalActiveState] = useState(true);

	useEffect(() => {
		let ignore = false;

		async function fetchData() {
			const jsonData = await dataManager.getData();
			if (!ignore && jsonData) {
				setData(jsonData);
			}
		}
		fetchData();
		return () => { ignore = true; };
	}, []);

	const name = data.name;
	const contacts = data.contact;
	const skillDiagrams = data.skillDiagrams;
	const footer = data.footer;

	//TODO Testing lines to remove:
	const input = <input type="text" id="id" defaultValue="input value" />;
	const inputRow = <InputRow label="label" input={input} />;
	const modalContent = <Form inputRows={[inputRow]} />;

	return (
		<ThemeProvider theme={simpleTheme}>
			<GlobalStyle />
			{isModalActive && <Modal content={modalContent} handleClose={() => setModalActiveState(false)} />}
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
							<AboutColumn data={data} />
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

CVManager.propTypes = {
	dataManager: PropTypes.object
};