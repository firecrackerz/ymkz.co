import { injectGlobal } from 'styled-components'
import { color, constraint } from '~/constants'
import FuturaBold from '~/fonts/Futura-Bold.woff'
import FuturaLight from '~/fonts/Futura-Light.woff'

export default injectGlobal`
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
    background-color: ${color.black};
    color: ${color.white};
    -webkit-overflow-scrolling: touch;
  }

  #root {
    margin: 0 auto;
    max-width: calc(768px + ${constraint.mobilePadding} * 2);
    padding: 0 ${constraint.mobilePadding} ${constraint.bottomPadding};
  }
`
