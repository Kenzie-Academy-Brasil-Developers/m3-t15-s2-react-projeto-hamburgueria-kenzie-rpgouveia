import styled from "styled-components";

export const StyledUl = styled.ul`
    margin-top: 29px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-y: auto;

    @media(min-width: 767px) {
        margin-top: 32px;
        margin-bottom: 36px;
    }

    @media(min-width: 1023px) {
        overflow-y: unset;
        justify-content: unset;
        flex-wrap: wrap;
        width: 50%;
    }

    @media(min-width: 1439px) {
        width: 940px;
    }
`