import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  width: 100%;
  min-width: 700px;
  max-width: 1100px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 40px;

  padding: 1.25rem;

  .MuiTypography-root {
    font-weight: 500;
    font-size: 0.75rem;
    color: rgba(43, 54, 116, 0.8);
  }

  .MuiFormLabel-root {
    font-weight: 700;
    font-size: 0.75rem;
    color: rgba(43, 54, 116, 0.8);
  }

  .PrivateSwitchBase-input {
    margin-right: 0.5rem;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;

  align-self: flex-start;

  color: #2b3674;
`;

export const Description = styled.h5`
  font-weight: 500;
  font-size: 1.125rem;

  align-self: flex-start;

  color: rgba(43, 54, 116, 0.8);
`;

export const Copyright = styled.p`
  font-weight: bold;
  font-size: 0.75rem;

  color: rgba(43, 54, 116, 0.7);
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInput = styled.div`
  width: 32%;
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

export const Label = styled.p`
  font-weight: 500;
  font-size: 0.75rem;

  color: rgba(43, 54, 116, 0.8);
`;

export const FormFormik = styled(Form)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const OptionsInput = styled.option`
  background-color: #fefefefe;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const TitleRadio = styled.h5`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 16px;

  color: rgba(43, 54, 116, 0.8);
`;

export const InputRadio = styled.input`
  width: 20px;
  height: 20px;
  background: rgba(43, 54, 116, 0.6);
`;

export const LabelRadio = styled.label`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 20px;

  color: rgba(43, 54, 116, 0.8);
`;

export const WrapperLabel = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 20px;
`;

export const WrapperInputLabel = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 20px;

  margin-top: 10px;
`;

export const JustifyInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const WrapperInputTwoItens = styled.div`
  width: 49%;
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

export const AddBranch = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 500;

  border: 2px dashed #3751fe;
  color: #3751fe;

  padding: 20px;
  border-radius: 10px;

  background: #ebeeff;

  transition: all 0.2s;

  margin-top: 10px;

  &:hover {
    border: 2px solid #3751fe;
    transform: scale(0.98);
  }
`;

export const WrapperCheckBox = styled.div`
  margin-bottom: 10px;
`;

export const TitlePage = styled.h1`
  font-weight: bold;
  font-size: 2rem;

  align-self: flex-start;

  color: #2b3674;
`;
