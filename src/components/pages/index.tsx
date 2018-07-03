import * as React from 'react'
import Loadable from 'react-loadable'
import Loading from 'src/components/templates/Loading'

export const About = Loadable({
  loader: () => import('src/components/pages/About'),
  loading: () => <Loading />
})

export const Act = Loadable({
  loader: () => import('src/components/pages/Act'),
  loading: () => <Loading />
})

export const Work = Loadable({
  loader: () => import('src/components/pages/Work'),
  loading: () => <Loading />
})
