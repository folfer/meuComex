import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #f4f7fe;

  display: flex;
  flex-direction: column;

  gap: 3.5rem;
`;

export const ContentContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;

  text-align: center;
`;

export const Title = styled.div`
  font-size: 2.813rem;
  font-weight: 700;
  color: #2b3674;

  margin-left: 2rem;
`;

export const Text = styled.div`
  font-size: 1.313rem;
  font-weight: 400;
  color: #2b3674;

  margin-top: 56px;
`;
