import React, { useState, useEffect } from 'react'
import { FormWrapper } from './style'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { FormValidations } from '../FormValidations'
import { AlertBox } from '../AlertBox'

const PasswordForm = () => {
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [confirmationError, setConfirmationError] = useState(false)
  const [validationError, setValidationError] = useState(false)
  const validationRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

  useEffect(() => {
    if (password === passwordConfirmation && confirmationError) {
      setConfirmationError(false)
    }
  }, [password, passwordConfirmation, confirmationError])

  const handleSubmit = (e) => {
    e.preventDefault()

    confirmationError && setConfirmationError(false)
    validationError && setValidationError(false)

    if (password !== passwordConfirmation) {
      setConfirmationError(true)
      return
    }

    if (!password.match(validationRegex)) {
      setValidationError(true)
      return
    }

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
            error={validationError}
            helperText={
              validationError && 'Некорректный пароль, придумайте новый'
            }
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
            error={confirmationError}
            helperText={confirmationError && 'Пароли должны совпадать'}
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

        <button
          type="submit"
          className="submit-btn"
          disabled={confirmationError}
        >
          Подтвердить
        </button>
      </form>
    </FormWrapper>
  )
}

export { PasswordForm }
