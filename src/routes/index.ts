import * as Navi from 'navi'

export default Navi.createSwitch({
  paths: {
    '/': Navi.createPage({
      title: 'Home - YMKZ',
      getContent: () => import('../pages/Home')
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
