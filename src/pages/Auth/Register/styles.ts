import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  scrollbar-width: none;

  background: #f4f7fe;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 700px;
  max-width: 1100px;
  height: calc(100vh - 120px);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #f4f7fe;

  gap: 40px;

  padding: 1.25rem;
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

export const WrapperContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  scrollbar-width: none;
`;
