import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root{
        /* Primary Palette */
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secundary: #EB5757;

        /* Grey Scale Palette */
        --color-grey-0: #F5F5F5;
        --color-grey-20: #E0E0E0;
        --color-grey-50: #828282;
        --color-grey-100: #333333;

        /* Feedback Palette */
        --color-information: #155BCB;
        --color-sucess: #168821;
        --color-warning: #FFCD07;
        --color-negative: #E60000;

        /* Extra Colors */
        --color-white: #FFFFFF;

        /* Typography */
        --font-family-1: 'Inter', sans-serif;

        --font-weight-bold: 700;
        --font-weight-semiBold: 600;
        --font-weight-medium: 500;
        --font-weight-regular: 400;
        
        --font-size-1: 26px;
        --font-size-2: 22px;
        --font-size-3: 18px;
        --font-size-4: 16px;
        --font-size-5: 14px;
        --font-size-6: 12px;
    }
`