import React from 'react'
import { css, Global } from '@emotion/core'

const globalStyle = css`
  @font-face {
    font-family: 'Yu Gothic';
    src: local('Yu Gothic Medium');
    font-weight: 100;
  }
  @font-face {
    font-family: 'Yu Gothic';
    src: local('Yu Gothic Medium');
    font-weight: 200;
  }
  @font-face {
    font-family: 'Yu Gothic';
    src: local('Yu Gothic Medium');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Yu Gothic';
    src: local('Yu Gothic Medium');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Yu Gothic';
    src: local('Yu Gothic Bold');
    font-weight: bold;
  }
  @font-face {
    font-family: 'Helvetica Neue';
    src: local('Helvetica Neue Regular');
    font-weight: 100;
  }
  @font-face {
    font-family: 'Helvetica Neue';
    src: local('Helvetica Neue Regular');
    font-weight: 200;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Yu Gothic', YuGothic, Verdana,
      Meiryo, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  @media all and (-ms-high-contrast: none) {
    html {
      font-family: Verdana, Meiryo, sans-serif;
    }
  }
  @media all and (-ms-high-contrast: active) {
    html {
      font-family: Verdana, Meiryo, sans-serif;
    }
  }
  html {
    font-size: 16px;
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
    font-size: 100%;
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }
`

export default function GlobalStyle() {
  return <Global styles={globalStyle} />
}
