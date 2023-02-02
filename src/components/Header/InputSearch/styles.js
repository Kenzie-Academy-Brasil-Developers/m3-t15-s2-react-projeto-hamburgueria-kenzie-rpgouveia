import styled from 'styled-components'

export const StyledForm = styled.form`
    height: 60px;
    width: 100%;
    max-width: 382px;
    
    background-color: var(--color-grey-20);
    border: 2px solid var(--color-grey-20);
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;

    input {
        height: 100%;
        width: 100%;
        padding-left: 15px;
        
        border-radius: 8px;
        border: none;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-4);
        line-height: 19px;
        color: var(--color-grey-20);
    }
    input:focus{
        outline: 2px solid var(--color-grey-100);
        color: var(--color-grey-50);
    }

    button {
        height: 40px;
        width: 130px;
        padding: 0px 10px;
        
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: 8px;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-5);
        line-height: 17px;
        color: var(--color-white);

        position: absolute;
        right: 10px;

        cursor: pointer;
    }
`