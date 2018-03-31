import { injectGlobal } from 'styled-components'
import FuturaBold from './fonts/Futura-Bold.woff'
import FuturaLight from './fonts/Futura-Light.woff'
import OperatorMonoLight from './fonts/OperatorMono-Light.woff'

export default injectGlobal`
  :root {
    --nord0: #2e3440;
    --nord1: #3b4252;
    --nord2: #434c5e;
    --nord3: #4c566a;
    --nord4: #d8dee9;
    --nord5: #e5e9f0;
    --nord6: #eceff4;
    --nord7: #8fbcbb;
    --nord8: #88c0d0;
    --nord9: #81a1c1;
    --nord10: #5e81ac;
    --nord11: #bf616a;
    --nord12: #d08770;
    --nord13: #ebcb8b;
    --nord14: #a3be8c;
    --nord15: #b48ead;
    --mobile-padding: 16px;
    --bottom-padding: 100px;
    --header-height: 100px;
    --contact-max-width: 512px;
  }

  @font-face {
    font-family: 'Custom Yu Gothic';
    font-weight: 300;
    src: local('Yu Gothic');
  }

  @font-face {
    font-family: 'Custom Yu Gothic';
    font-weight: 500;
    src: local('Yu Gothic');
  }

  @font-face {
    font-family: 'Custom Yu Gothic';
    font-weight: bold;
    src: local('Yu Gothic');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Futura';
    font-weight: 700;
    src: url(${FuturaBold}) format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Futura';
    font-weight: 300;
    src: url(${FuturaLight}) format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'OperatorMono';
    font-weight: 300;
    src: url(${OperatorMonoLight}) format('woff');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  section,
  a,
  p,
  span,
  img,
  ul,
  li,
  label,
  h1,
  h2,
  h3,
  h4,
  h5,
  input,
  textarea {
    background: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', '游ゴシック Medium', YuGothic, 'Custom Yu Gothic',
    'Yu Gothic', 'Hiragino Kaku Gothic ProN', メイリオ, Meiryo, sans-serif;
    font-size: 16px;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: var(--nord0);
    color: var(--nord6);
    -webkit-overflow-scrolling: touch;
  }

  #root {
    font-family: 'Futura', sans-serif;
    font-weight: 300;
    margin: 0 auto;
    max-width: calc(768px + var(--mobile-padding) + var(--mobile-padding));
    padding: 0 var(--mobile-padding) var(--bottom-padding);
  }

  ::selection {
    background-color: var(--nord4);
  }
`

/*
html {
  font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*/
