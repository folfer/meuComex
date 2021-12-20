import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import { Ball, Container, Title, WrapperBall } from "./styles";

const DashboardProgressBar: React.FC = () => {
  return (
    <Container>
      <ProgressBar
        percent={20}
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
              <Title>10.000</Title>
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
              <Title>25.000</Title>
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
              <Title>50.000</Title>
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
              <Title>100.000</Title>
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
              <Title>150.000</Title>
            </WrapperBall>
          )}
        </Step>
      </ProgressBar>
    </Container>
  );
};

export default DashboardProgressBar;
