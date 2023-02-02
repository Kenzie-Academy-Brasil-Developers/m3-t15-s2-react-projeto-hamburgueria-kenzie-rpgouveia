import styled from "styled-components";

export const StyledHeader = styled.header`
    /* Container */
    width: 92.3%;
    max-width: 100%;
    height: 139px;
    margin: 0 auto;

    /* Positioning */
    padding: 14px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;

    @media(min-width: 767px){
        width: 85.6%;
        height: 80px;
        padding: 10px 0px;
        flex-direction: row;
        gap: unset;
        justify-content: space-between;
    }

    @media(min-width: 2559px){
        width: 60%;
    }
`