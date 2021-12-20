import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 40px;

  .MuiFormControlLabel-root {
    color: #3751fe;
    font-weight: bold;
  }

  .MuiTypography-root {
    font-weight: bold;
  }

  .MuiFormLabel-root {
    font-weight: 500;
    font-size: 0.875rem;

    color: #2b3674;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;

  color: #2b3674;

  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;

  color: #2b3674;
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

  border-radius: 8px;

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

export const WrapperFormControl = styled.div`
  padding: 20px 30px;
  background: #ffffff;
  border: 1px solid #dce3f2;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 10px !important;
  margin-top: 5px !important;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:first-child {
    margin-left: 0px !important;
  }

  @media (max-width: 768px) {
    max-width: 250px;

    &:last-child {
      margin-left: 0px !important;
    }
  }
`;

export const Emoji = styled.img`
  width: 30px;
  height: 30px;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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
    width: 100%;
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

export const WrapperLabel = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 20px;
`;
