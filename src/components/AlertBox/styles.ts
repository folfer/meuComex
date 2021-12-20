import styled from 'styled-components';

export const Container = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 1.563rem;

  padding: 1.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.875rem;
`;

export const Title = styled.strong`
  font-weight: bold;
  font-size: 0.938rem;
  text-align: center;

  color: rgba(0, 0, 0, 0.61);
`;

export const Description = styled.p`
  font-weight: normal;
  font-size: 0.625rem;
  text-align: center;

  color: #979797;
`;

interface Props {
  color: string;
}

export const Status = styled.h1<Props>`
  font-weight: bold;
  font-size: 1.375rem;

  color: ${({ color }) => color};
`;
