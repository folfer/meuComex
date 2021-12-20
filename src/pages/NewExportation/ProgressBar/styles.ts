import styled from 'styled-components';


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
      left: 5% !important;
    }
    &:nth-child(2) {
      left: 15% !important;
    }
    &:nth-child(3) {
      left: 25% !important;
    }
    &:nth-child(4) {
      left: 35% !important;
    }
    &:nth-child(5) {
      left: 45% !important;
    }
    &:nth-child(6) {
      left: 55% !important;
    }
    &:nth-child(7) {
      left: 65% !important;
    }
    &:nth-child(8) {
      left: 75% !important;
    }
    &:nth-child(9) {
      left: 85% !important;
    }
    &:nth-child(10) {
      left: 95% !important;
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

export const Title = styled.h5`
  font-size: 1rem;
  color:  #385682;
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