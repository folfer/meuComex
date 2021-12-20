import styled from "styled-components";
import { Form } from "formik";
import Modal from "react-modal";

export const ModalReact = styled(Modal)`
  min-width: 600px;

  @media (min-width: 768px) {
    min-width: 700px;
    margin-left: 130px;
  }
  @media (min-width: 1300px) {
    min-width: 900px;
    margin-left: 250px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

interface WrapperTitleProps {
  textAlign: string;
}

export const WrapperTitle = styled.div<WrapperTitleProps>`
  width: 100%;
  gap: 1rem;
  text-align: ${({ textAlign }) => textAlign};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

interface PropsIcon {
  requisitionColor: string;
}

export const IconContainer = styled.div<PropsIcon>`
  width: 6.563rem;
  height: 6.563rem;
  border-radius: 50%;

  background: ${({ requisitionColor }) => requisitionColor};
  border: 5px solid ${({ requisitionColor }) => requisitionColor};
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperContainer = styled.div<PropsIcon>`
  border-radius: 50%;

  background: ${({ requisitionColor }) => requisitionColor}a1;

  padding: 7px;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
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
