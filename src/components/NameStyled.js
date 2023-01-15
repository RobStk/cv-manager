import styled from "styled-components";

const NameStyled = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    h1 {
        text-transform: uppercase;
    }

    h2 {
        text-transform: uppercase;
        font-size: large;
        font-weight: unset;
    }
`;

NameStyled.displayName = "NameStyled";
export default NameStyled;