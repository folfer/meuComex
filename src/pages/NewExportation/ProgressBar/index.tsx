import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import { Ball, Container, Title, WrapperBall } from "./styles";

interface Props {
  percent: number;
}

const ProgressBarImportation: React.FC<Props> = ({ percent }) => {
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
              <Title>Exportador</Title>
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
              <Title>Mercadorias</Title>
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
              <Title>Despesas</Title>
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
              <Title>Cálculos</Title>
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
                  background: `${accomplished ? "#3751FE" : "#AFB8EF"}`,
                }}
              />
              <Title>Câmbio</Title>
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
              <Title>Transporte</Title>
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
              <Title>Registro</Title>
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
              <Title>Fechamento</Title>
            </WrapperBall>
          )}
        </Step>
      </ProgressBar>
    </Container>
  );
};

export default ProgressBarImportation;
