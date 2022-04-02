import React, { useState } from 'react';
import { Container, Title } from './styles';

export const Button = ({ title, onPress, titleProps, ...rest }) => {
  const [color, setColor] = useState('#fff');

  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <Title style={{ color: color }} {...titleProps}>
        {title}
      </Title>
    </Container>
  );
};
