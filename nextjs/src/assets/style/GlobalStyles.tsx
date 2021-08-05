import { createGlobalStyle } from 'styled-components';

const FontsStyle = createGlobalStyle`
    body{
        margin: 0;
    }
    @font-face {
        font-family: 'nunito-regular';
        src: url('/static/fonts/NunitoSans-Regular.woff') format('woff'),
             url('/static/fonts/NunitoSans-Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: 'nunito-semibold';
        src: url('/static/fonts/NunitoSans-Bold.woff') format('woff'),
             url('/static/fonts/NunitoSans-Bold.woff2') format('woff2');
    }

    @font-face {
        font-family: 'nunito-bold';
        src: url('/static/fonts/NunitoSans-SemiBold.woff') format('woff'),
             url('/static/fonts/NunitoSans-SemiBold.woff') format('woff2');
    }
`;

export default FontsStyle;