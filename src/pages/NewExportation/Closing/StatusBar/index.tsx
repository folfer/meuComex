import React from "react";

import { Container, Text } from "./styles";

interface StatusBarProps {
  backgroundColor: string;
  text: string;
  borderColor: string;
  color: string;
}

const StatusBar: React.FC<StatusBarProps> = ({
  children,
  backgroundColor,
  text,
  borderColor,
  color,
}) => {
  return (
    <Container backgroundColor={backgroundColor} borderColor={borderColor}>
      {children}
      <Text color={color}>{text}</Text>
    </Container>
  );
};

export default StatusBar;
