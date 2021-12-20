import React from "react";
import { useHistory } from "react-router-dom";
import ButtonMUI from "../../../../components/ButtonMUI";
import { useAuth } from "../../../../hooks/useContext";

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

  const history = useHistory();

  return (
    <Container>
      <Header>
        <Title>{registerState}</Title>
        <StepsContainer>
          <StepsOf>Etapa {globalCount}</StepsOf>
          <Steps>de 7</Steps>
        </StepsContainer>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <Information>⚠️ Todos os campos são obrigatórios</Information>
        <WrapperButtons>
          <ButtonMUI
            color="#3751FE"
            backgroundColor="rgba(55, 81, 254, 0.05)"
            text="Sair"
            paddingSides={85}
            paddingTopBottom={16}
            clickFunction={() => history.push("/")}
            isLink={false}
          />
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
        </WrapperButtons>
      </Footer>
    </Container>
  );
};

export default FormShell;
