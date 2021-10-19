import React from 'react'
import { Container } from './sc/Container'
import { PageTitle } from './sc/PageTitle'
import { MainWrap } from './sc/MainWrap'
import { PasswordForm } from './components/PasswordForm'

const App = () => {
  return (
    <MainWrap>
      <Container>
        <PageTitle>Проверка пароля</PageTitle>
        <PasswordForm />
      </Container>
    </MainWrap>
  )
}

export default App
