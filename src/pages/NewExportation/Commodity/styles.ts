import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 700px;
  max-width: 1100px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 40px;

  .MuiFilledInput-root {
    background: #ffffff;
    border: 0.063rem solid #c1bbbb;
    box-sizing: border-box;
    border-radius: 0.625rem;
    color: var(--blue-50);
    font-weight: 500 !important;
    transition: all 0.3s;

    &:before {
      border-bottom: 0;
    }
  }

  .MuiTypography-root {
    font-weight: 500;
    font-size: 0.75rem;
    color: rgba(43, 54, 116, 0.8);
  }

  .MuiFormLabel-root {
    font-weight: 700;
    font-size: 0.75rem;
    color: rgba(43, 54, 116, 0.8);
  }

  .PrivateSwitchBase-input {
    margin-right: 0.5rem;
  }
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 5px;

  label {
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff !important;
    }
  }
`;

export const FormFormik = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
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
  font-size: 1.125rem;
  font-weight: 500;

  border: 2px dashed #3751fe;
  color: #3751fe;

  padding: 20px;
  border-radius: 10px;

  background: #ebeeff;

  transition: all 0.2s;

  margin-top: 10px;

  &:hover {
    border: 2px solid #3751fe;
    transform: scale(0.98);
  }
`;

export const CommodityContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background: #fbfcff;

  padding: 20px;
  border-radius: 8px;
`;

export const CommodityHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  border-bottom: 1px solid rgba(55, 81, 254, 0.03);
`;

export const CommodityWrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommodityTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;

  color: rgba(43, 54, 116, 0.9);
`;

export const CommodityFeedback = styled.p`
  padding: 5px;

  border-radius: 12px;

  background: #d6eae0;
  color: #028633;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 15px;
`;

export const CommodityWrapperDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CommodityButton = styled.button`
  background: none;

  padding: 10px;

  border-radius: 12px;

  transition: all 0.2s;

  &:hover {
    background: #3751fea1;

    > p {
      color: #fff;
    }
  }
`;

export const CommodityTitleButton = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #3751fea1;
`;

export const CommodityBody = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CommodityWrapperItemRow = styled.div`
  width: 15%;

  padding: 10px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  &:first-child {
    width: 30%;
  }

  border-right: 1px solid rgba(55, 81, 254, 0.1);
`;

export const CommodityDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;

  color: rgba(43, 54, 116, 0.6);
`;

export const CommodityValue = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;

  color: rgba(43, 54, 116, 0.8);
`;

export const CommodityValueP = styled.p`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;

  color: rgba(43, 54, 116, 0.8);
`;

export const LabelSearch = styled.label`
  font-weight: 500;
  font-size: 0.75rem;

  color: rgba(43, 54, 116, 0.8);

  opacity: 80%;
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #dce3f2;
  box-sizing: border-box;
  border-radius: 8px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: red;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: red;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: red;
  }
`;
