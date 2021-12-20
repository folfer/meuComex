import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 333px;
  height: auto;
  max-height: 159px;
  background: var(--white-50);
  box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    height: 16.13rem;
  }
`;

export const WrapperHeader = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface ButtonProps {
  signalColor: string;
  signalBackground: string;
}
export const Button = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.125rem 0.625rem 0.125rem 0.25rem;
  font-weight: 700;
  color: ${({ signalColor }) => signalColor};
  background: ${({ signalBackground }) => signalBackground};
  border-radius: 30px;
`;

export const Image = styled.img`
  width: 5.813rem;
  height: 2.438rem;
`;

export const WrapperMoney = styled.div`
  padding: 1rem;
`;

export const Money = styled.h1`
  font-weight: 700;
  font-size: 1.938rem;
  color: #2b3674;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1080px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1333px) {
    font-size: 1.938rem;
  }
`;

export const MoneyDescription = styled.h3`
  color: #2b3674;
  opacity: 80%;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1080px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1333px) {
    font-size: 1.2rem;
  }
`;
