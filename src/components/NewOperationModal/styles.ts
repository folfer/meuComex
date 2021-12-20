import styled from 'styled-components';

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
export const Title = styled.h2`
  font-size: 2rem;
  color: #2B3674;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.188rem;
  font-weight: 500;
  color: #2B3674;
  opacity: 70%;
  max-width: 314px;
  margin-bottom: 0.813rem;
`;

export const Label = styled.label`
  color: #2241EE;
  margin-bottom: -0.562rem;
  align-self: flex-start;
`;

export const Input = styled.input`
  font-size: 0.875rem;
  font-weight: 500;
  color: #2B3674;
  opacity: 60%;
  width: 100%;
  max-width: 340px;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.5rem;
  border: 1px solid #DCE3F2;

  &:focus {
    border: 1px solid #2241EE;
  }
`;

