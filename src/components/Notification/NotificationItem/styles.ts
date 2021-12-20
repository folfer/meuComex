import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 0.75rem;

  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }
`;

export const Border = styled.div`
  height: 2.563rem;
  border-radius: 1rem;
  border: 0.125rem solid var(--blue-100);
  background: var(--blue-100);

  margin-right: 0.625rem;
`;

export const WrapperText = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-direction: column;
`;
export const TitleNotification = styled.h3`
  font-weight: bold;
  font-size: 0.8rem;
  color: var(--grey-50);

  @media(min-width: 768px) {
    font-size: 1rem;
  }
`;
export const TitleDescription = styled.strong`
  font-weight: 500;
  font-size: 0.50rem;
  color: var(--grey-100);

  @media(min-width: 768px) {
    font-size: 0.75rem;
  }
`;

