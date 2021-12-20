import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #f4f7fe;
`;

export const ContentContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const WrapperTitle = styled.div`
  width: 80%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;
  border-left: 17px solid #3751fe;
`;

export const Title = styled.div`
  font-size: 2.813rem;
  font-weight: 700;
  color: #2b3674;

  margin-left: 2rem;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.875rem;
`;
export const Text = styled.div`
  font-size: 1.313rem;
  font-weight: 400;
  color: #2b3674;

  margin-top: 3.5rem;
`;

export const TextWhite = styled.div`
  font-size: 1.625rem;
  font-weight: 700;
  color: #2b3674;

  background: #fff;
  border-radius: 0.75rem;

  padding: 2.188rem 3.125rem;
`;

export const CarouselContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 120px;
`;
