import React from "react";

import { Container, Text } from "./styles";

interface Props {
  backgroundColor: string;
  color: string;
  borderRadius: string;
  text: string;
  clickFunction: () => void;
}

const Button: React.FC<Props> = ({
  backgroundColor,
  color,
  borderRadius,
  text,
  clickFunction,
}) => {
  return (
    <Container
      onClick={() => clickFunction()}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >
      <Text color={color}>{text}</Text>
    </Container>
  );
};

export default Button;
