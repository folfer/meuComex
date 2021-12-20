import React, { useState } from "react";
import ButtonMUI from "../../components/ButtonMUI";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import {
  Container,
  ContentContainer,
  Title,
  Text,
  WrapperButton,
  WrapperCard,
} from "./styles";

const Price: React.FC = () => {
  const [year, setYear] = useState(false);
  const [mounth, setMounth] = useState(true);

  const handleChangeMounth = () => {
    setMounth(true);
    setYear(false);
  };

  const handleChangeYear = () => {
    setYear(true);
    setMounth(false);
  };

  return (
    <Container>
      <NavBar imageText="Preço" />
      <ContentContainer>
        <Title>Lorem ipsum bolorsit amcon sectetur adetisca</Title>
        <Text>Lorem ipsum bolorsit amcon sectetur adetiscaa 🤓</Text>
        <WrapperButton>
          <ButtonMUI
            color="#fff"
            backgroundColor="#3751FE"
            text="Mensal"
            paddingSides={45}
            paddingTopBottom={14}
            isLink={false}
            clickFunction={handleChangeMounth}
          />
          <ButtonMUI
            color="#3751FE"
            backgroundColor="#e1e7fe"
            text="Anual"
            paddingSides={45}
            paddingTopBottom={14}
            isLink={false}
            clickFunction={handleChangeYear}
          />
        </WrapperButton>
        {year && (
          <WrapperCard data-aos="fade-right">
            <Card
              title="Plano 1"
              value="000,00"
              date="Anual"
              text="Lorem ipsum sit amet, consectur adipiscing elit boladita es blandit"
              formTextOne="Lorem ipsum dita es blasit"
              formTextTwo="Lorem ipsum dita es blasit"
              formTextThree="Lorem ipsum dita es blasit"
            />
            <Card
              title="Plano 2"
              value="000,00"
              date="Anual"
              text="Lorem ipsum sit amet, consectur adipiscing elit boladita es blandit"
              formTextOne="Lorem ipsum dita es blasit"
              formTextTwo="Lorem ipsum dita es blasit"
              formTextThree="Lorem ipsum dita es blasit"
            />
            <Card
              title="Plano 3"
              value="000,00"
              date="Anual"
              text="Lorem ipsum sit amet, consectur adipiscing elit boladita es blandit"
              formTextOne="Lorem ipsum dita es blasit"
              formTextTwo="Lorem ipsum dita es blasit"
              formTextThree="Lorem ipsum dita es blasit"
            />
          </WrapperCard>
        )}
        {mounth && (
          <WrapperCard data-aos="fade-left">
            <Card
              title="Plano 1"
              value="000,00"
              date="Mês"
              text="Lorem ipsum sit amet, consectur adipiscing elit boladita es blandit"
              formTextOne="Lorem ipsum dita es blasit"
              formTextTwo="Lorem ipsum dita es blasit"
              formTextThree="Lorem ipsum dita es blasit"
            />
            <Card
              title="Plano 2"
              value="000,00"
              date="Mês"
              text="Lorem ipsum sit amet, consectur adipiscing elit boladita es blandit"
              formTextOne="Lorem ipsum dita es blasit"
              formTextTwo="Lorem ipsum dita es blasit"
              formTextThree="Lorem ipsum dita es blasit"
            />
            <Card
              title="Plano 3"
              value="000,00"
              date="Mês"
              text="Lorem ipsum sit amet, consectur adipiscing elit boladita es blandit"
              formTextOne="Lorem ipsum dita es blasit"
              formTextTwo="Lorem ipsum dita es blasit"
              formTextThree="Lorem ipsum dita es blasit"
            />
          </WrapperCard>
        )}
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default Price;
