import styled from 'styled-components';

export const Container = styled.button`
  width: 70%;
  display: flex;

  background: #F4F7FE;
  transition: all 0.3s;
  margin-bottom: 20px;
  padding: 0.75rem 0.375rem 0.875rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;
  color: #2B3674B2 70%;
  border-radius: 0.313rem;
  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  &:hover {
    color: #FFFFFF;
    background: #2B3674;
  }
`;