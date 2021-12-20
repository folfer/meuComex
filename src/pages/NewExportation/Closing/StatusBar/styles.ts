import styled from "styled-components";

interface PropsContainer {
  backgroundColor: string;
  borderColor: string;
}

export const Container = styled.div<PropsContainer>`
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 0.5px solid ${({ borderColor }) => borderColor};

  border-radius: 16px;

  gap: 5px;
`;

interface PropsText {
  color: string;
}

export const Text = styled.strong<PropsText>`
  font-weight: 500;
  font-size: 0.688rem;

  color: ${({ color }) => color};
`;
