import React from 'react'

export const asyncComponentLoad = importComponent => {
  class AsyncComponent extends React.PureComponent {
    state = {
      component: null
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({ component })
    }

    render() {
      const Component = this.state.component
      return Component ? <Component {...this.props} /> : null
    }
  }

  return AsyncComponent
}
