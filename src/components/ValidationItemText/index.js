import React from 'react'
import { ItemWrapper } from './style'

const ValidationItemText = ({ text }) => {
  return (
    <ItemWrapper>
      <div className="dot"></div>
      {text}
    </ItemWrapper>
  )
}

export { ValidationItemText }
