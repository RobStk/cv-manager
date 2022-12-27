import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`	
	html {
    	box-sizing: border-box;

		*,
		*::before,
		*::after {
			box-sizing: inherit;
		}

		* {
			margin: 0;
			padding: 0;
		}
	}
	
	body {
		height: 100vh;
		font-family: 'Poppins', sans-serif;
		font-size: 13px;
    	background-color: ${({ theme }) => theme.colors.bgPrimary};
	}
`;

export default GlobalStyle;