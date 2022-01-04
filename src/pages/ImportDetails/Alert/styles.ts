import styled from "styled-components";

export const Container = styled.div`
  padding: 25.5px 24.5px;
  height: 90%;

  background: #ffffff;
  border: 1px solid #dce3f2;
  box-sizing: border-box;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 10px;
  border-bottom: 1px solid rgba(102, 102, 102, 0.1);
  margin-bottom: 20px;
`;

export const ContentTitle = styled.div`
  width: 50%;

  font-size: 1.8rem;
  font-weight: 700;
  color: #2b3674;
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 920px) {
    flex-direction: column;
    gap: 2px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const BoxTitle = styled.h1`
  font-weight: bold;
  font-size: 1rem;
  color: rgba(43, 54, 116, 0.8);
`;

interface BoxStatusProps {
  backgroundColor: string;
}

export const BoxStatus = styled.div<BoxStatusProps>`
  padding: 2px 25px;

  color: #fff;
  font-weight: 500;
  font-size: 0.875rem;

  background: ${({ backgroundColor }) => backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
`;

export const BoxText = styled.h1`
  font-weight: 400;
  font-size: 0.875rem;

  color: #2b3674b2;
`;
