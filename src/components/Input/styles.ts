import styled, { css } from "styled-components";

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  padding-bottom: 16px;

  span {
    background: transparent;
    &.error {
      position: absolute;
      bottom: 0;
      right: 0;
      color: #ffff;
      font-size: 10px;
      text-align: right;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 12px;

    color: rgba(43, 54, 116, 0.8);
  }

  label {
    margin-top: 8px;
    display: flex;
    border: 1px solid #dce3f2;
    border-radius: 8px;
    overflow: hidden;

    input {
      flex: 1;
      width: 100%;
      border: none;
      height: 40px;
      padding: 0 16px;

      color: #2b3674;
      background: transparent;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      ::-webkit-input-placeholder {
        color: #2b3674;
        opacity: 35%;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }

    textarea {
      flex: 1;
      width: 100%;
      border: none;
      height: 80px;
      resize: none;
      padding: 10px;

      color: #000;
      background: transparent;
    }

    select {
      flex: 1;
      width: 100%;
      border: none;
      height: 40px;
      padding: 0 10px;

      color: rgba(43, 54, 116, 0.8);
      background: #fefefefe;
      appearance: none;
    }

    .arrow-select {
      width: 40px;
      height: 40px;
      color: rgba(43, 54, 116, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      pointer-events: none;
    }

    > span {
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }

  ${({ isError }) =>
    isError &&
    css`
      label {
        border-color: #ff1010;
      }
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      h3 {
        color: #3751fe;
      }
      label {
        border-color: #3751fe;
      }
    `} /* ${({ isFilled }) =>
    isFilled &&
    css`
      h3 {
        color: #3751fe;
      }
    `} */
`;
