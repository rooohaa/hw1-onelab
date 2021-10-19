import React from 'react'
import { ValidationItemText } from '../ValidationItemText'
import { ValidationsWrap } from './style'
import { validations } from './mock'

const FormValidations = () => {
  return (
    <ValidationsWrap>
      <h5>Пароль должен содержать:</h5>
      <ul className="validations-list">
        {validations.map(({ id, text }) => (
          <ValidationItemText key={id.toString()} text={text} />
        ))}
      </ul>
    </ValidationsWrap>
  )
}

export { FormValidations }
