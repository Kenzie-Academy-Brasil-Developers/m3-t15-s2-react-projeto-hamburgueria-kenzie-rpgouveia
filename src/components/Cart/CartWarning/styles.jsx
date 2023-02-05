import styled from "styled-components";

export const StyledLi = styled.li`
    background-color: var(--color-grey-0);
    border-radius: 0px 0px 5px 5px;
    padding: 44px 20px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    h2 {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-3);
        line-height: 24px;
        color: var(--color-grey-100);
    }

    p {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-5);
        line-height: 24px;
        color: var(--color-grey-50)
    }
`