import styled from "styled-components";
import { Form } from "formik";

import { MdInfoOutline } from "react-icons/md";

interface Props {
  isExpand: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  height: calc(100vh - 50px);

  background: var(--background);

  padding: 0.875rem 4.375rem;

  overflow-y: auto;
  scrollbar-width: none;

  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding-bottom: 150px;
  }
`;

export const FormFormik = styled(Form)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  gap: 24px;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  margin-bottom: 1.125rem;
`;

export const Title = styled.h1`
  font-size: 2rem;

  color: #2b3674;
`;

export const Border = styled.div`
  height: 120px;
  border-left: 1px solid rgba(55, 81, 254, 0.4);
  opacity: 0.7;
  display: inline;
`;

export const Text = styled.strong`
  width: 90%;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;

  color: #216db3;
`;

export const Description = styled.strong<Props>`
  background: rgba(50, 152, 247, 0.2);
  border-radius: 12px;
  padding: 20px 25px;

  display: ${(props) => (props.isExpand ? "flex" : "none")};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const HeaderDescription = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const WrapperBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const WrapperText = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const WrapperButtons = styled.div`
  width: 30%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;

  gap: 1.25rem;
`;

export const WrapperTitleHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Routes = styled.strong`
  font-size: 0.75rem;
  font-weight: 500;

  color: rgba(55, 81, 254, 0.7);
`;

export const WrapperFirstSectionHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  min-width: 600px;
  max-width: 1200px;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: #ffffff;

  box-shadow: 4px 7px 32px rgba(43, 54, 116, 0.25);
  border-radius: 12px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  padding: 16px 32px;
  background: #ffffff;
  box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  border-radius: 12px;
`;

export const ContentHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 10px;
  border-bottom: 1px solid rgba(102, 102, 102, 0.1);
  margin-bottom: 20px;
`;

export const ContentTitle = styled.div`
  width: 50%;

  font-size: 1.8rem;
  font-weight: 700;
  color: #2b3674;
`;

export const OperationFlag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  padding: 2px 10px 2px 8px;

  color: #e01a1a;
  font-weight: 700;

  background: rgba(224, 26, 26, 0.15);
  border-radius: 30px;
`;

export const Item = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #2b367499;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AlertsRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputFileRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperRow = styled.div`
  width: 70%;
`;

export const WrapperTaxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;

export const WrapperScreen = styled.div`
  display: flex;
  flex-direction: column;

  gap: 7px;
`;

export const Screen = styled.div`
  width: 315px;
  height: 123px;

  background: rgba(244, 247, 254, 0.7);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScreenText = styled.h1`
  font-weight: 500;
  font-size: 2.125rem;
  color: #2b3674;
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
  width: 67%;
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

export const WrapperInputHalfSpace = styled.div`
  width: 50%;
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

export const WrapperInputFile = styled.div`
  width: 33%;

  display: flex;
  flex-direction: column;

  gap: 7px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OptionsInput = styled.option`
  background-color: #fefefefe;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
