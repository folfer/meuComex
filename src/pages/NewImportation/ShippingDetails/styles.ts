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

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const WrapperInput = styled.div`
  width: 33%;
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
`;

export const WrapperInputTwoItens = styled.div`
  width: 68%;
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

export const WrapperInputThreeItens = styled.div`
  width: 52%;
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

export const WrapperInputCheck = styled.div`
  width: 33%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0;

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

export const WrapperLabel = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 20px;
`;

export const WrapperCheckBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const Text = styled.h1`
  font-weight: 500;
  font-size: 0.75rem;

  color: #2b3674;

  margin-bottom: 0.25rem;
`;

export const LabelForInput = styled.label`
  font-weight: 500;
  font-size: 0.75rem;

  color: rgba(43, 54, 116, 0.8);
  margin-bottom: 5px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fcfdff;

  border: 1px dashed #dce3f2;

  padding: 20px;
`;

export const InputFile = styled.input`
  display: none;
`;

export const SearchText = styled.p`
  font-weight: normal;
  font-size: 0.75rem;
  color: #3751fe;
  text-decoration-line: underline;
  margin-left: 5px;
`;

export const OptionsInput = styled.option`
  background-color: #fefefefe;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
