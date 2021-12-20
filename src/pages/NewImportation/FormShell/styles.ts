import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 0px 23px 0px 23px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #ffffff;
  box-shadow: 4px 7px 12px rgba(43, 54, 116, 0.25);
  border-radius: 12px;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 12px;
  padding-bottom: 12px;

  border-bottom: 1px solid rgba(102, 102, 102, 0.1);
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 0.875rem;

  color: #2b3674;
`;

export const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StepsOf = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 38px;

  color: rgba(43, 54, 116);
  opacity: 70%;
  margin-right: 4px;
`;

export const Steps = styled.p`
  font-size: 0.875rem;
  line-height: 38px;

  color: rgba(43, 54, 116, 0.7);
`;

export const Body = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Footer = styled.div`
  width: 100%;

  padding-top: 25px;
  padding-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid rgba(102, 102, 102, 0.1);
`;

export const WrapperButtons = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  @media (min-width: 1080px) {
    width: 50%;
    gap: 24px;
  }
`;

export const Information = styled.p`
  font-size: 0.875rem;

  color: rgba(43, 54, 116, 0.7);
`;
