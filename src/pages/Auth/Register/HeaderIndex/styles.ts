import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #fefefe;

  .RSPBprogressBar,
  .RSPBprogression {
    border-radius: 0px !important;
  }
`;

export const FirstSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 16px 20px;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  opacity: 0.6;
`;

export const WrapperProgress = styled.div`
  border-radius: 50%;

  background: rgba(55, 81, 254, 0.29);

  padding: 7px;
`;

export const BorderProgress = styled.div`
  width: 4.563rem;
  height: 4.563rem;
  border-radius: 50%;

  background: #3751fe;
  border: 5px solid #3751fe;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextProgress = styled.strong`
  font-weight: bold;
  font-size: 0.907rem;

  text-align: center;

  color: #fefefe;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-left: 10px;
`;

export const RegisterText = styled.strong`
  font-weight: 500;
  font-size: 0.68rem;

  color: rgba(43, 54, 116, 0.7);
`;

export const FinishText = styled.strong`
  font-weight: bold;
  font-size: 0.875rem;

  color: rgba(43, 54, 116, 0.7);
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
`;
