import React from "react";
import { MdInfoOutline } from "react-icons/md";
import InformationButton from "../../InformationButton";

import {
  Body,
  Container,
  Header,
  OpenedOperationsContainer,
  OpenedOperationsTitle,
  OpenedOperationsValue,
  WrapperInformationButton,
  WrapperOperationsShell,
} from "./styles";

const LastOperationsShell: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <WrapperInformationButton>
          <InformationButton
            marginLeft={0}
            marginTop={0}
            marginBottom={0}
            marginRight={0}
            text="Et congue gravida mauris diam mauris pellentesque porttitor."
          />
        </WrapperInformationButton>
        <WrapperOperationsShell>
          <OpenedOperationsContainer>
            <OpenedOperationsTitle>
              Operações no último ano
            </OpenedOperationsTitle>
            <OpenedOperationsValue>USD 682,5</OpenedOperationsValue>
          </OpenedOperationsContainer>
        </WrapperOperationsShell>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default LastOperationsShell;
