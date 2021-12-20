import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export const WrapperTitle = styled.div`
  width: 100%;
  gap: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  width: 6.563rem;
  height: 6.563rem;
  border-radius: 50%;

  background: #3751fe;
  border: 0.313rem solid #3751fe;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperContainer = styled.div`
  border-radius: 50%;

  background: #3751fea1;

  padding: 0.438rem;
`;

export const Image = styled.img`
  width: 47.82px;
  height: 36.9px;
`;
export const Title = styled.h2`
  font-size: 2rem;
  color: #2b3674;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  color: #2241ee;
  margin-bottom: -0.562rem;
  align-self: flex-start;
`;

export const Input = styled.input`
  font-size: 0.875rem;
  font-weight: 500;
  color: #2b3674;
  opacity: 60%;
  width: 100%;
  max-width: 340px;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.5rem;
  border: 1px solid #dce3f2;

  &:focus {
    border: 0.063rem solid #2241ee;
  }
`;
