import loadable from 'loadable-components'
import * as React from 'react'
import { Redirect } from 'react-router-dom'

export const About = loadable(() => import('src/components/pages/About'))
export const Act = loadable(() => import('src/components/pages/Act'))
export const Work = loadable(() => import('src/components/pages/Work'))
export const NotFoundRedirectToRoot = () => <Redirect to="/" />
