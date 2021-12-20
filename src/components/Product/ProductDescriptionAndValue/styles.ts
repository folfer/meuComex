import styled from 'styled-components';

interface TitleProps {
  titleColor: string;
}

interface ValueProps {
  valueColor: string;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h5<TitleProps>`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${({ titleColor }) => titleColor};
`;

export const Value = styled.h1<ValueProps>`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ valueColor }) => valueColor};
`;