import React from 'react';
import { Container } from './styles';

export const Input = ({
  autoCapitalize = 'none',
  placeholder,
  keyboardType,
  ...rest
}) => {
  return (
    <Container
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
      keyboardType={keyboardType}
      {...rest}
    />
  );
};
