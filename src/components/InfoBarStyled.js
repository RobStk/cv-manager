import styled from "styled-components";

const InfoBarStyled = styled.div`
	color: ${({ theme }) => theme.colors.fgSecondary};
	background-color: ${({ theme }) => theme.colors.bgSecondary};
	padding: 0.3em 0;
	opacity: 0.8;
`;

InfoBarStyled.displayName = "InfoBarStyled";
export default InfoBarStyled;