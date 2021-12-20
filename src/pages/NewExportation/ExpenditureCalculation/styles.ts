import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 40px;
`;

export const FormFormik = styled(Form)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const WrapperContainerValues = styled.div`
  width: 100%;
  display: flex;

  margin-bottom: 1.625rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerValues = styled.div`
  width: 70%;
  background: #fbfcff;
  padding: 10px;
  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ItemShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding-right: 2rem;
  border-right: 1px solid #3751fe1a;

  &:last-child {
    border: none;
  }
`;

export const Item = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  color: #2b367499;
`;

export const ItemValue = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  color: #2b3674cc;
`;

export const WrapperTotal = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;
`;

export const Total = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  color: #3751fe99;
`;

export const TotalValue = styled.h1`
  font-size: 1.938rem;
  font-weight: 700;
  color: #3751fe;
`;

export const Title = styled.div`
  width: 100%;
  color: #2b3674e5;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;

  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
