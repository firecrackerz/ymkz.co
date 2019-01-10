export interface Values {
  [key: string]: string
  name: string
  email: string
  message: string
}

export interface Payload extends Values {
  [key: string]: string
  'form-name': 'contact'
}
