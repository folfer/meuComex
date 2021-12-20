import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  margin-bottom: 0.625rem;
  a {
    width: 100%;
    padding: 0.75rem 0.375rem 0.875rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.625rem;
    color: #2B3674;
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  &:hover {
    a {
      color: #FFFFFF;
    }
    background: #2B3674;
    border-radius: 0.313rem;
  }
`;