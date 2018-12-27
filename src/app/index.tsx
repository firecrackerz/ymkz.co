import * as Navi from 'navi'
import * as React from 'react'
import * as ReactNavi from 'react-navi'
import Header from '../components/modules/Header'
import NotFound from '../pages/NotFound'

export default function App({ navigation }: { navigation: Navi.Navigation }) {
  return (
    <ReactNavi.NavProvider navigation={navigation}>
      <Header />
      <ReactNavi.NavNotFoundBoundary render={NotFound}>
        <ReactNavi.NavContent />
      </ReactNavi.NavNotFoundBoundary>
    </ReactNavi.NavProvider>
  )
}
