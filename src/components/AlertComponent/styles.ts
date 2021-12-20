import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 333px;
  height: auto;
  padding: 20px 25px;
  max-height: 159px;
  background: var(--white-50);
  box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 16.13rem;
  }
`;

export const WrapperTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 768px) {
  }

  @media (min-width: 1080px) {
  }

  @media (min-width: 1333px) {
  }
`;

export const NumberOfAlerts = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #2b3674;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1080px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1333px) {
    font-size: 3rem;
  }
`;

export const Description = styled.h3`
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

export const WrapperContainer = styled.div`
  border-radius: 50%;

  background: #3751fea1;

  padding: 19px 24px;

  @media (min-width: 768px) {
    padding: 10px 14px;
  }

  @media (min-width: 1080px) {
    padding: 14px 19px;
  }

  @media (min-width: 1333px) {
    padding: 19px 24px;
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #3751fe;
  box-sizing: border-box;
  border: 5px solid #3751fe;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;

  }

  @media (min-width: 1080px) {
    width: 40px;
    height: 40px;

  }

  @media (min-width: 1333px) {
    width: 50px;
    height: 50px;

  }
`;

export const Image = styled.img`
  width: 1.063rem;
  height: 1.5rem;
  src: url(${(props) => props.src});
`;

export const WrapperIcon = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
