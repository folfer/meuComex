import React from "react";

import {
  Container,
  Description,
  Icon,
  NumberOfAlerts,
  Image,
  WrapperTitle,
  WrapperContainer,
  WrapperIcon,
} from "./styles";

interface AlertComponentProps {
  numberOfAlerts: number;
  description: string;
  imageSrc: string;
}

const AlertComponent: React.FC<AlertComponentProps> = ({
  numberOfAlerts,
  description,
  imageSrc,
}) => {
  return (
    <Container>
      <WrapperIcon>
        <Icon>
          <WrapperContainer>
            <Image src={imageSrc} alt="img" />
          </WrapperContainer>
        </Icon>
      </WrapperIcon>
      <WrapperTitle>
        <NumberOfAlerts>{numberOfAlerts}</NumberOfAlerts>
        <Description>{description}</Description>
      </WrapperTitle>
    </Container>
  );
};

export default AlertComponent;
