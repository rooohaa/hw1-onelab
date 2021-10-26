import styled from 'styled-components'

export const AppButton = styled.button`
  padding: 14px 32px;

  background-color: ${(props) =>
    props.variant === 'light' ? '#fff' : '#1e2a41'};
  border: none;
  border-radius: 4px;

  font-size: 16px;
  line-height: 16px;
  color: ${(props) => (props.variant === 'light' ? '#9D2550' : '#fff')};
`
