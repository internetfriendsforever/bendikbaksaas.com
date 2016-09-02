import React from 'react'
import { Text } from 'flatpack-js'

export default props => (
  <div>
    <Text path={`music/${props.id}/name`} placeholder='Track title' />
  </div>
)
