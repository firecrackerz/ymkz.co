import loadable from 'loadable-components'

export const About = loadable(() => import(/* webpackChunkName: "about" */ 'src/pages/About'))
export const Work = loadable(() => import(/* webpackChunkName: "work" */ 'src/pages/Work'))
