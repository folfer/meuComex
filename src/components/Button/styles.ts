import styled from "styled-components";

interface Props {
  backgroundColor: string;
  borderRadius: string;
}

export const Container = styled.button<Props>`
  width: 11.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ borderRadius }) => borderRadius}px;

  padding: 0.625rem 1.875rem;

  background: ${({ backgroundColor }) => backgroundColor};

  margin-bottom: 0.625rem;

  align-self: flex-end;

  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

interface TextProps {
  color: string;
}

export const Text = styled.strong<TextProps>`
  font-size: 0.875rem;
  color: ${({ color }) => color};

  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
