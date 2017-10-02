import React from 'react'
import Responsive from 'react-responsive'

const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

export default Mobile
