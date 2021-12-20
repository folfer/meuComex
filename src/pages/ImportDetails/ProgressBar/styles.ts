import styled from "styled-components";

export const Container = styled.div`
  height: 0.75rem;
  width: 100%;

  padding: 2rem 1rem 3.75rem 1rem;

  .RSPBprogressBar {
    background-color: rgba(55, 81, 254, 0.2) !important;
    height: 0.65rem;
  }

  .RSPBstep {
    &:first-child {
      left: 10% !important;
    }
    &:nth-child(2) {
      left: 50% !important;
    }
    &:nth-child(3) {
      left: 90% !important;
    }
  }
`;

export const Fill = styled.span`
  padding: 0.313rem;
  color: white;
  font-weight: bold;
`;

export const WrapperBall = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1rem;
  color: #2b3674;
  opacity: 70%;
  font-weight: bold;
  margin-top: 0.625rem;
`;
export const Ball = styled.div`
  width: 1.875rem;
  height: 1.875rem;

  border-radius: 1.563rem;
  margin-top: 1.563rem;
`;
