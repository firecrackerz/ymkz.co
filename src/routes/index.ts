import { lazy } from 'react'

export const Home = lazy(() =>
  import(/* webpackChunkName: "home" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  'src/pages/Home')
)
export const About = lazy(() =>
  import(/* webpackChunkName: "about" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  'src/pages/About')
)
export const Work = lazy(() =>
  import(/* webpackChunkName: "work" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  'src/pages/Work')
)
