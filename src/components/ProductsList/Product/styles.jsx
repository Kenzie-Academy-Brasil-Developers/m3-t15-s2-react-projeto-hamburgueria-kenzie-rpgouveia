import styled from "styled-components";

export const StyledLi = styled.li`
    min-width: 300px;
    padding: 23px 20px;

    background-color: var(--color-white);
    border: 2px solid var(--color-grey-20);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 14px;

    figure {
        background-color: var(--color-grey-0);
        height: 180px;
        width: 100%;
    }
    
    figure > img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }

    h1 {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-3);
        line-height: 24px;
        color: var(--color-grey-100);
    }

    p {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-6);
        line-height: 16px;
        color: var(--color-grey-50);
    }

    h2 {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-semiBold);
        font-size: var(--font-size-5);
        line-height: 24px;
        color: var(--color-primary);
    }

    button {
        height: 40px;
        width: fit-content;
        padding: 0px 20px;

        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: 8px;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-semiBold);
        font-size: var(--font-size-5);
        line-height: 17px;
        color: var(--color-white);
    }

    button:hover{
        background-color: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
    }
`