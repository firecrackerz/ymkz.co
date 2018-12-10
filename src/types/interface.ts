export interface Values {
  name: string
  email: string
  message: string
}

export interface Payload extends Values {
  [key: string]: string
  'form-name': 'contact'
}
