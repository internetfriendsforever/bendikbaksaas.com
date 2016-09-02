import React from 'react'
import { Link } from 'react-router'
import MeasureIt from 'react-measure-it'

import MenuItem from './MenuItem'

const styles = {
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 0,
    margin: 0,
    listStyle: 'none',
    zIndex: 10
  }
}

export default () => (
  <ul style={styles.menu}>
    <MenuItem path="/music">Music</MenuItem>
    <MenuItem path="/shows">Shows</MenuItem>
    <MenuItem path="/press">Press</MenuItem>
    <MenuItem path="/contact">Contact</MenuItem>
  </ul>
)
