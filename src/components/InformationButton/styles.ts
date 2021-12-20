import styled from 'styled-components';
import { MdInfoOutline } from 'react-icons/md';


interface Props {
  opened: boolean;
}

export const Container = styled.div`
  cursor: pointer;
`;

export const InformationContainer = styled.div<Props>`
  width: ${props => (props.opened ? '280px' : 0)};
  height: ${props => (props.opened ? '120px' : 0)};
  position: absolute;
  background: rgba(43, 54, 116, 0.8);
  box-shadow: -2px 8px 22px rgba(23, 22, 52, 0.18);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface PropButton {
  marginLeft: number;
  marginBottom: number;
  marginRight: number;
  marginTop: number;
  opened: boolean;
}

export const InfoButton = styled(MdInfoOutline) <PropButton>`
  width: 16px;
  height: 16px;
  margin-left: ${({ marginLeft }) => marginLeft}rem;
  margin-bottom: ${({ marginBottom }) => marginBottom}rem;
  margin-top: ${({ marginTop }) => marginTop}rem;
  margin-right: ${({ marginRight }) => marginRight}rem;

  color: ${props => (props.opened ? '#3751FE' : 'rgba(55, 81, 254, 0.6)')};
`;

export const InfoTwoButton = styled(MdInfoOutline) <Props>`
  display: ${props => (props.opened ? 'flex' : 'none')};
  min-width: 20px;
  min-height: 20px;
  color: #fff;

  margin-left: 15px;
`;

export const Text = styled.strong<Props>`
  display: ${props => (props.opened ? 'flex' : 'none')};
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  margin-right: 10px;

  color: #FFFFFF;
`;

export const Border = styled.div<Props>`
  height: 80%;
  display: ${props => (props.opened ? 'flex' : 'none')};

  border-left: 0.1px solid rgba(255, 255, 255, 0.1);
  margin-left: 10px;
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;