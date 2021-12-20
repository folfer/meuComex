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

export const WrapperLabel = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 20px;
`;

export const WrapperTitles = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const Subtitle = styled.h1`
  font-weight: 500;
  font-size: 0.75rem;

  color: rgba(43, 54, 116, 0.4);

  margin-top: 2px;
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
  text-align: center;
  word-break: break-all;

  background-color: #fcfdff;

  border: 1px dashed #dce3f2;

  padding: 10px;
`;

export const SearchText = styled.p`
  font-weight: normal;
  font-size: 0.75rem;
  color: #3751fe;
  text-decoration-line: underline;
  margin-left: 5px;
`;

export const InputFile = styled.input`
  display: none;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;

  padding-top: 10px;
  padding-bottom: 10px;

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
