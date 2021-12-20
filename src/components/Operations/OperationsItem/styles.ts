import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.938rem;
`;

export const WrapperFirstSection = styled.div`
  width: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperSecondSection = styled.div`
  width: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperFirstSectionText = styled.div`
  width: 30%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-left: 8px;
`;

export const WrapperSecondSectionText = styled.div`
  width: 30%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-left: 8px;
`;

export const WrapperIcon = styled.div`
  padding: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3.125rem;

  background: var(--purple-50);

`;

export const TitleStatus = styled.strong`
  font-weight: 700;
  font-size: 0.85rem;

  color: var(--grey-50);
  opacity: 80%;

  @media (min-width: 1080px) {
    font-size: 1rem;
  }
`;

export const DateStatus = styled.strong`
  font-weight: 500;
  font-size: 0.65rem;

  color: var(--grey-100);

  @media (min-width: 1080px) {
    font-size: 0.75rem;
  }
`;

export const Value = styled.strong`
  font-weight: bold;
  font-size: 1rem;

  color: var(--blue-200);

  @media (min-width: 1080px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1333px) {
    font-size: 1.5rem;
  }
`;

