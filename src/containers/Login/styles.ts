import type { InputHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;

  img {
    padding: 1rem;
    border-radius: 1.25rem;
    width: 50vw;
    object-fit: cover;
  }
`
export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
`
export const LoginDetails = styled.div`
  text-align: center;

  h1 {
    font-size: 1.5rem;
    letter-spacing: -0.025em;
  }

  p {
    font-size: 0.875rem;
    color: gray;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = styled.input<InputProps>`
  width: 26rem;
  height: 2.5rem;
  padding-left: 0.5rem;
  border: 1px solid ${(props) => (props.error ? 'red' : 'gray')};
  border-radius: 0.25rem;
  font-size: 0.875rem;
  outline: none;
`
export const SingUp = styled(Link)`
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
