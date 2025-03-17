import type { InputHTMLAttributes } from 'react'
import { Container } from './styles'
import type { FieldError } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  placeholder: string
  ref: React.RefCallback<HTMLInputElement>
  error?: FieldError
}

export function TextInput({
  ref,
  type,
  placeholder,
  error,
  ...rest
}: InputProps) {
  return (
    <Container>
      <input type={type} placeholder={placeholder} ref={ref} {...rest} />
      <span>{error?.message}</span>
    </Container>
  )
}
