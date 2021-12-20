import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  width: 996px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 40px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 760px;
  }
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperInput = styled.div`
  width: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;

  label {
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff !important;
    }
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const WrapperInputOneItens = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  label {
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff !important;
    }
  }
`;

export const FormFormik = styled(Form)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const WrapperCheckBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const OptionsInput = styled.option`
  background-color: #fefefefe;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
