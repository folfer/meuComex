import styled from "styled-components";

export const Container = styled.div`
  width: 306px;
  height: 402px;

  padding: 32px 40px;

  background: #fff;
  box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Title = styled.div`
  color: #2b3674;
  font-size: 2rem;
  font-weight: 700;

  display: flex;
  justify-content: flex-start;
`;

export const WrapperValue = styled.div`
  font-weight: 700;
  font-size: 35px;
  color: #3751fe;

  display: flex;
  align-items: center;

  gap: 0.5rem;
`;

export const Value = styled.h1`
  font-weight: 700;
  font-size: 33px;
  color: #3751fe;
`;

export const TextValue = styled.h1`
  font-size: 14px;
  color: #3751fe;
  opacity: 51%;
`;

export const Text = styled.h1`
  display: flex;
  justify-content: flex-start;
  color: #2b3674;
  font-size: 14px;
  font-weight: 500;
  opacity: 70%;

  margin-left: -9px;
  margin-bottom: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  margin-bottom: 35px;
`;

export const FormText = styled.h1`
  font-weight: 500;
  font-size: 14px;
  color: #465053;
`;
