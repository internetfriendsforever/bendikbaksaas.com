import React from 'react'
import { List } from 'flatpack-js'

import MusicListItem from './MusicListItem'

export default () => (
  <List path="music">
    {item => <MusicListItem {...item} />}
  </List>
)
