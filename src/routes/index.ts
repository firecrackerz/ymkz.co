import * as Navi from 'navi'
import Home from '../pages/Home'

export default Navi.createSwitch({
  paths: {
    '/': Navi.createPage({
      title: 'YMKZ',
      content: Home
    }),
    '/about': Navi.createPage({
      title: 'About - YMKZ',
      getContent: () => import('../pages/About')
    }),
    '/work': Navi.createPage({
      title: 'Work - YMKZ',
      getContent: () => import('../pages/Work')
    })
  }
})
