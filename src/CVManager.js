import React from "react";
import { ThemeProvider } from "styled-components";
import CVManagerLayout from "./layout/CVManagerLayout";
import GlobalStyle from "./main-styles/base/GlobalStyle";
import simpleTheme from "./main-styles/themes/simple-theme";
import MainContainerLayout from "./layout/MainContainerLayout";
import MainFooter from "./components/MainFooter";
import CVHeaderLayout from "./layout/CVHeaderLayout";
import CVContentLayout from "./layout/CVContentLayout";

class CVManager extends React.Component {
	render() {
		return (
			<ThemeProvider theme={simpleTheme}>
				<GlobalStyle />
				<CVManagerLayout>
					<MainContainerLayout>
						<CVHeaderLayout>
							<div>col 1</div>
							<div>col 2</div>
							<div>col 3</div>
						</CVHeaderLayout>
						<CVContentLayout>
							<div>col 1</div>
							<div>col 2</div>
						</CVContentLayout>
					</MainContainerLayout>
					<MainFooter />
				</CVManagerLayout>
			</ThemeProvider>
		);
	}
}

export default CVManager;