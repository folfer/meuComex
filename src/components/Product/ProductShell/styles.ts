import styled from 'styled-components';

interface Props {
  backgroundColor: string;
}

export const Container = styled.div<Props>`
  width: 16.063rem;
  height: 6.063rem;
  border-radius: 1.25rem;
  padding: 1.25rem;
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;