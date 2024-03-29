import styled from "styled-components";

export const StyledAside = styled.aside`
    height: fit-content;
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
        padding: ${(props) => props.isPadding == 0 ? '0px' : '20px 18px'};

        display: flex;
        flex-direction: column;
        gap: 21px;
    }

    @media(min-width: 767px) {
        width: 100%;
        max-width: 365px;
        align-self: center;
    }

    @media(min-width: 1023px) {
        margin-top: 32px;
        align-self: unset;
    }
`