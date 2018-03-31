import { configure } from '@storybook/react'

function stories() {
  require('../src/stories')
}

configure(stories, module)
