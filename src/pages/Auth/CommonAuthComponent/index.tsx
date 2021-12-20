import React from "react";

import { Container, ChargerImg, InputsContainer, NavBar, Text } from "./styles";

const CommonAuthComponent: React.FC = ({ children }) => {
  return (
    <Container>
      <InputsContainer>{children}</InputsContainer>
      <ChargerImg>
        <NavBar>
          <Text to="/">Login</Text>
          <Text to="/about">Sobre</Text>
          <Text to="/proseftur">Proseftur</Text>
          <Text to="/price">Preço</Text>
        </NavBar>
      </ChargerImg>
    </Container>
  );
};

export default CommonAuthComponent;
