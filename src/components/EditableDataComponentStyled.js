import styled from "styled-components";
import addOpacityToColor from "../utils/color-opacity";

const EditableDataComponentStyled = styled.div`
	position: relative;
	transition: 0.1s;
	padding: 0.3em;
	cursor: default;
	:hover, :focus-within {
		box-shadow: 0px 0px 5px 1px ${props => addOpacityToColor(props.theme.colors.bgSecondary, 0.2)};
	}
`;
EditableDataComponentStyled.displayName = "EditableDataComponentStyled";
export default EditableDataComponentStyled;