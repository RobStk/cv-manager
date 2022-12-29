import styled from "styled-components";

const ContactSectionStyled = styled.div`
	padding-left: calc(${props => props.theme.spaces.main}/2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.1em;

    h1 {
        font-size: x-large;
    }

    .contacts {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        column-gap: 0.5em;
    }
`;

ContactSectionStyled.displayName = "ContactSectionStyled";
export default ContactSectionStyled;