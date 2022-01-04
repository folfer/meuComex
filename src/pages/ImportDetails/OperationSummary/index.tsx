import React from "react";
import {
  MdOutlineErrorOutline,
  MdOutlineShoppingCart,
  MdOutlineWarningAmber,
} from "react-icons/md";

import {
  AlertText,
  AlertTitle,
  Container,
  ContainerValues,
  ContentHeader,
  ContentTitle,
  IconContainer,
  Item,
  ItemShell,
  ItemValue,
  OperationFlag,
  Wrapper,
  WrapperContainerValues,
} from "./styles";

export const OperationSummary: React.FC = () => {
  return (
    <Container>
      <ContentHeader>
        <ContentTitle>Resumo da Operação</ContentTitle>
        <OperationFlag>
          <MdOutlineErrorOutline size={15} />
          Pendência Cambial
        </OperationFlag>
      </ContentHeader>
      <WrapperContainerValues>
        <ContainerValues>
          <Wrapper>
            <IconContainer>
              <MdOutlineShoppingCart size={20} />
            </IconContainer>
            <ItemShell>
              <Item>Número da operação</Item>
              <ItemValue>XY3595LAMB86</ItemValue>
            </ItemShell>
            <ItemShell>
              <Item>Nome da empresa</Item>
              <ItemValue>R$0.000,00</ItemValue>
            </ItemShell>
            <ItemShell>
              <Item>Número DI</Item>
              <ItemValue>00.000.000-00</ItemValue>
            </ItemShell>
            <ItemShell>
              <AlertTitle>
                <MdOutlineWarningAmber size={17} /> Alto risco de multa
              </AlertTitle>
              <AlertText>14 alertas em aberto</AlertText>
            </ItemShell>
          </Wrapper>
        </ContainerValues>
      </WrapperContainerValues>
    </Container>
  );
};

export default OperationSummary;
