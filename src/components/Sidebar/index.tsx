import React, { useState } from "react";

import {
  MdOutlineDashboard,
  MdOutlineSettings,
  MdOutlineShoppingCart,
  MdLightbulbOutline,
  MdOutlineHistoryEdu,
  MdLogout,
} from "react-icons/md";

import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

import { FiTag, FiUser } from "react-icons/fi";

import SimpleMenuItem from "./SimpleMenuItem";
import Logout from "./Logout";
import LogoMenu from "../../assets/logomenu.png";

import {
  Container,
  Logo,
  WrapperMenuItems,
  MenuHamburger,
  BorderBottom,
} from "./styles";
import { useHistory } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isExpand, setIsExpand] = useState(true);
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem("@MeuComex:token");
    localStorage.removeItem("@MeuComex:user");

    history.push("/");
  };

  return (
    <Container expand={isExpand}>
      <MenuHamburger
        data-testid="menu-hamburguer"
        expand={isExpand}
        onClick={() => setIsExpand(!isExpand)}
      >
        {isExpand ? (
          <RiMenuFoldLine size={22} />
        ) : (
          <RiMenuUnfoldLine size={22} />
        )}
      </MenuHamburger>
      <WrapperMenuItems>
        <Logo src={LogoMenu} alt="Logo Menu" />
        <BorderBottom />
        <SimpleMenuItem
          title="Dashboard"
          urlPath="/dashboard"
          Icon={MdOutlineDashboard}
        />
        <SimpleMenuItem
          title="Histórico"
          urlPath="/history"
          Icon={MdOutlineHistoryEdu}
        />
        <SimpleMenuItem
          title="Importação"
          urlPath="/importation"
          Icon={MdOutlineShoppingCart}
        />
        <SimpleMenuItem
          title="Colaboradores"
          urlPath="/contributors"
          Icon={FiUser}
        />
        <SimpleMenuItem
          title="Exportação"
          urlPath="/exportation"
          Icon={FiTag}
        />
        <SimpleMenuItem
          title="Alertas"
          urlPath="/alerts"
          Icon={MdLightbulbOutline}
        />
        <SimpleMenuItem
          title="Configurações"
          urlPath="/settings"
          Icon={MdOutlineSettings}
        />
      </WrapperMenuItems>
      <Logout title="Sair" onClick={signOut} Icon={MdLogout} />
    </Container>
  );
};

export default Sidebar;
