import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";
import SuccessImage from "../../../assets/cool.png";

import {
  Container,
  ContainerValues,
  FormFormik,
  Item,
  ItemShell,
  ItemValue,
  Title,
  WrapperTotal,
  TotalValue,
  Wrapper,
  WrapperContainerValues,
  Total,
} from "./styles";
import { useAuth } from "../../../hooks/useContext";
import { NewTransactionModal } from "../../../components/NewOperationModal";
import TableShell from "./TableShell";

interface Props {
  handleIncrement: () => void;
}

const ExpenditureCalculation: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();

  useEffect(() => {
    setRegisterState("Cálculos");
  }, []);

  const validationFormUserSchema = Yup.object().shape({
    operationNumber: Yup.string().required("*Obrigatório"),
  });

  const [isNewOperationModalOpen, setIsNewOperationModalOpen] = useState(false);

  function handleCloseNewOperationModal() {
    setIsNewOperationModalOpen(false);
  }

  const dataInformation = [
    {
      id: 1,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 2,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 3,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 4,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 5,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 6,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 7,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 8,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 9,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 10,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 11,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 12,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 13,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 14,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
    {
      id: 15,
      identifier: "Maçãs, peras e marmelos frescos",
      company: "R$0.000,00",
      estimated: "R$70.00",
      type: "R$0.000,00",
    },
  ];

  return (
    <Container>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(e) => {
          personalDataFunction(e);
        }}
        enableReinitialize
        initialValues={{
          operationNumber: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell
              clickFunction={() =>
                setIsNewOperationModalOpen(!isNewOperationModalOpen)
              }
            >
              <WrapperContainerValues>
                <ContainerValues>
                  <Title>Valor total da operação</Title>
                  <Wrapper>
                    <ItemShell>
                      <Item>Mercadorias</Item>
                      <ItemValue>R$ 0.000,00</ItemValue>
                    </ItemShell>
                    <ItemShell>
                      <Item>Impostos</Item>
                      <ItemValue>R$ 0.000,00</ItemValue>
                    </ItemShell>
                    <ItemShell>
                      <Item>Taxas</Item>
                      <ItemValue>R$ 0.000,00</ItemValue>
                    </ItemShell>
                    <ItemShell>
                      <Item>Serviços</Item>
                      <ItemValue>R$ 0.000,00</ItemValue>
                    </ItemShell>
                  </Wrapper>
                </ContainerValues>
                <WrapperTotal>
                  <Total>Total da operação</Total>
                  <TotalValue>R$ 0.000,00</TotalValue>
                </WrapperTotal>
              </WrapperContainerValues>
              <TableShell
                searchExist={false}
                isPagination={true}
                dataInformation={dataInformation}
              />
              <NewTransactionModal
                isOpen={isNewOperationModalOpen}
                onRequestClose={handleCloseNewOperationModal}
                textAlign="center"
                title="Sua operação foi validada com sucesso."
                description="Agora que você cadastrou todas as informações das mercadorias vamos dar sequência na operação. "
                image=""
                type="text"
                buttonText="Avançar para a próxima etapa"
                buttonTextTwo="Salvar e continuar mais tarde"
                buttonTextColor="#fff"
                buttonTextColorTwo="#3751FE"
                buttonBackgroundColor="#3751FE"
                buttonBackgroundColorTwo="#F4F7FE"
                inputState={false}
                descriptionState={true}
                buttonTwoState={false}
                imageState={true}
                paddingSideProps={68.5}
                paddingSidePropsTwo={68}
                imageSrc={SuccessImage}
                requisitionColor="#028633"
                clickFunction={handleIncrement}
              />
            </FormShell>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default ExpenditureCalculation;
