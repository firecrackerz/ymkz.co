// @flow
export type ImageProps = {
  src: string,
  border: boolean,
  landscape: boolean
}

export type LinkProps = {
  href: string,
  name: string
}

export type ContactPayload = {|
  name: string,
  email: string,
  message: string
|}

export type ContactBody = {|
  'form-name': 'contact',
  name: string,
  email: string,
  message: string
|}
