import React from "react";

import { BoxHeader, BoxStatus, BoxText, BoxTitle, Container } from "./styles";

interface AlertProps {
  title: string;
  status: string;
  text: string;
}

const Alert: React.FC<AlertProps> = ({ title, status, text }) => {
  const defineStatusColor: any = {
    Liberada: "#028633",
    Aguardando: "#FDD817",
    Pendente: "#E01A1A",
  };

  return (
    <Container>
      <BoxHeader>
        <BoxTitle>{title}</BoxTitle>
        <BoxStatus backgroundColor={defineStatusColor[`${status}`]}>
          {status}
        </BoxStatus>
      </BoxHeader>
      <BoxText>{text}</BoxText>
    </Container>
  );
};

export default Alert;
