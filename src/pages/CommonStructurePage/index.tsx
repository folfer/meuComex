import React from "react";
import Sidebar from "../../components/Sidebar";

import { Container, Main } from "./styles";

const CommonStructurePage: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Main>{children}</Main>
    </Container>
  );
};

export default CommonStructurePage;
