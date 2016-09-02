import React from 'react'
import { Link } from 'react-router'

const styles = {
  item: {
    padding: 0
  }
}

export default props => (
  <li style={styles.item}>
    <Link to={props.path}>
      {props.children}
    </Link>
  </li>
)
