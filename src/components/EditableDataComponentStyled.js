import styled from "styled-components";
import addOpacityToColor from "../utils/color-opacity";

const EditableDataComponentStyled = styled.div`
	position: relative;
	transition: 0.1s;
	padding: 0.3em;
	border-radius: 4px;
	cursor: default;

	:hover, :focus-within {
		box-shadow: 0px 0px 5px 1px ${props => addOpacityToColor(props.theme.colors.bgSecondary, 0.2)};
	}

	&.inset {
		padding: 0.3em 0;
		margin: calc(${props => props.theme.spaces.main}*0.1);
		border-radius: 4px;
		:hover, :focus-within {
			box-shadow: inset 0px 0px 3px 3px ${props => addOpacityToColor(props.theme.colors.bgSecondary, 0.2)};
		}		
	}

	&.no-padding {
		padding: 0;	
	}
`;
EditableDataComponentStyled.displayName = "EditableDataComponentStyled";
export default EditableDataComponentStyled;