import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import { Ball, Container, Title, WrapperBall } from "./styles";

const SecondProgress: React.FC = () => {
  return (
    <Container>
      <ProgressBar
        percent={100}
        filledBackground="linear-gradient(to right, #5C43FF, #5C43FF, #5C43FF)"
      >
        <Step transition="scale">
          {({ accomplished }: any) => (
            <WrapperBall>
              <Title>Início operação</Title>
              <Ball
                style={{
                  background: `${accomplished ? "#5C43FF" : "#385682"}`,
                }}
              />
            </WrapperBall>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: any) => (
            <WrapperBall>
              <Title>Embarque</Title>
              <Ball
                style={{
                  background: `${accomplished ? "#5C43FF" : "#385682"}`,
                }}
              />
            </WrapperBall>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: any) => (
            <WrapperBall>
              <Title>Desembarque</Title>
              <Ball
                style={{
                  background: `${accomplished ? "#5C43FF" : "#385682"}`,
                }}
              />
            </WrapperBall>
          )}
        </Step>
      </ProgressBar>
    </Container>
  );
};

export default SecondProgress;
