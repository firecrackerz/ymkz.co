import loadable from '@loadable/component'

export const Home = loadable(() =>
  import(/* webpackChunkName: "home", webpackPreload: true */ 'src/pages/Home')
)
export const About = loadable(() =>
  import(/* webpackChunkName: "about", webpackPreload: true */ 'src/pages/About')
)
export const Work = loadable(() =>
  import(/* webpackChunkName: "work", webpackPreload: true */ 'src/pages/Work')
)
export const NotFound = loadable(() =>
  import(/* webpackChunkName: "notfound", webpackPreload: true */ 'src/pages/NotFound')
)
