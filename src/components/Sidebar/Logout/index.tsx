import React from "react";
import { IconType } from "react-icons";
import { Container } from "./styles";

interface Props {
  title: string;
  Icon: IconType;
  onClick: () => void;
}

const SimpleMenuItem: React.FC<Props> = ({ title, Icon, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon size={22} />
      <h3>{title}</h3>
    </Container>
  );
};

export default SimpleMenuItem;
