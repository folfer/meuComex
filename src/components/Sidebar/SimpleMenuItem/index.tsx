import React from "react";
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";
import { Container } from "./styles";

interface SimpleMenuItemProps {
  title: string;
  urlPath: string;
  Icon: IconType;
}

const SimpleMenuItem: React.FC<SimpleMenuItemProps> = ({ title, urlPath, Icon }) => {
  return (
    <Container>
      <NavLink to={urlPath} activeClassName="active-route">
        <Icon size={22} />
        <h3>{title}</h3>
      </NavLink>
    </Container>
  );
};

export default SimpleMenuItem;
