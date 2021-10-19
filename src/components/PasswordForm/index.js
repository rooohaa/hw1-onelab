import React, { useState } from 'react'
import { FormWrapper } from './style'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { FormValidations } from '../FormValidations'
import { AlertBox } from '../AlertBox'

const PasswordForm = () => {
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = { password, passwordConfirmation }
    console.log(data)

    resetForm()
  }

  const resetForm = () => {
    setPassword('')
    setPasswordConfirmation('')
  }

  return (
    <FormWrapper>
      <Typography variant="h4" align="center">
        Пароль
      </Typography>
      <span className="form-heading">Придумайте новый пароль</span>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            size="small"
            fullWidth
            label="Придумайте пароль"
            required
            InputProps={{
              style: {
                color: '#333',
                borderRadius: '10px',
                borderColor: '#e6e6f0',
              },
            }}
            InputLabelProps={{
              style: {
                color: '#8c90b3',
                fontSize: '14px',
              },
            }}
          />
        </div>

        <div className="form-control">
          <TextField
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
            size="small"
            fullWidth
            label="Повторите пароль"
            required
            InputProps={{
              style: {
                color: '#333',
                borderRadius: '10px',
                borderColor: '#e6e6f0',
              },
            }}
            InputLabelProps={{
              style: {
                color: '#8c90b3',
                fontSize: '14px',
              },
            }}
          />
        </div>

        <FormValidations />

        <AlertBox
          message="Введенный пароль будет являться паролем для выпущенной ЭЦП. Заполните
          введенные данные!"
        />

        <button type="submit" className="submit-btn">
          Подтвердить
        </button>
      </form>
    </FormWrapper>
  )
}

export { PasswordForm }
