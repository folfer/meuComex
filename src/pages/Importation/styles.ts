import styled from "styled-components";

import { MdInfoOutline } from "react-icons/md";

interface Props {
  isExpand: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  height: calc(100vh - 50px);

  background: var(--background);

  padding: 0.875rem 4.375rem;

  overflow-y: auto;
  scrollbar-width: none;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  margin-bottom: 1.125rem;
`;

export const Title = styled.h1`
  font-size: 2rem;

  color: #2b3674;
`;

export const InfoButton = styled(MdInfoOutline)`
  width: 20px;
  height: 20px;
  color: #3298f7;
`;

export const Border = styled.div`
  height: 120px;
  border-left: 1px solid rgba(55, 81, 254, 0.4);
  opacity: 0.7;
  display: inline;
`;

export const Text = styled.strong`
  width: 90%;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;

  color: #216db3;
`;

export const Description = styled.strong<Props>`
  background: rgba(50, 152, 247, 0.2);
  border-radius: 12px;
  padding: 20px 25px;

  display: ${(props) => (props.isExpand ? "flex" : "none")};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const HeaderDescription = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const WrapperBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ClosedButton = styled.button`
  width: 20px;
  height: 20px;
  color: #216db3;

  background: none;
`;

export const WrapperText = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const WrapperButtons = styled.div`
  width: 30%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;

  gap: 1.25rem;
`;

export const WrapperTitleHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Routes = styled.strong`
  font-size: 0.75rem;
  font-weight: 500;

  color: rgba(55, 81, 254, 0.7);
`;

export const WrapperHelperText = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 16px;
`;

export const HelperText = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;

  color: #2b3674;

  margin-right: 10px;
`;

export const WrapperFirstSectionHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
