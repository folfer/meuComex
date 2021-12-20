import React, { useState } from "react";
import { useAuth } from "../../hooks/useContext";
import { useLocation } from "react-router";

import AlertComponent from "../../components/AlertComponent";

import {
  Container,
  Content,
  FirstSection,
  Header,
  Title,
  Routes,
} from "./styles";
import bulbImg from "../../assets/bulb.png";
import ContractImg from "../../assets/contract.png";
import CardExchange from "../../components/CardExchange";
import TableShell from "../../components/TableShell";
import FabButton from "../../components/FabButton";
import AlertsModal from "./AlertsModal";

const Alerts: React.FC = () => {
  const { oldPath, setOldPath } = useAuth();
  const [isExpand, setIsExpand] = useState(false);

  const [isAlertsModalOpen, setIsAlertsModalOpen] = useState(true);

  function handleOpenAlertsModal() {
    setIsAlertsModalOpen(true);
  }

  function handleCloseAlertsModal() {
    setIsAlertsModalOpen(false);
  }

  const location = useLocation();

  const dataInformation = [
    {
      id: 1,
      identifier: "Marina Funke",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 2,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 3,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 4,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 5,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 6,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 7,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 8,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 9,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 10,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 11,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 12,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 13,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 14,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 15,
      identifier: "Victor",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
  ];

  return (
    <Container>
      <Content>
        <Header>
          <Title>Alertas</Title>
          <Routes>{`${
            oldPath ? oldPath.replace("/", "") : ""
          } > ${location.pathname.replace("/", "")}`}</Routes>
        </Header>
        <FirstSection>
          <AlertComponent
            numberOfAlerts={12}
            description="Alertas em aberto"
            imageSrc={bulbImg}
          ></AlertComponent>
          <AlertComponent
            numberOfAlerts={6}
            description="Contratos de câmbio em aberto"
            imageSrc={ContractImg}
          ></AlertComponent>
          <CardExchange signal="+7,45%" />
        </FirstSection>
        <TableShell
          searchExist={true}
          isPagination={true}
          dataInformation={dataInformation}
        />
        <AlertsModal
          isOpen={isAlertsModalOpen}
          onRequestClose={handleCloseAlertsModal}
        />
        <FabButton />
      </Content>
    </Container>
  );
};

export default Alerts;
