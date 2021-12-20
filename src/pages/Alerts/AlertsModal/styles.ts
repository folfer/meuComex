import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  width: 534px;
  height: 710px;

  background-color: #fff;
  .react-modal-alerts {
    width: 100%;
    max-width: 534px;
    height: 100%;
    max-height: 710px;
    background-color: #fff;
    padding: 3rem;
    position: relative;
    border-radius: 0.75rem;

    box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  }

  .MuiSlider-rail {
    background-color: rgba(55, 81, 254, 0.2);
  }

  .MuiSlider-root {
    height: 8px;
  }

  .MuiSlider-track {
    background: rgba(55, 81, 254, 0.9);
  }
`;

export const FormFormik = styled(Form)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const HeaderText = styled.div`
  width: 100%;
  height: 56.74px;

  font-size: 14px;
  font-weight: 700;
  color: #2b3674;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  border: solid 1px rgba(102, 102, 102, 0.1);
`;

export const WrapperContent = styled.div`
  padding: 0 1.625rem;

  display: flex;
  flex-direction: column;

  margin-top: 15px;
`;

export const Title = styled.h1`
  font-style: "DM-Sans";
  font-weight: 500;
  font-size: 14px;

  padding-top: 10px;
  padding-bottom: 10px;

  color: #2b3674;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
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

export const Option = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: rgba(55, 81, 254, 0.05);

  border: 1px solid #3751fe;
  border-radius: 8px;
  box-sizing: border-box;

  padding: 0.5rem 2.2rem;

  font-size: 14px;
  font-weight: 500;
  color: #3751fe;

  &:hover {
    background: #3751fe;
    color: #fff;
  }

`;

export const OptionSelect = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #3751fe;

  border: 1px solid #3751fe;
  border-radius: 8px;
  box-sizing: border-box;

  padding: 0.5rem 2.2rem;

  font-size: 14px;
  font-weight: 500;
  color: #fff;

  &:hover {
    background: #fff;
    color: #3751fe;
  }
`;


export const WrapperInputByTwo = styled.div`
  width: 48%;
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

export const Button = styled.button`
  padding: 0.875rem 0;

  background: #3751fe;

  border-radius: 8px;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;
