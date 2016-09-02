import React from 'react'
import { Link } from 'react-router'

export default () => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/music'>Music</Link></li>
    <li><Link to='/shows'>Shows</Link></li>
    <li><Link to='/press'>Press</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
  </ul>
)
