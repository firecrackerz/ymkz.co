import { FormikActions } from 'formik'
import { Payload, Values } from '../types'

export function encodePayloadToBody(data: Payload): string {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export function handleSubmitContact(values: Values, actions: FormikActions<Values>) {
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodePayloadToBody({ 'form-name': 'contact', ...values })
  }

  fetch('/', request)
    .then(() => {
      alert('Thank you for your contact')
      actions.resetForm()
      actions.setSubmitting(false)
    })
    .catch(error => {
      alert('Unexpected error has occurred')
      console.error(error)
    })
}

// import { useEffect, useState } from 'react'
// export function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth)
//   useEffect(
//     () => {
//       const handleResize = () => setWidth(window.innerWidth)
//       window.addEventListener('resize', handleResize)
//       return () => window.removeEventListener('resize', handleResize)
//     },
//     [width]
//   )
//   return width
// }
