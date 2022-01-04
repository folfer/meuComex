import styled from "styled-components";

export const Container = styled.div``;

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

export const OperationFlag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  padding: 2px 10px 2px 8px;

  color: #e01a1a;
  font-weight: 700;

  background: rgba(224, 26, 26, 0.15);
  border-radius: 30px;
`;

export const WrapperContainerValues = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin-top: 15px;
  margin-bottom: 1.625rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerValues = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.8rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 980px) {
    width: 100% !important;
    flex-direction: column;
    align-items: center;
  }
`;

export const IconContainer = styled.div`
  padding: 18px;
  color: #3751fe;
  background: rgba(55, 81, 254, 0.05);
  border-radius: 60px;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ItemShell = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  padding-right: 2rem;
  border-right: 1px solid #3751fe1a;

  &:last-child {
    border: none;
  }

  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const Item = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #2b367499;
`;

export const ItemValue = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2b3674; ;
`;

export const AlertTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  font-weight: 500;
  font-size: 1rem;
  color: rgba(224, 26, 26, 0.4);
`;

export const AlertText = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: #e01a1a;
`;
