// import React from 'react'
// import { useForm, useField } from 'react-final-form-hooks'
// import { FormApi } from 'final-form'
// import Content from '../abstracts/content'
// import Title from '../elements/title'
// import Label from '../elements/label'
// import Input from '../elements/input'
// import Textarea from '../elements/textarea'

// interface Values {
//   name: string
//   email: string
//   message: string
// }

// interface Payload extends Values {
//   [key: string]: string
//   'form-name': 'contact'
// }

// function encodePayloadToBody(data: Payload): string {
//   return Object.keys(data)
//     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
//     .join('&')
// }

// async function onSubmit(values: object, form: FormApi) {
//   console.log('submit', values)
//   const request = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: encodePayloadToBody({ 'form-name': 'contact', ...values })
//   }

//   fetch('/', request)
//     .then(() => {
//       alert('Thank you for your contact')
//       form.reset()
//     })
//     .catch(error => {
//       alert('Unexpected error has occurred')
//       console.error(error)
//     })
// }

// export default function Contact() {
//   const { form, handleSubmit, pristine, submitting } = useForm({ onSubmit })
//   const name = useField('name', form)
//   const email = useField('email', form)
//   const message = useField('message', form)

//   return (
//     <Content>
//       <Title>CONTACT</Title>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <Label htmlFor={name.input.name}>Name</Label>
//           <Input id={name.input.name} placeholder="John Doe" {...name.input} />
//           {name.meta.touched && name.meta.error && <span>{name.meta.error}</span>}
//         </div>
//         <div>
//           <Label htmlFor={email.input.name}>E-mail</Label>
//           <Input id={email.input.name} placeholder="john.doe@example.com" {...email.input} />
//           {email.meta.touched && email.meta.error && <span>{email.meta.error}</span>}
//         </div>
//         <div>
//           <Label htmlFor={message.input.name}>Message</Label>
//           <Textarea
//             id={message.input.name}
//             rows={8}
//             placeholder="What you want to tell me"
//             {...message.input}
//           />
//           {message.meta.touched && message.meta.error && <span>{message.meta.error}</span>}
//         </div>
//         <button type="submit" disabled={pristine || submitting}>
//           Submit
//         </button>
//       </form>
//     </Content>
//   )
// }
