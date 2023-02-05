import styled from "styled-components";

export const StyledForm = styled.form`
    border-top: 2px solid var(--color-grey-20);

    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
        margin-top: 21px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    div > p {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-semiBold);
        font-size: var(--font-size-5);
        line-height: 24px;
        color: var(--color-grey-100);
    }

    span {
        color: var(--color-grey-50);
    }

    button {
        height: 60px;
        width: 100%;
        padding: 0px 20px;

        background-color: var(--color-grey-20);
        border: 2px solid var(--color-grey-20);
        border-radius: 8px;

        font-family: 'Inter';
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: var(--color-grey-50);

        cursor: pointer;
    }
`