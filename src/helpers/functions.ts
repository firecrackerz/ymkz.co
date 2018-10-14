import { Location, LocationDescriptor } from 'history'
import { match } from 'react-router-dom'

export const isActive = (to: LocationDescriptor) => (match: match, location: Location) => {
  if (match) {
    return true
  } else {
    return location.pathname === '/' && to === '/about'
  }
}
