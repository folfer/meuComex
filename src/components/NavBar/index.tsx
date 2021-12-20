import React from "react";
import { useHistory } from "react-router-dom";

import {
  BackgroundImage,
  Container,
  NavItems,
  Image,
  WrapperItems,
  Item,
  ImageTextContainer,
} from "./styles";

import logo from "../../assets/logo.png";
import ButtonMUI from "../ButtonMUI";
import { MdLogout } from "react-icons/md";

interface NavBarProps {
  imageText: string;
}

const NavBar: React.FC<NavBarProps> = ({ imageText }) => {
  const history = useHistory();

  const handleSendToHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <NavItems>
        <Image src={logo} onClick={handleSendToHome} />
        <WrapperItems>
          <Item to="/about">Sobre</Item>
          <Item to="/proseftur">Proseftur</Item>
          <Item to="price">Preço</Item>
          <ButtonMUI
            color="#fff"
            backgroundColor="#3751FE"
            text="Login"
            paddingSides={45}
            paddingTopBottom={14}
            isLink={true}
            link="/"
          >
            <MdLogout />
          </ButtonMUI>
        </WrapperItems>
      </NavItems>
      <BackgroundImage>
        <ImageTextContainer>{imageText}</ImageTextContainer>
      </BackgroundImage>
    </Container>
  );
};

export default NavBar;
