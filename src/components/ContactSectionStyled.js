import styled from "styled-components";

const ContactSectionStyled = styled.div`
	margin: calc(${props => props.theme.spaces.main}/4) calc(${props => props.theme.spaces.main}/2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.1em;

    h2 {
        line-height: 100%;
    }

    .contacts {
        display: flex;
        width: 100%;
        flex-direction: column;
        column-gap: 0.5em;
    }
`;

ContactSectionStyled.displayName = "ContactSectionStyled";
export default ContactSectionStyled;