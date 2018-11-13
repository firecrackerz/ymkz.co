import { injectGlobal } from 'emotion'
import Futura300 from 'src/fonts/Futura-300.woff'
import Futura700 from 'src/fonts/Futura-700.woff'

export default injectGlobal`
  @font-face {
    font-display: fallback;
    font-family: 'Futura';
    font-weight: 300;
    src: url(${Futura300}) format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Futura';
    font-weight: 700;
    src: url(${Futura700}) format('woff');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    font-size: 18px;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    background-color: #2e3440;
    color: #eceff4;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1rem;
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }
`
