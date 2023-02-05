import styled from "styled-components";

export const StyledDiv = styled.div`
    background-color: var(--color-white);

    main > div {
        display: flex;
        flex-direction: column;
    }

    @media(min-width: 1023px) {
        main > div {
            flex-direction: row;
            justify-content: space-between;
        }

        main > div > aside {
            position: -webkit-sticky;
            position: sticky;
            top: 0px;
        }
    }
`