import styled from "styled-components";

export const StyledMain = styled.main`
    background-color: var(--color-white);

    section > div {
        display: flex;
        flex-direction: column;
    }

    @media(min-width: 1023px) {
        section > div {
            flex-direction: row;
            justify-content: space-between;
        }
    }
`