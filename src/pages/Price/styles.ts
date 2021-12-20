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
  height: auto;
  margin: 0 auto;

  text-align: center;
`;

export const Title = styled.div`
  font-size: 2.813rem;
  font-weight: 700;
  color: #2b3674;
`;

export const Text = styled.div`
  font-size: 1.313rem;
  font-weight: 400;
  color: #2b3674;

  margin-top: 56px;
`;

export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;

  margin-top: 56px;
`;

export const WrapperCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 65px;
  gap: 2rem;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
