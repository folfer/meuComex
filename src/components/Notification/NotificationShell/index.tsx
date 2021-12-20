import React from "react";

import {
  Container,
  Title,
  WrapperNotifications,
  SeeAllButton,
  Text,
  WrapperHeader,
} from "./styles";

import { MdNavigateNext, MdInfoOutline } from "react-icons/md";
import InformationButton from "../../InformationButton";

interface NotificationsShellProps {
  title: string;
}

const NotificationsShell: React.FC<NotificationsShellProps> = ({
  title,
  children,
}) => {
  return (
    <Container>
      <WrapperHeader>
        <Title>{title}</Title>
        <InformationButton
          text="Et congue gravida mauris diam mauris pellentesque porttitor."
          marginLeft={0}
          marginTop={0.5}
          marginBottom={0}
          marginRight={0}
        />
        <Text>
          Ver todos
          <MdNavigateNext color="#3751FE;" size={16} />
        </Text>
      </WrapperHeader>
      <WrapperNotifications>{children}</WrapperNotifications>
      <SeeAllButton />
    </Container>
  );
};

export default NotificationsShell;
