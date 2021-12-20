import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  height: calc(100vh - 50px);

  background: var(--background);

  padding: 0.875rem 4.375rem;

  overflow-y: auto;
  scrollbar-width: none;

  @media (min-width: 768px) {
    padding: 0;
  }

  .MuiInputBase-input {
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
    border-radius: 0.5rem;
    height: 42px;
    color: #2b3674 !important;
    padding: 0 0.938rem;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 700px;
  max-width: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1.25rem;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  margin-bottom: 1.125rem;
`;

export const Title = styled.h1`
  font-size: 2rem;

  color: #2b3674;
`;

export const Description = styled.strong`
  font-weight: 500;
  font-size: 0.875rem;
  color: #707eae;
  align-self: flex-start;

  margin-bottom: 0.75rem;
`;

export const FirstSection = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  gap: 1.5rem;
`;

export const Filter = styled.div`
  margin-top: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2b3674;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

export const Image = styled.img``;

export const Routes = styled.strong`
  font-size: 0.75rem;
  font-weight: 500;

  color: rgba(55, 81, 254, 0.7);
`;
