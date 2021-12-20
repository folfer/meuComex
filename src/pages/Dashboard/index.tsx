import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useContext";

import ButtonMUI from "../../components/ButtonMUI";
import LastOperationsShell from "../../components/LastOperations/LastOperationsShell";
import LastOperationsItens from "../../components/LastOperations/LastOperationsItens";
import NotificationItem from "../../components/Notification/NotificationItem";
import NotificationsShell from "../../components/Notification/NotificationShell";
import OperationsItem from "../../components/Operations/OperationsItem";
import OperationsShell from "../../components/Operations/OperationsShell";
import TableShell from "../../components/TableShell";
import DashboardProgressBar from "./ProgressBar";
import CancelImage from "../../assets/alert.png";
import SucessImage from "../../assets/cool.png";

import {
  Container,
  Content,
  Description,
  FirstSection,
  Header,
  SecondSection,
  Title,
  TitleSectionSection,
  WrapperButtons,
  WrapperProgressBar,
  WrapperText,
} from "./styles";
import { MdAdd } from "react-icons/md";
import InformationButton from "../../components/InformationButton";
import FabButton from "../../components/FabButton";
import { NewTransactionModal } from "../../components/NewOperationModal";

const Dashboard: React.FC = () => {
  const { setOldPath, user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    setOldPath(location.pathname);
  }, []);

  const [isNewOperationModalOpen, setIsNewOperationModalOpen] = useState(false);

  const [isSucessNewOperationModalOpen, setIsSucessNewOperationModalOpen] =
    useState(false);

  const [isCancelNewOperationModalOpen, setIsCancelNewOperationModalOpen] =
    useState(false);

  function handleOpenNewOperationModal() {
    setIsNewOperationModalOpen(true);
    setIsCancelNewOperationModalOpen(false);
    setIsSucessNewOperationModalOpen(false);
  }

  function handleCloseNewOperationModal() {
    setIsNewOperationModalOpen(false);
  }

  function handleChangeForSucessModal() {
    setIsNewOperationModalOpen(false);
    setIsCancelNewOperationModalOpen(false);
    setIsSucessNewOperationModalOpen(true);
  }

  function handleChangeForCancelModal() {
    setIsNewOperationModalOpen(false);
    setIsSucessNewOperationModalOpen(false);
    setIsCancelNewOperationModalOpen(true);
  }

  const dataInformation = [
    {
      id: 1,
      identifier: "Marina Funke",
      company: "Ace",
      estimated: "USD 70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 2,
      identifier: "Carlos",
      company: "Ace",
      estimated: "USD 70.00 20/02",
      type: "Exportação",
      status: "Atraso",
    },
  ];

  return (
    <Container>
      <Content>
        <Header>
          <WrapperText>
            <Title>Dashboard</Title>
            <Description>Bem-vinda de volta {user.nickname} 🤗</Description>
          </WrapperText>
          <WrapperButtons>
            <ButtonMUI
              color="#fff"
              backgroundColor="#3751FE"
              text="Nova Operação"
              isLink={false}
              paddingSides={40}
              paddingTopBottom={16}
              clickFunction={() => handleOpenNewOperationModal()}
            >
              <MdAdd />
            </ButtonMUI>
            <NewTransactionModal // Modal NovaOperação
              isOpen={isNewOperationModalOpen}
              onRequestClose={handleCloseNewOperationModal}
              textAlign="center"
              title="Nova operação"
              description="Você pode dar uma numeração para sua operação, isso te auxilia em jornadas futuras 🤓"
              image=""
              label="Número da operação"
              placeholder="000.000.000-0"
              type="text"
              buttonText="Continuar"
              buttonTextTwo="Cancelar"
              buttonTextColor="#fff"
              buttonTextColorTwo="#3751FE"
              buttonBackgroundColor="#3751FE"
              buttonBackgroundColorTwo="#F4F7FE"
              inputState={true}
              descriptionState={true}
              buttonTwoState={true}
              imageState={false}
              clickFunction={handleChangeForSucessModal}
              clickFunctionTwo={handleChangeForCancelModal}
              paddingSideProps={130}
              paddingSidePropsTwo={132}
            />
            <NewTransactionModal // Modal cancelar operação
              isOpen={isCancelNewOperationModalOpen}
              onRequestClose={() =>
                setIsCancelNewOperationModalOpen(!isCancelNewOperationModalOpen)
              }
              textAlign="center"
              title="Tem certeza que quer cancelar essa operação?"
              description="Você irá perder os dados cadastrados até agora."
              image=""
              label="Número da operação"
              placeholder="000.000.000-0"
              type="text"
              buttonText="Continuar cadastro"
              buttonTextTwo="Cancelar cadastro"
              buttonTextColor="#fff"
              buttonTextColorTwo="#E01A1A"
              buttonBackgroundColor="#3751FE"
              buttonBackgroundColorTwo="#e01a1a0d"
              inputState={false}
              descriptionState={true}
              buttonTwoState={true}
              imageState={true}
              clickFunction={() => 0}
              clickFunctionTwo={() =>
                setIsCancelNewOperationModalOpen(!isCancelNewOperationModalOpen)
              }
              paddingSideProps={97}
              paddingSidePropsTwo={98}
              imageSrc={CancelImage}
              requisitionColor="#E01A1A"
            />
            <NewTransactionModal // Modal sucesso operação
              isOpen={isSucessNewOperationModalOpen}
              onRequestClose={() =>
                setIsSucessNewOperationModalOpen(!isSucessNewOperationModalOpen)
              }
              textAlign="center"
              title="Operação cadastrada com sucesso!"
              description="Você irá perder os dados cadastrados até agora."
              image=""
              label="Número da operação"
              placeholder="000.000.000-0"
              type="text"
              buttonText="Ver detalhes da operação"
              buttonTextTwo="Cadastrar nova operação"
              buttonTextColor="#fff"
              buttonTextColorTwo="#3751FE"
              buttonBackgroundColor="#3751FE"
              buttonBackgroundColorTwo="#F4F7FE"
              inputState={false}
              descriptionState={false}
              buttonTwoState={true}
              imageState={true}
              clickFunction={() => 0}
              clickFunctionTwo={handleOpenNewOperationModal}
              paddingSideProps={81}
              paddingSidePropsTwo={79}
              imageSrc={SucessImage}
              requisitionColor="#028633"
            />
          </WrapperButtons>
        </Header>
        <FirstSection>
          <NotificationsShell title="27 de agosto">
            <NotificationItem
              title="Documentos ausentes"
              description="falta de documentação para o itam ERHFVE"
            />
            <NotificationItem
              title="Documentos ausentes"
              description="falta de documentação para o itam ERHFVE"
            />
          </NotificationsShell>
          <OperationsShell>
            <OperationsItem />
            <OperationsItem />
          </OperationsShell>
          <LastOperationsShell>
            <LastOperationsItens />
            <LastOperationsItens />
          </LastOperationsShell>
        </FirstSection>
        <SecondSection>
          <WrapperProgressBar>
            <TitleSectionSection>Limite do Radar</TitleSectionSection>
            <InformationButton
              marginLeft={1}
              marginTop={0.1}
              marginBottom={0}
              marginRight={0}
              text="Et congue gravida mauris diam mauris pellentesque porttitor."
            />
          </WrapperProgressBar>
          <DashboardProgressBar />
        </SecondSection>
        <TableShell
          searchExist={false}
          dataInformation={dataInformation}
          isPagination={false}
        />
      </Content>
      <FabButton />
    </Container>
  );
};

export default Dashboard;
