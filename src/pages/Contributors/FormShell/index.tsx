import React from "react";
import { FiX } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import ButtonMUI from "../../../components/ButtonMUI";
import { useAuth } from "../../../hooks/useContext";

import {
  Body,
  Container,
  Footer,
  Header,
  Information,
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
        <FiX size={20} />
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

export default FormShell;
