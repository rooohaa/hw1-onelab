import React from 'react'
import { Container } from '@mui/material'
import { QuestionCard } from 'components/QuestionCard'
import { questions } from './mock'
import { QuestionsWrap } from './style'

const QuestionsSection = () => {
  return (
    <QuestionsWrap>
      <Container maxWidth="lg">
        <div className="questions-wrap">
          {questions.map(({ id, question, answer }) => (
            <QuestionCard key={id} question={question} answer={answer} />
          ))}
        </div>
      </Container>
    </QuestionsWrap>
  )
}

export { QuestionsSection }
