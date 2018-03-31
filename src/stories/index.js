import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'
import Header from '../components/organisms/Header'
import Icon from '../components/atoms/Icon'
import Label from '../components/atoms/Label'
import '../injectStyle'
import portfolio1 from '../images/portfolio1.jpg'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
))

storiesOf('Header', module).add('header', () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
))

storiesOf('Atoms', module).add('Icon', () => (
  <Icon
    href="https://github.com/ymkz"
    image={portfolio1}
    onClick={action('clicked')}
  />
))

storiesOf('Atoms', module).add('Label', () => <Label>label</Label>)
