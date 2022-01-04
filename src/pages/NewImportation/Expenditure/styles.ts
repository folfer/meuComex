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
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 8px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 1rem;

  color: rgba(43, 54, 116, 1);

  margin-bottom: 10px;
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

export const WrapperInputByTwo = styled.div`
  width: 25%;
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

export const AddBranch = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px dashed #3751fe;
  color: #3751fe;

  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;

  font-weight: bold;

  background: #ebeeff;

  transition: all 0.2s;

  &:hover {
    border: 2px solid #3751fe;
    transform: scale(0.98);
  }
`;

export const AddBranchTwo = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px dashed #3751fe;
  color: #3751fe;

  padding: 10px;
  border-radius: 10px;
  margin-bottom: -3px;

  font-weight: bold;

  background: #ebeeff;

  transition: all 0.2s;

  &:hover {
    border: 2px solid #3751fe;
    transform: scale(0.98);
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

export const LabelForInput = styled.label`
  font-weight: 500;
  font-size: 0.875rem;

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
  font-size: 0.875rem;
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
