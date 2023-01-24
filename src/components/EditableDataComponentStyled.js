import styled from "styled-components";

const EditableDataComponentStyled = styled.div`
	position: relative;
	transition: 0.1s;
	padding: 0.3em;
	:hover, :focus-within {
		box-shadow: 0px 0px 5px -2px ${props => props.theme.colors.bgSecondary};
	}
`;
EditableDataComponentStyled.displayName = "EditableDataComponentStyled";
export default EditableDataComponentStyled;