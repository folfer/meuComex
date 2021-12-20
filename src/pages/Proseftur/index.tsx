import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import { Container, ContentContainer, Title, Text } from "./styles";

const Proseftur: React.FC = () => {
  return (
    <Container>
      <NavBar imageText="Proseftur" />
      <ContentContainer>
        <Title>Lorem ipsum bolorsit amcon sectetur adetisca</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          amet dui cursus semper. Venenatis suspendisse pulvinar donec in
          commodo viverra neque egestas. Quis tincidunt faucibus lacus feugiat
          cras adipiscing velit eget. Diam eget faucibus fringilla turpis
          tristique lectus. Nunc scelerisque adipiscing cras non gravida semper.
        </Text>

        <Text>
          Cse pulvinar donec in commodo viverra neque egestas. Quis tincidunt
          faucibus lacus feugiat cras adipiscing velit eget. Diam eget faucibus
          fringilla turpis tristique lectus. Nunc scelerisque adipiscing cras
          non gravida semper. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Scelerisque amet dui cursus semper. Venenatis suspendisse
          pulvinar donec in commodo viverra neque egestas. Quis tincidunt
          faucibus lacus feugiat cras adipiscing velit eget. Diam eget faucibus
          fringilla turpis tristique lectus. Nunc scelerisque adipiscing cras
          non gravida semper.{" "}
        </Text>
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default Proseftur;
