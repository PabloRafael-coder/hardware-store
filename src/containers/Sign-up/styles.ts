import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SignUpContainer = styled.div`
  display: flex;
  height: 100vh;

  img {
    padding: 1rem;
    border-radius: 1.25rem;
    width: 50vw;
    object-fit: cover;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  gap: 1rem;

  p {
    font-size: 0.875rem;
    color: gray;
    max-width: 21rem;
    text-align: center;
  }

  a {
    text-underline-position: under;
    color: #000;
  }
`

export const SignUpDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    letter-spacing: -0.025em;
  }

  p {
    font-size: 0.875rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    width: 100%;
  }

  h1 {
    margin-bottom: 0;
    color: #00bfff;
  }
`

export const Label = styled.label`
  display: block;
`

interface InputProps {
  error?: string
}

export const Input = styled.input<InputProps>`
  padding-left: 20px;
  width: 25vw;
  height: 40px;
  outline: none;
  border: ${(props) => (props.error ? '2px solid #ff0000' : 'none')};
  border-radius: 5px;
  font-size: 16px;
  background-color: rgb(240, 240, 240);
`

export const Text = styled.p`
  margin-top: 20px;
  font-weight: 300;

  a {
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
  }
`

export const ErrorMessage = styled.p`
  margin-top: 3px;
  font-weight: 500;
  font-size: 15px;
  color: #ff0000;
`

export const NavSignUp = styled(Link)`
  position: absolute;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  top: 2rem;
  right: 2rem;

  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  background-color: rgb(230, 230, 230);
  color: #000;

  &:hover {
    transition: background-color 2s;
    background-color: rgb(199, 199, 199);
  }
`
