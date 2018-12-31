import { Payload } from '../../types'
import { encodePayloadToBody } from '../functions'

const validPayload: Payload = {
  'form-name': 'contact',
  name: 'name',
  email: 'email',
  message: 'message'
}

it('returned URI query string if pass payload object', () => {
  expect(encodePayloadToBody(validPayload)).toBeTruthy()
})
