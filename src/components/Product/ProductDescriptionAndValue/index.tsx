import React from "react";

import { Container, Title, Value } from "./styles";

interface Props {
  value: string;
  valueColor: string;
  title: string;
  titleColor: string;
}

const ProductDescriptionAndValue: React.FC<Props> = ({
  value,
  title,
  valueColor,
  titleColor,
}) => {
  return (
    <Container>
      <Title titleColor={titleColor}>{title}</Title>
      <Value valueColor={valueColor}>{value}</Value>
    </Container>
  );
};

export default ProductDescriptionAndValue;
