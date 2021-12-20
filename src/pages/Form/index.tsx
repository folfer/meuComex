import React from "react";
import Button from "../../components/Button";

import {
  Container,
  Title,
  Description,
  WrapperButtons,
  WrapperText,
  Header,
} from "./styles";

import SecondProgress from "../../components/SecondProgressBar";

const Form: React.FC = () => {
  return (
    <Container>
      <Header>
        <WrapperText>
          <Title>Formulário</Title>
          <Description>
            Non corporis architecto qui doloribus sapiente fugiat. Est aperiam
            deleniti rem tempore dolorem ad repellendus saepe ad ipsa quia sit
            maiores exercitationem. Non quia minima aut internos culpa et
            praesentium dicta aut officiis.
          </Description>
        </WrapperText>
        <WrapperButtons>
          <Button
            backgroundColor="#6AD2FF"
            color="#fff"
            borderRadius="20"
            text="Precisa de ajuda?"
            clickFunction={() => 0}
          />
        </WrapperButtons>
      </Header>
      <SecondProgress />
    </Container>
  );
};

export default Form;
