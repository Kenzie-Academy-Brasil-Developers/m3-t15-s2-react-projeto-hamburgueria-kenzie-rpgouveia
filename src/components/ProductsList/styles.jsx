import styled from "styled-components";

export const StyledUl = styled.ul`
    /* Container */
    width: 92.3%;
    max-width: 100%;
    margin: 0 auto;

    /* Positioning */
    margin-top: 29px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-y: auto;

    @media(min-width: 767px) {
        width: 86.3%;
        margin-top: 32px;
        margin-bottom: 36px;
    }

    @media(min-width: 1023px) {
        overflow-y: unset;
        justify-content: unset;
        flex-wrap: wrap;
    }

    @media(min-width: 1439px) {
        width: 940px;
        
    }
`