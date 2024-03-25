import PropTypes from 'prop-types';
import React from 'react';

import { ComponentButton } from './styles';

export function Button({ children }, ...rest) {
  return <ComponentButton {...rest}>{children}</ComponentButton>;
}

Button.propTypes = {
  children: PropTypes.string
};
