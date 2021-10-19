import React from 'react'
import { AlertWrap } from './style'

const AlertBox = ({ message }) => {
  return (
    <AlertWrap>
      <img src="/icons/alert.svg" alt="Alert icon" />
      <div>
        <p>{message}</p>
      </div>
    </AlertWrap>
  )
}

export { AlertBox }
