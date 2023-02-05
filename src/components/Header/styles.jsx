import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 139px;
    padding: 14px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;

    @media(min-width: 767px){
        height: 80px;
        padding: 10px 0px;
        flex-direction: row;
        gap: unset;
        justify-content: space-between;
    }
`