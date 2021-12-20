import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

import {
  Container,
  DateStatus,
  TitleStatus,
  Value,
  WrapperFirstSection,
  WrapperFirstSectionText,
  WrapperIcon,
} from "./styles";

const OperationsItem: React.FC = () => {
  return (
    <Container>
      <WrapperFirstSection>
        <WrapperIcon>
          <MdOutlineShoppingCart color="#3751FE" size={13} />
        </WrapperIcon>
        <WrapperFirstSectionText>
          <TitleStatus>Importação</TitleStatus>
          <DateStatus>05/11/2021</DateStatus>
        </WrapperFirstSectionText>
      </WrapperFirstSection>
      <Value>$154,50</Value>
    </Container>
  );
};

export default OperationsItem;
