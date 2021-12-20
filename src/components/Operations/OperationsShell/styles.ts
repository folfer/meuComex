import { MdInfoOutline } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: var(--white-50);
  box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  border-radius: 12px;

  padding: 1rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 16.13rem;
  }
`;

export const WrapperOperationsShell = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 30px;
`;

export const WrapperInformationButton = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;


export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InformationButton = styled(MdInfoOutline)`
  margin-bottom: 3rem;
  width: 1.5rem;
  height: 1.5rem;
  color: #3751FE;
  opacity: 60%;
`;

export const OpenedOperationsContainer = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0.625rem 2.5rem;

  background: var(--blue-250);
  opacity: 70%;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;

  @media(min-width: 768px) {
    width: 100%;
    padding: 1.8rem 0rem;
    height: 3rem;
  }

  @media(min-width: 996px) {
    height: 3.2rem;
    width: 100%;
  }

  @media(min-width: 1028px) {
    width: 100%;
    height: 3.5rem;
    padding: 30px 10px;
  }

  @media(min-width: 1300px) {
    width: 100%;
    padding: 30px 10px;
  }
`;

export const OpenedOperationsTitle = styled.h5`
  font-size: 0.70rem;
  font-weight: 500;
  color: var(--white-100);

  @media(min-width: 1080px) {
    font-size: 0.75rem;
  }
`;

export const OpenedOperationsValue = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  color: var(--white-50);

 
  @media(min-width: 768px) {
    font-size: 1.25rem;
  }

  @media(min-width: 996px) {
    font-size: 1.7rem;
  }
`;

export const Body = styled.div`
  width: 80%;

  margin-top: 1.875rem;
`;
