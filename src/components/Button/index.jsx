import PropTypes from 'prop-types';
import React from 'react';

import { ButtonStyled } from './styles';

export function Button({ children, ...rest }) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}

Button.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.object
};
