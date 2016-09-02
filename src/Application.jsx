import React from 'react'

import Menu from './Menu'

export default class Application extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  };

  componentDidMount () {
    console.log('Application mounted')
  }

  render () {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    )
  }
}
