import React from "react";

import { Container } from "./styles";

interface Props {
  backgroundColor: string;
}

const ProductShell: React.FC<Props> = ({ backgroundColor, children }) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};

export default ProductShell;
