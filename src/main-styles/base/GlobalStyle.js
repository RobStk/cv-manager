import { createGlobalStyle } from "styled-components";
import getSpacing from "./spacing";

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
		color: ${({ theme }) => theme.colors.fgPrimary};
	}

	h1 {
		font-size: 2em;
	}

	h2 {
		font-size: 2em;
	}

	h3 {
		font-size: 1.5em;
		font-variant: small-caps;
	}

	ul {
		list-style: inside;
	}

	a {
		color: inherit;
	}

	//External parts
	${getSpacing()}
`;

export default GlobalStyle;