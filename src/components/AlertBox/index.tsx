import React, { useEffect, useState } from "react";

import { Container, Title, Description, Status } from "./styles";

interface Props {
  title: string;
  description: string;
  status: string;
}

const AlertBox: React.FC<Props> = ({ title, description, status }) => {
  const [defineColor, setDefineColor] = useState<any>("");

  useEffect(() => {
    if (
      status === "pendente" ||
      status === "iniciada" ||
      status === "em aberto"
    ) {
      setDefineColor("#E01A1A");
    } else if (
      status === "concluído" ||
      status === "on time" ||
      status === "liberada"
    ) {
      setDefineColor("#01C449");
    } else if (status === "aguardando") {
      setDefineColor("#EAD32E");
    }
  }, [status]);

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Status color={defineColor}>{status.toUpperCase()}</Status>
    </Container>
  );
};

export default AlertBox;
