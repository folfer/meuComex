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
    font-family: "DM Sans", sans-serif !important;
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;

    color: #3751fe;
  }

  .MuiFormGroup-root {
    width: 100%;
    gap: 15px;
  }

  .MuiFormControl-root {
    width: 100%;
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

export const Title = styled.h1`
  font-weight: 500;
  font-size: 0.875rem;

  color: rgba(43, 54, 116, 0.5);

  margin-bottom: 20px;
`;

export const WrapperActivationBox = styled.div`
  width: 32%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #ffffff;
  border: 1px solid #dce3f2;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;
  gap: 15px;

  transition: all 0.2s;

  &:hover {
    border: 2px solid rgba(55, 81, 254, 0.6);
    transform: scale(1.1);
  }
`;

export const TitleActivation = styled.p`
  font-weight: normal;
  font-size: 0.875rem;

  color: rgba(43, 54, 116, 0.7);
`;

export const ValueActivation = styled.p`
  font-weight: 500;
  font-size: 0.875rem;

  color: #3751fe;
`;

export const DescriptionActivation = styled.p`
  font-weight: normal;
  font-size: 0.625rem;

  color: rgba(43, 54, 116, 0.7);
`;

export const Border = styled.p`
  width: 100%;
  border-bottom: 1px solid rgba(102, 102, 102, 0.1);
`;

export const WrapperCheckBox = styled.div`
  margin-top: 20px;
`;

export const TitlePage = styled.h1`
  font-weight: bold;
  font-size: 2rem;

  align-self: flex-start;

  color: #2b3674;
`;
