import PropTypes from 'prop-types';

import { ErrorMessageStyle } from './styles';
import type { ReactNode } from 'react';

interface ErrorMessageProps {
  children: ReactNode
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <ErrorMessageStyle>{children}</ErrorMessageStyle>;
}

