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

export const InfoButton = styled(MdInfoOutline)`
  width: 20px;
  height: 20px;
  color: #3298f7;
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

export const ClosedButton = styled.button`
  width: 20px;
  height: 20px;
  color: #216db3;

  background: none;
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

export const WrapperHelperText = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 16px;
`;

export const HelperText = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;

  color: #2b3674;

  margin-right: 10px;
`;

export const WrapperFirstSectionHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  min-width: 700px;
  max-width: 1200px;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: #ffffff;

  box-shadow: 4px 7px 32px rgba(43, 54, 116, 0.25);
  border-radius: 12px;

  @media (max-width: 768px) {
    display: none;
  }
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

export const Box = styled.div`
  padding: 25.5px 24.5px;

  background: #ffffff;
  border: 1px solid #dce3f2;
  box-sizing: border-box;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxTitle = styled.h1`
  font-weight: bold;
  font-size: 1rem;
  color: rgba(43, 54, 116, 0.8);
`;

interface BoxStatusProps {
  backgroundColor: string;
}

export const BoxStatus = styled.div<BoxStatusProps>`
  padding: 2px 25px;

  color: #fff;
  font-weight: 500;
  font-size: 0.875rem;

  background: ${({ backgroundColor }) => backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
`;

export const BoxText = styled.h1`
  font-weight: 400;
  font-size: 0.875rem;

  color: #2b3674b2;
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

export const WrapperContainerValues = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin-top: 15px;
  margin-bottom: 1.625rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerValues = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.8rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ItemShell = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  padding-right: 2rem;
  border-right: 1px solid #3751fe1a;

  &:last-child {
    border: none;
  }
`;

export const IconContainer = styled.div`
  padding: 18px;
  color: #3751fe;
  background: rgba(55, 81, 254, 0.05);
  border-radius: 60px;
`;

export const Item = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #2b367499;
`;

export const ItemValue = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2b3674; ;
`;

export const AlertTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  font-weight: 500;
  font-size: 1rem;
  color: rgba(224, 26, 26, 0.4);
`;

export const AlertText = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: #e01a1a;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
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
`;

export const WrapperLabel = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 20px;
`;

export const SearchText = styled.p`
  font-weight: normal;
  font-size: 0.75rem;
  color: #3751fe;
  text-decoration-line: underline;
  margin-left: 5px;
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

export const OptionsInput = styled.option`
  background-color: #fefefefe;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
