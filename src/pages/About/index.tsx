import React from "react";
import NavBar from "../../components/NavBar";

import {
  Container,
  ContentContainer,
  Title,
  WrapperTitle,
  Text,
  TextWhite,
  TextContainer,
  CarouselContainer,
} from "./styles";

import Footer from "../../components/Footer";
import CarouselComponent from "../../components/CarouselComponent";

const About: React.FC = () => {
  return (
    <Container>
      <NavBar imageText="Sobre" />
      <ContentContainer>
        <WrapperTitle>
          <Title>Lorem ipsum bolorsit amcon sectetur adetisca</Title>
        </WrapperTitle>
        <TextContainer>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            amet dui cursus semper. Venenatis suspendisse pulvinar donec in
            commodo viverra neque egestas. Quis tincidunt faucibus lacus feugiat
            cras adipiscing velit eget. Diam eget faucibus fringilla turpis
            tristique lectus. Nunc scelerisque adipiscing cras non gravida
            semper.{" "}
          </Text>
          <TextWhite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit celerisque
            amet dui cursus semper. Venenatis suspendisse pulvinar donec in
            commodo viverra nequ.
          </TextWhite>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            amet dui cursus semper. Venenatis suspendisse pulvinar donec in
            commodo viverra neque egestas. Quis tincidunt faucibus lacus feugiat
            cras adipiscing velit eget. Diam eget faucibus fringilla turpis
            tristique lectus. Nunc scelerisque adipiscing cras non gravida
            semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque amet dui cursus semper. Venenatis suspendisse pulvinar
            donec in commodo viverra neque egestas. Quis tincidunt faucibus
            lacus feugiat cras adipiscing velit eget. Diam eget faucibus
            fringilla turpis tristique lectus. Nunc scelerisque adipiscing cras
            non gravida semper.{" "}
          </Text>
        </TextContainer>
      </ContentContainer>
      <CarouselContainer>
        <CarouselComponent />
      </CarouselContainer>
      <Footer />
    </Container>
  );
};

export default About;
