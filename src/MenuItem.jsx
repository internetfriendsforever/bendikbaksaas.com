import React from 'react'
import { Link } from 'react-router'

const styles = {
  item: {
    padding: 0,
    float: 'left'
  },

  link: {
    display: 'block',
    textDecoration: 'none',
    padding: '1em'
  }
}

export default props => (
  <li style={styles.item}>
    <Link style={styles.link} to={props.path}>
      {props.children}
    </Link>
  </li>
)
