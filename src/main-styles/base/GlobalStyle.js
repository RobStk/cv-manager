import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`	
	html {
    	box-sizing: border-box;
		font-size: 13px;

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
    	background-color: ${({ theme }) => theme.colors.bgPrimary};

		/* background-color: black; */
	}
`;

export default GlobalStyle;