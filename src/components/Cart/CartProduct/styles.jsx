import styled from "styled-components";

export const StyledLi = styled.li`
    display: flex;
    flex-direction: row;
    gap: 10px;

    figure {
        height: 80px;
        width: 80px;
        background-color: var(--color-grey-20);
        border-radius: 5px;
    }
    
    figure > img {
        height: 80px;
        width: 80px;
        object-fit: cover;
    }

    section {
        width: 100%;
        padding-top: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    section > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    section > div > h3 {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-3);
        line-height: 24px;
        color: var(--color-grey-100);
    }

    section > div > p {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-6);
        line-height: 16px;
        color: var(--color-grey-50);
    }

    section > a {
        border: none;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-6);
        line-height: 15px;
        color: var(--color-grey-50);

        cursor: pointer;
    }
`