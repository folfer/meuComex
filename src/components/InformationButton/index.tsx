import React, { useState } from "react";

import {
  Container,
  InfoButton,
  InformationContainer,
  Text,
  InfoTwoButton,
  Border,
  Wrapper,
} from "./styles";

interface Props {
  text: string;
  marginLeft: number;
  marginTop: number;
  marginBottom: number;
  marginRight: number;
}

const InformationButton: React.FC<Props> = ({
  text,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <InfoButton
        opened={isOpen}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        marginBottom={marginBottom}
      />
      <InformationContainer opened={isOpen}>
        <InfoTwoButton opened={isOpen} />
        <Border opened={isOpen} />
        <Text opened={isOpen}>{text}</Text>
      </InformationContainer>
    </Container>
  );
};

export default InformationButton;
