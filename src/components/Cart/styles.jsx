import styled from "styled-components";

export const StyledAside = styled.aside`
    /* Container */
    width: 92.3%;
    max-width: 365px;
    margin: 0 auto;

    /* Positioning */
    margin-bottom: 20px;

    .cart_header {
        padding: 22px 20px;
        background-color: var(--color-primary);
        border-radius: 5px 5px 0px 0px;
    }

    .cart_header > h2 {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-3);
        line-height: 24px;
        color: var(--color-white);
    }

    ul {
        padding: 20px 18px;

        display: flex;
        flex-direction: column;
        gap: 21px;
    }
`