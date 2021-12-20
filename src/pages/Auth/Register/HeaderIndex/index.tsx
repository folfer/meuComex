import React from "react";
import { ProgressBar } from "react-step-progress-bar";
import LogoMenu from "../../../../assets/logomenu.png";

import {
  Container,
  FirstSection,
  Logo,
  WrapperProgress,
  BorderProgress,
  TextProgress,
  LogoContainer,
  ProgressContainer,
  WrapperText,
  RegisterText,
  FinishText,
  ProgressBarContainer,
} from "./styles";

interface Props {
  percent: string;
}

const HeaderIndex: React.FC<Props> = ({ percent }) => {
  return (
    <Container>
      <FirstSection>
        <LogoContainer>
          <Logo src={LogoMenu} alt="Logo" />
        </LogoContainer>
        <ProgressContainer>
          <WrapperProgress>
            <BorderProgress>
              <TextProgress>{percent}%</TextProgress>
            </BorderProgress>
          </WrapperProgress>
          <WrapperText>
            <RegisterText>do cadastro</RegisterText>
            <FinishText>concluído</FinishText>
          </WrapperText>
        </ProgressContainer>
      </FirstSection>
      <ProgressBarContainer>
        <ProgressBar
          percent={percent}
          filledBackground="linear-gradient(to right, #3751FE, #3751FE, #3751FE)"
        />
      </ProgressBarContainer>
    </Container>
  );
};

export default HeaderIndex;
