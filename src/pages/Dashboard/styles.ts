import { MdInfoOutline } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  scrollbar-width: none;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 700px;
  max-width: 1000px;
  height: calc(100vh - 50px); 

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1.25rem;

`;
export const FirstImageProduct = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 1.125rem;
`;

export const SecondImageProduct = styled.img`
  width: 5.469rem;
  height: 2.469rem;
`;

export const WrapperButtons = styled.div`
  width: 30%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;

  gap: 1.25rem;
`;

export const WrapperText = styled.div`
  width: 70%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.125rem;
  color: #2B3674;

  align-self: flex-start;
`;

export const Description = styled.strong`
  font-weight: 500;
  font-size: 0.875rem;
  color: #707EAE;
  align-self: flex-start;

  margin-bottom: 12px;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3.125rem;
`;

export const FirstSection = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  @media (min-width: 1080px) {
    gap: 24px;
  }
  @media (min-width: 1333px) {
    gap: 24px;
  }
`;


export const SecondSection = styled.div`
  width: 100%;

  padding: 0.8rem 1.25rem;

  background: #FFFFFF;
  box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const WrapperProgressBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const InformationButton = styled(MdInfoOutline)`
  margin-left: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  color: #3751FE;
  opacity: 60%;
`;

export const TitleSectionSection = styled.h4`
  font-weight: bold;
  font-size: 1.25rem;

  color: var(--blue-200);

  align-self: flex-start;
  margin-left: 0.75rem;
`;
