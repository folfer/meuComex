import styled from "styled-components";
import { Link } from "react-router-dom";
import containers from "../../../assets/containers.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ChargerImg = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background-image: url(${containers});
  background-size: cover;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 1080px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    height: 100vh;
  }
  @media (min-width: 1330px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    height: 100vh;
  }
`;

export const InputsContainer = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: #fff;
`;

export const NavBar = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  padding-top: 4.313rem;
`;

export const Text = styled(Link)`
  color: #fff;
  font-weight: 500;
  font-size: 1.625rem;

  padding-bottom: 0.313rem;

  transition: all 0.2s ease-out;

  border-bottom: 0px solid #f4f7fe;

  &:hover {
    border-bottom: 2px solid #f4f7fe;
  }
`;
