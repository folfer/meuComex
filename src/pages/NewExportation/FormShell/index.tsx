import React from "react";
import ButtonMUI from "../../../components/ButtonMUI";
import { useAuth } from "../../../hooks/useContext";

import {
  Body,
  Container,
  Footer,
  Header,
  Information,
  Steps,
  StepsContainer,
  StepsOf,
  Title,
  WrapperButtons,
} from "./styles";

interface FormShellProps {
  clickFunction: () => void;
}

const FormShell: React.FC<FormShellProps> = ({ children, clickFunction }) => {
  const { registerState, globalCount } = useAuth();

  return (
    <Container>
      <Header>
        <Title>{registerState}</Title>
        <StepsContainer>
          <StepsOf>Etapa {globalCount}</StepsOf>
          <Steps>de 10</Steps>
        </StepsContainer>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <Information>⚠️ Todos os campos são obrigatórios</Information>
        <WrapperButtons>
          {globalCount > 9 ? (
            <ButtonMUI
              color="#FFFFFF"
              backgroundColor="#3751FE"
              type="submit"
              text="Finalizar operação"
              paddingSides={60}
              paddingTopBottom={16}
              clickFunction={clickFunction}
              isLink={true}
              link="/"
            />
          ) : (
            <ButtonMUI
              color="#FFFFFF"
              backgroundColor="#3751FE"
              type="submit"
              text="Continuar"
              paddingSides={60}
              paddingTopBottom={16}
              clickFunction={clickFunction}
              isLink={false}
            />
          )}
        </WrapperButtons>
      </Footer>
    </Container>
  );
};

export default FormShell;
