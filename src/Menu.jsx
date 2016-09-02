import React from 'react'
import { Link } from 'react-router'

import MenuItem from './MenuItem'

const styles = {
  menu: {
    padding: 0,
    listStyle: 'none'
  }
}

export default () => (
  <ul style={styles.menu}>
    <MenuItem path="/">Home</MenuItem>
    <MenuItem path="/music">Music</MenuItem>
    <MenuItem path="/shows">Shows</MenuItem>
    <MenuItem path="/press">Press</MenuItem>
    <MenuItem path="/contact">Contact</MenuItem>
  </ul>
)
