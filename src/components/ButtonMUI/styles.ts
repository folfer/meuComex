import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  backgroundColor: string;
  color: string;
  paddingSides: number;
  paddingTopBottom: number;
}

export const Container = styled.div<Props>`
  .MuiButton-root {
    width: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor} !important;
    border-radius: 0.625rem;
    color: ${({ color }) => color} !important;
    font-weight: bold;
    font-family: "DM Sans", sans-serif;
    padding: ${({ paddingTopBottom }) => paddingTopBottom}px
      ${({ paddingSides }) => paddingSides}px;
    box-shadow: none;
  }
`;

export const ButtonLink = styled(Link)`
  width: 100%;
  background-color: #3751fe;
  border-radius: 0.625rem;
  color: #fff;
  font-weight: bold !important;
  font-family: "DM Sans", sans-serif !important;
  text-transform: uppercase !important;
  padding: 16px 40px;
  box-shadow: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  transition: all 0.8s;

  &:hover {
    opacity: 0.8s;
    transform: scale(0.9);
  }
`;
