import { FormikActions } from 'formik'
import { Payload, Values } from 'src/types/interface'

function encodePayloadToBody(data: Payload) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export function handleSubmit(values: Values, actions: FormikActions<Values>) {
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
