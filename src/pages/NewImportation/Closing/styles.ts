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
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 0.875rem;

  color: #2b3674;

  margin-bottom: 10px;
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

export const AddBranch = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px dashed #3751fe;
  color: #3751fe;

  padding: 20px;
  border-radius: 10px;

  font-weight: bold;

  background: #ebeeff;

  transition: all 0.2s;

  margin-bottom: 10px;

  &:hover {
    border: 2px solid #3751fe;
    transform: scale(0.98);
  }
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

export const WrapperPlus = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(55, 81, 254, 0.2);

  border: 2px solid #3751fe;
  border-radius: 50px;
`;

export const WrapperInput = styled.div`
  width: 32%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  label {
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff !important;
    }
  }
`;

export const WrapperInputFull = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  label {
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff !important;
    }
  }
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
