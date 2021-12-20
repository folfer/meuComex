import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;

  background: #E5E5E5;

  padding: 1.875rem 4.375rem;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3.125rem;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  color: #2B3674;

  margin-bottom: 1.25rem;


  align-self: flex-start;
`;

export const Description = styled.strong`
  font-weight: 500;
  font-size: 1.125rem;
  color: #0C0C0E;
  align-self: flex-start;

`;

export const WrapperText = styled.div`
  width: 70%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const WrapperButtons = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  align-self: flex-start;
  margin-top: 1.25rem;
`;