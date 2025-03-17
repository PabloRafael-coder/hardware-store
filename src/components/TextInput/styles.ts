import styled from 'styled-components'

interface TextInputProps {
  error?: string
}

export const Container = styled.div<TextInputProps>`
  display: flex;
  flex-direction: column;

  input {
    width: 30rem;
    height: 2.5rem;
    padding-left: 0.5rem;
    border: 1px solid ${(props) => (props.error ? 'red' : 'gray')};
    border-radius: 0.25rem;
    font-size: 0.875rem;
    outline: none;
  }

  span {
    height: 1.2rem;
    font-size: 0.875rem;
    color: red;
  }
`
