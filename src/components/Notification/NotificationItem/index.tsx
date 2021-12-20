import React from "react";

import {
  Container,
  Border,
  WrapperText,
  TitleNotification,
  TitleDescription,
} from "./styles";

interface Props {
  title: string;
  description: string;
}

const NotificationItem: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <Border />
      <WrapperText>
        <TitleNotification>{title}</TitleNotification>
        <TitleDescription>{description}</TitleDescription>
      </WrapperText>
    </Container>
  );
};

export default NotificationItem;
