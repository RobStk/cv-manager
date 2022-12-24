import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./main-styles/base/GlobalStyle";
import simpleTheme from "./main-styles/themes/simple-theme";

class CVManager extends React.Component {
	render() {
		return (
			<ThemeProvider theme={simpleTheme}>
				<GlobalStyle />
				<p>Hello World</p>
			</ThemeProvider>
		);
	}
}

export default CVManager;