import styled from 'styled-components';


export const Container = styled.div`
  height: 0.75rem;
  width: 100%;

  padding: 3.75rem 2.5rem;

  .RSPBprogressBar {
    background-color: #385682 !important;
    height: 0.938rem;
  }

  .RSPBstep {
    &:first-child {
      left: 20% !important;
    }
    &:nth-child(3) {
      left: 80% !important;
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
  font-weight: normal;
  margin-bottom: 0.625rem;

`;
export const Ball = styled.div`
  width: 1.875rem;
  height: 1.875rem;

  border-radius: 1.563rem;

  margin-bottom: 1.563rem;
`;