import type { ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
}

