import styled from 'styled-components';

export const Container = styled.div<Props>`
  width: ${props => (props.expand ? '100vw' : 0)};
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.375rem;
  gap: 0.5rem;
  background: #FFFFFF;
  overflow-y: auto;
  z-index: 99;

  @media (min-width: 768px) {
    width: ${props => (props.expand ? '100vw' : 0)};
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.375rem;
    gap: 0.5rem;
    background: #FFFFFF;
    overflow-y: auto;
    z-index: 99;
  }

  @media (min-width: 1028px) {
    width: 290px;
    min-width: 250px;
    height: 100vh;
    position: relative;
  }
  
  transition: width 0.3s;
  .active-route {
    a {
      color: #FFFFFF;
    }
    color: #FFFFFF;
    background: #2B3674;
    border-radius: 0.313rem;
  }
`;

export const Logo = styled.img`
  width: 30%;
  margin-bottom: 2.813rem;
  opacity: 0.6;

  @media (min-width: 1028px) {
    width: 70%;
    margin-bottom: 2.813rem;
  }
`;

export const BorderBottom = styled.div`
  width: 72%;
  border: 1px solid rgba(102, 102, 102, 0.1);
  margin-bottom: 2rem;
`;

export const WrapperMenuItems = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 3.063rem;
`;

interface Props {
  expand: boolean;
}

export const MenuHamburger = styled.div<Props>`
  width: ${props => (props.expand ? 'auto' : 'auto')};
  position: ${props => (props.expand ? 'relative' : 'fixed')};
  top: ${props => (props.expand ? '0' : '12px')};
  left: ${props => (props.expand ? '0' : '12px')};

  z-index: 99;

  padding: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-self: flex-end;

  margin-right: 1.875rem;

  border-radius: 0.25rem;

  background: var(--blue-50);
  color: var(--white-50);

  cursor: pointer;

  @media (min-width: 1028px) {
    display: none;
  }
`;