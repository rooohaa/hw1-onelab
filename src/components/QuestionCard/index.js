import React from 'react'
import { QuestionCardBox } from './style'

const QuestionCard = ({ question, answer }) => {
  return (
    <QuestionCardBox>
      <img src="/icons/secret_q.svg" alt="Question icon" />
      <span>{question}</span>
      <p>{answer}</p>
    </QuestionCardBox>
  )
}

export { QuestionCard }
