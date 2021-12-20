import styled from "styled-components";

interface PropsContainer {
  backgroundColor: string;
  borderColor: string;
}

export const Container = styled.div<PropsContainer>`
  width: 100%;

  padding: 10px 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px solid ${({ borderColor }) => borderColor};

  gap: 5px;

  border-radius: 8px;
`;

interface PropsText {
  color: string;
}

export const Text = styled.strong<PropsText>`
  font-weight: 500;
  font-size: 0.875rem;

  color: ${({ color }) => color};
`;
