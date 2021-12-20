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

  gap: 2.5rem;

  padding: 1.25rem;

  .MuiTypography-root,
  .MuiFormControlLabel-labelm .MuiTypography-body1 {
    font-weight: 500;
    font-size: 0.75rem;
    color: rgba(43, 54, 116, 0.8) !important;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 0.875rem;

  color: rgba(43, 54, 116, 0.5);

  margin-bottom: 1.25rem;
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

export const WrapperCheckBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  margin-bottom: 10px;
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

export const WrapperLabel = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 20px;
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

export const TitlePage = styled.h1`
  font-weight: bold;
  font-size: 2rem;

  align-self: flex-start;

  color: #2b3674;
`;
