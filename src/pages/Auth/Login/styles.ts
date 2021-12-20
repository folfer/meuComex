import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1.125rem;

  .MuiCheckbox-colorSecondary.Mui-checked {
    color: var(--blue-50);
  }

  .MuiFilledInput-root {
    background: #FFFFFF;
    border: 0.063rem solid #C1BBBB;
    box-sizing: border-box;
    border-radius: 0.625rem;
    color: var(--blue-50);;
    font-weight: 500 !important;
    transition: all 0.3s;


    &:before {
      border-bottom: 0;
    }
  }

  .MuiInputBase-formControl {
    &:hover {
      margin-left: 0.313rem;
      border-left: 0.188rem solid #0C31F1;
    }
  }
`;

export const InputLogin = styled.input`
  width: 100%;
  height: 2rem;

  border: 0;
  box-sizing: border-box;

  &:focus {
   border-left: 0.188rem solid #0C31F1;

   ::placeholder {
    margin-bottom: 0.313rem; 
  }
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.61);
    opacity: 1;
  }
`;

export const WelcomeText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: var(--blue-50);


  @media (min-width: 1500px) {
    font-size: 2.5rem;
  }
`;

export const LoginOptions = styled.div`
  width: 103%;
  margin-left: -3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 100%;

  margin-bottom: 2.25rem;
`;

export const DescriptionText = styled.h5`
  font-size: 1rem;
  line-height: 1.438rem;
  color:  rgba(0, 0, 0, 0.6);

  margin-bottom: 0.375rem;

  @media (min-width: 1300px) {
    margin-bottom: 2.375rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 10px;

  margin-top: 0.25rem;
`;

export const ButtonRegister = styled(Link)`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 0.625rem;
  background: #FFFFFF;
  border: 0.063rem solid var(--blue-50);
  color: var(--blue-50);
  transition: all 0.3s;
`;

export const RememberContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RememberText = styled.p`
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.61);
`;

export const ForgotPasswordText = styled.button`
  background: none;
  font-size: 0.875rem;
  color: var(--blue-50);
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 0.625rem;
  background: var(--blue-50);;
  color: #FFFFFF;
  transition: all 0.3s;
`;