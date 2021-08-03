import { createGlobalStyle } from 'styled-components';

import NunitoRegular from '../fonts/NunitoSans-Regular.woff'
import NunitoRegular2 from '../fonts/NunitoSans-Regular.woff2'
import NunitoSemiBold from '../fonts/NunitoSans-SemiBold.woff'
import NunitoSemiBold2 from '../fonts/NunitoSans-SemiBold.woff2'
import NunitoBold from '../fonts/NunitoSans-Bold.woff'
import NunitoBold2 from '../fonts/NunitoSans-Bold.woff2'

const FontsStyle = createGlobalStyle`
    body{
        margin: 0;
    }
    @font-face {
        font-family: 'nunito-regular';
        src: url(${NunitoRegular}) format('woff2'),
             url(${NunitoRegular2}) format('woff');
    }

    @font-face {
        font-family: 'nunito-semibold';
        src: url(${NunitoSemiBold}) format('woff2'),
             url(${NunitoSemiBold2}) format('woff');
    }

    @font-face {
        font-family: 'nunito-bold';
        src: url(${NunitoBold}) format('woff2'),
             url(${NunitoBold2}) format('woff');
    }
`;

export default FontsStyle;