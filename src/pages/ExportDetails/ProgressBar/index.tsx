import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Ball, Container, WrapperBall, Title } from "./styles";

interface Props {
  percent: number;
}

const ProgressBarImportDetails: React.FC<Props> = ({ percent }) => {
  return (
    <Container>
      <ProgressBar
        percent={percent}
        filledBackground="linear-gradient(to right, #3751FE, #3751FE, #3751FE)"
      >
        <Step transition="scale">
          {({ accomplished }: any) => (
            <WrapperBall>
              <Ball
                style={{
                  background: `${accomplished ? "#3751FE" : "#AFB8EF"}`,
                }}
              />
              <Title>Identificação</Title>
            </WrapperBall>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: any) => (
            <WrapperBall>
              <Ball
                style={{
                  background: `${accomplished ? "#3751FE" : "#AFB8EF"}`,
                }}
              />
              <Title>Embarque</Title>
            </WrapperBall>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: any) => (
            <WrapperBall>
              <Ball
                style={{
                  background: "#3751FE",
                }}
              />
              <Title>Desembarque</Title>
            </WrapperBall>
          )}
        </Step>
      </ProgressBar>
    </Container>
  );
};

export default ProgressBarImportDetails;
