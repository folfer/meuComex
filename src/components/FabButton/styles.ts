import styled from 'styled-components';

export const Container = styled.button`
  width: 55px;
  height: 55px;
  position: fixed;
  bottom: 5%;
  right: 5%;
  background: #3298F7;
  box-shadow: -4px 4px 20px rgba(9, 123, 229, 0.5);
  border-radius: 50px;

  @media (min-width: 768px) {
    bottom: 5%;
    right: 5%;
  }

  @media (min-width: 986px) {
    bottom: 5%;
    right: 5%;
  }

  @media (min-width: 1080px) {
    bottom: 5%;
    right: 5%;
  }

  @media (min-width: 1330px) {
    bottom: 5%;
    right: 5%;
  }

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

`;

export const Text = styled.h1`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
