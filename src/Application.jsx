import React from 'react'

import Menu from './Menu'

const styles = {
  application: {
    position: 'relative'
  }
}

export default class Application extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  };

  componentDidMount () {
    console.log('Application mounted')
  }

  render () {
    return (
      <div style={styles.application}>
        <Menu />
        {this.props.children}
      </div>
    )
  }
}
