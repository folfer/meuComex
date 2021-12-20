import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useLocation } from "react-router-dom";
import ButtonMUI from "../../components/ButtonMUI";
import FabButton from "../../components/FabButton";
import TableShell from "../../components/TableShell";
import { useAuth } from "../../hooks/useContext";
import { InformationButton } from "../Dashboard/styles";
import { NewContributorsModal } from "./NewContributorsModal";

import {
  Border,
  ClosedButton,
  Container,
  Description,
  Header,
  HeaderDescription,
  HelperText,
  InfoButton,
  Routes,
  Title,
  WrapperBody,
  WrapperFirstSectionHeader,
  WrapperHelperText,
  WrapperText,
  WrapperTitleHeader,
} from "./styles";

const Contributors: React.FC = () => {
  const { oldPath, setOldPath, user } = useAuth();

  const location = useLocation();

  const [isNewContributorsModalOpen, setIsNewContributorsModalOpen] =
    useState(false);

  function handleOpenNewContributorsModal() {
    setIsNewContributorsModalOpen(true);
  }

  function handleCloseNewContributorsModal() {
    setIsNewContributorsModalOpen(false);
  }

  const dataInformation = [
    {
      id: 1,
      identifier: "Lenivine Garrote",
      company: "email@email.com",
      estimated: "Gerente",
    },
    {
      id: 2,
      identifier: "Lenivine Garrote",
      company: "email@email.com",
      estimated: "Gerente",
    },
    {
      id: 3,
      identifier: "Lenivine Garrote",
      company: "email@email.com",
      estimated: "Gerente",
    },
    {
      id: 4,
      identifier: "Lenivine Garrote",
      company: "email@email.com",
      estimated: "Gerente",
    },
    {
      id: 5,
      identifier: "Lenivine Garrote",
      company: "email@email.com",
      estimated: "Gerente",
    },
    {
      id: 6,
      identifier: "Lenivine Garrote",
      company: "email@email.com",
      estimated: "Gerente",
    },
    {
      id: 3,
      identifier: "Lenivine Garrote",
      company: "email@email.com",
      estimated: "Gerente",
    },
    {
      id: 4,
      identifier: "Lenivine Garrote",
      company: "email@email.com",
      estimated: "Gerente",
    },
    {
      id: 5,
      identifier: "Mardeson Pereira",
      company: "email@email.com",
      estimated: "Gerente",
    },
  ];
  return (
    <Container>
      <Header>
        <WrapperText>
          <WrapperFirstSectionHeader>
            <WrapperTitleHeader>
              <Title>Colaboradores</Title>
              <Routes>{`${
                oldPath ? oldPath.replace("/", "") : ""
              } > ${location.pathname.replace("/", "")}`}</Routes>
            </WrapperTitleHeader>
            <ButtonMUI
              color="#fff"
              backgroundColor="#3751FE"
              text="Novo colaborador"
              paddingSides={40}
              paddingTopBottom={16}
              clickFunction={() => handleOpenNewContributorsModal()}
              isLink={false}
            >
              <MdAdd />
            </ButtonMUI>
          </WrapperFirstSectionHeader>
          <WrapperHelperText>
            <HelperText>Bem-vinda de volta {user.nickname}</HelperText>
          </WrapperHelperText>
        </WrapperText>
      </Header>
      <NewContributorsModal
        isOpen={isNewContributorsModalOpen}
        onRequestClose={handleCloseNewContributorsModal}
      />
      <TableShell searchExist={false} dataInformation={dataInformation} />
    </Container>
  );
};

export default Contributors;
