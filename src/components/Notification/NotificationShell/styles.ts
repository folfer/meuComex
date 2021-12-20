import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: #FFFFFF;
  padding: 1.375rem 1.75rem 1.375rem 1.75rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  border-radius: 12px;

  @media(min-width: 996px) {
    height: 12.719rem;
  }

  @media(min-width: 768px) {
    height: 16.13rem;
  }
`;

export const WrapperHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.875rem;
`;


export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.125rem;

  color: var(--blue-200);


  @media(min-width: 768px) {
    font-size: 1rem;
  }

  @media(min-width: 996px) {
    font-size: 1.8rem;
  }
`;

export const WrapperNotifications = styled.div`
  width: 100%;
  height: auto;
  overflow-y: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const SeeAllButton = styled.button`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  align-self: flex-end;

  color: var(--blue-100);
  background: var(--white-50);


  margin-top: 0.625rem;
`;

export const Text = styled.button`
  color: #3751FE;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;

  margin-left: 2rem;
  margin-right: 0.449rem;
  background: var(--white-50);

  transition: all 0.8s;

  &:hover {
    opacity: 0.4;
  }

  @media(min-width: 768px) {
    font-size: 0.7rem;
  }

`;