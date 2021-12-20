import styled from "styled-components";
import { Link } from "react-router-dom";
import BoatImg from "../../assets/about.png";
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 171px;
  background-image: url(${BoatImg});
  background-size: cover;
  opacity: 0.7;

  display: flex;
  align-items: center;
`;

export const ImageTextContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;

  font-size: 42px;
  font-weight: 700;
  color: white;
`;

export const NavItems = styled.div`
  width: 100%;
  height: 72px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  width: 163px;
  height: 31px;

  cursor: pointer;
`;

export const WrapperItems = styled.div`
  width: auto;
  height: 100%;
  margin: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 31px;
`;

export const Item = styled(Link)`
  height: 100%;
  font-size: 1.4rem;
  font-weight: 400;

  display: flex;
  align-items: center;
  color: #3751fe;

  border-bottom: 3px solid transparent;
  transition: all 0.2s ease-in-out;

  :hover {
    border-bottom: 3px solid #3751fe;
  }
`;
