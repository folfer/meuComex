import React, { useEffect, useState } from "react";
import { NewTransactionModal } from "../../../components/NewOperationModal";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks/useContext";
import AccountingData from "./AccountingData";
import CompanyData from "./CompanyData";
import CustomsData from "./CustomsData";
import DispatcherData from "./DispatcherData";
import DocumentsData from "./DocumentsData";
import FinancialData from "./FinancialData";
import HeaderIndex from "./HeaderIndex";
import PersonalData from "./PersonalData";
import attention from "../../../assets/attention.png";
import sucess from "../../../assets/cool.png";

import { Container, Content, Copyright, WrapperContainer } from "./styles";

const Register: React.FC = () => {
  const { setGlobalCount } = useAuth();
  const history = useHistory();
  const [count, setCount] = useState(1);
  const [percent, setPercent] = useState("0");

  const [isSucessNewOperationModalOpen, setIsSucessNewOperationModalOpen] =
    useState(false);

  const [isFinishNewOperationModalOpen, setIsFinishNewOperationModalOpen] =
    useState(false);

  function handleOpenNewOperationModal() {
    setIsSucessNewOperationModalOpen(true);
  }

  useEffect(() => {
    setGlobalCount(count);
  }, [count]);

  const handleOnClick = () => history.push("/");

  const handleIncrement = () => {
    setCount((count) => count + 1);
    if (count === 1 || count <= 1) {
      setPercent("14");
    } else if (count === 2) {
      setPercent("28");
    } else if (count === 3) {
      setPercent("42");
      setIsSucessNewOperationModalOpen(false);
    } else if (count === 4) {
      setPercent("56");
    } else if (count === 5) {
      setPercent("70");
    } else if (count === 6) {
      setPercent("84");
    } else if (count === 7) {
      setPercent("100");
      setIsFinishNewOperationModalOpen(true);
    }
  };

  return (
    <Container>
      <HeaderIndex percent={percent} />
      <Content>
        <NewTransactionModal // Modal atenção operação
          isOpen={isSucessNewOperationModalOpen}
          onRequestClose={() =>
            setIsSucessNewOperationModalOpen(!isSucessNewOperationModalOpen)
          }
          textAlign="center"
          title="Atenção!"
          description="Certifique-se que o regime está correto! Vamos ajudar, mas sempre bom garantir."
          image=""
          label="Número da operação"
          placeholder="000.000.000-0"
          type="text"
          buttonText="Conferir dados"
          buttonTextTwo="Próximo"
          buttonTextColor="#fff"
          buttonTextColorTwo="#3751FE"
          buttonBackgroundColor="#3751FE"
          buttonBackgroundColorTwo="#F4F7FE"
          inputState={false}
          descriptionState={true}
          buttonTwoState={true}
          imageState={true}
          clickFunction={() => setIsSucessNewOperationModalOpen(false)}
          clickFunctionTwo={handleIncrement}
          paddingSideProps={97}
          paddingSidePropsTwo={120}
          imageSrc={attention}
          requisitionColor="#3751FE"
        />
        <NewTransactionModal // Modal sucesso operação
          isOpen={isFinishNewOperationModalOpen}
          onRequestClose={() =>
            setIsFinishNewOperationModalOpen(!isFinishNewOperationModalOpen)
          }
          textAlign="center"
          title="Cadastro finalizado com sucesso!"
          description="Enviamos um e-mail com o detalhamento das informações para o administrador. "
          image=""
          label="Número da operação"
          placeholder="000.000.000-0"
          type="text"
          buttonText="Ir para página de login"
          buttonTextTwo="Cadastrar nova operação"
          buttonTextColor="#fff"
          buttonTextColorTwo="#3751FE"
          buttonBackgroundColor="#3751FE"
          buttonBackgroundColorTwo="#F4F7FE"
          inputState={false}
          descriptionState={true}
          buttonTwoState={false}
          imageState={true}
          clickFunction={handleOnClick}
          clickFunctionTwo={handleIncrement}
          paddingSideProps={81}
          paddingSidePropsTwo={79}
          imageSrc={sucess}
          requisitionColor="#028633"
        />
        <WrapperContainer>
          {count === 1 && <PersonalData handleIncrement={handleIncrement} />}
          {count === 2 && <CompanyData handleIncrement={handleIncrement} />}
          {count === 3 && (
            <AccountingData
              handleIncrement={handleIncrement}
              handleOpenNewOperationModal={handleOpenNewOperationModal}
            />
          )}
          {count === 4 && <CustomsData handleIncrement={handleIncrement} />}
          {count === 5 && <DispatcherData handleIncrement={handleIncrement} />}
          {count === 6 && <FinancialData handleIncrement={handleIncrement} />}
          {count === 7 && <DocumentsData handleIncrement={handleIncrement} />}
        </WrapperContainer>
        <Copyright>©2021 meucomex - Todos os direitos reservados</Copyright>
      </Content>
    </Container>
  );
};

export default Register;
