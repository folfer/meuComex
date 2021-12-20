import React from "react";
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
  title: string;
}

const FormShellCommodity: React.FC<FormShellProps> = ({
  children,
  clickFunction,
  title,
}) => {
  const { registerState, globalCount } = useAuth();

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <StepsContainer></StepsContainer>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <Information>⚠️ Todos os campos são obrigatórios</Information>
        <WrapperButtons>
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

export default FormShellCommodity;
