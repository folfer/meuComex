import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../components/Input";
import { maskCPF, maskDateBird, phoneMask } from "../../../utils/masks";
import SuccessImage from "../../../assets/cool.png";
import AlertImage from "../../../assets/alert.png";

import {
  Container,
  Row,
  FormFormik,
  WrapperInput,
  OptionsInput,
  WrapperInputTwoItens,
  WrapperLabel,
  LabelForInput,
  SearchText,
  InputFile,
  Text,
} from "./styles";
import { useAuth } from "../../../hooks/useContext";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdFilePresent } from "react-icons/md";
import { NewTransactionModal } from "../../../components/NewOperationModal";

interface Props {
  handleIncrement: () => void;
}

export const ExchangeClosing: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();

  const [isNewOperationModalOpen, setIsNewOperationModalOpen] = useState(false);
  const [isExchangeContractModalOpen, setIsExchangeContractModalOpen] =
    useState(false);
  const [isIncompleteDataModalOpen, setIsIncompleteDataModalOpen] =
    useState(false);

  function handleCloseNewOperationModal() {
    setIsNewOperationModalOpen(false);
  }

  function handleCloseExchangeContractModal() {
    setIsExchangeContractModalOpen(false);
  }

  function handleCloseIncompleteDataModalOpen() {
    setIsIncompleteDataModalOpen(false);
  }

  useEffect(() => {
    setRegisterState("Fechamento de câmbio");
  }, []);

  const [fileArray, setFileArray] = useState<any>([]);

  const [isAliveFile, setIsAliveFile] = useState<any>(false);

  useEffect(() => {
    if (fileArray) {
      setIsAliveFile(!isAliveFile);
    } else {
      setIsAliveFile(!isAliveFile);
    }
  }, [fileArray]);

  const validationFormUserSchema = Yup.object().shape({
    contractNumber: Yup.string().required("*Obrigatório"),
    bank: Yup.string().required("*Obrigatório"),
    closingDate: Yup.string().required("*Obrigatório"),
    closingValue: Yup.string().required("*Obrigatório"),
    paymentMethod: Yup.string().required("*Obrigatório"),
  });

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <Container>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(e) => {
          personalDataFunction(e);
          handleIncrement();
        }}
        enableReinitialize
        initialValues={{
          contractNumber: "",
          bank: "Selecionar",
          closingDate: "",
          closingValue: "",
          paymentMethod: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <WrapperInput>
                  <Input
                    title="Número do contrato"
                    name="contractNumber"
                    value={values.contractNumber}
                    error={errors.contractNumber}
                    touched={touched.contractNumber}
                    placeholder="XY3595LAMB86"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Banco"
                    name="bank"
                    value={values.bank}
                    error={errors.bank}
                    touched={touched.bank}
                    type="select"
                  >
                    <OptionsInput value="Santander">Santander</OptionsInput>
                    <OptionsInput value="Inter">Inter</OptionsInput>
                    <OptionsInput value="Nubank">Nubank</OptionsInput>
                  </Input>
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Data de fechamento"
                    name="closingDate"
                    mask={maskDateBird}
                    value={values.closingDate}
                    error={errors.closingDate}
                    touched={touched.closingDate}
                    placeholder="00/00/0000"
                    icon={() => <AiOutlineCalendar color="#2B3674" size={19} />}
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Valor de fechamento"
                    name="closingValue"
                    value={values.closingValue}
                    error={errors.closingValue}
                    touched={touched.closingValue}
                    placeholder="R$000,00"
                  />
                </WrapperInput>
                <WrapperInputTwoItens>
                  <Input
                    title="Modalidade de pagamento"
                    name="paymentMethod"
                    value={values.paymentMethod}
                    error={errors.paymentMethod}
                    touched={touched.paymentMethod}
                    type="select"
                  >
                    <OptionsInput value="Dinheiro">Dinheiro</OptionsInput>
                    <OptionsInput value="Crédito">Crédito</OptionsInput>
                    <OptionsInput value="Débito">Débito</OptionsInput>
                  </Input>
                </WrapperInputTwoItens>
              </Row>
              <Row>
                <Text>Comprovantes de pagamento</Text>
              </Row>
              <Row>
                <WrapperLabel>
                  {isAliveFile ? (
                    <>
                      <LabelForInput htmlFor="fusk">
                        Clique aqui para
                        <SearchText>procurar em seu computador</SearchText>
                      </LabelForInput>
                    </>
                  ) : (
                    <>
                      <LabelForInput htmlFor="fusk">
                        <MdFilePresent color="#3751FE" size={20} />
                        {fileArray[0]?.name ? fileArray[0]?.name : ""}
                        <SearchText>
                          (
                          {fileArray[0]?.size
                            ? formatBytes(fileArray[0]?.size)
                            : ""}
                          )
                        </SearchText>
                      </LabelForInput>
                    </>
                  )}
                  <InputFile
                    onChange={(e) =>
                      setFileArray(
                        e.currentTarget.files ? e.currentTarget.files : []
                      )
                    }
                    id="fusk"
                    type="file"
                    name="photo"
                  />
                </WrapperLabel>
              </Row>
              <Row>
                <Text>Contrato de câmbio</Text>
              </Row>
            </FormShell>
            <NewTransactionModal
              isOpen={isNewOperationModalOpen}
              onRequestClose={handleCloseNewOperationModal}
              textAlign="center"
              title="Operação cadastrada com sucesso!"
              description="Agora que você cadastrou todas as informações das mercadorias vamos dar sequência na operação. "
              image=""
              type="text"
              buttonText="Ver detalhes da operação"
              buttonTextTwo="Cadastrar nova operação"
              buttonTextColor="#fff"
              buttonTextColorTwo="#3751FE"
              buttonBackgroundColor="#3751FE"
              buttonBackgroundColorTwo="#F4F7FE"
              inputState={false}
              descriptionState={true}
              buttonTwoState={true}
              imageState={true}
              paddingSideProps={81}
              paddingSidePropsTwo={79}
              imageSrc={SuccessImage}
              requisitionColor="#028633"
            />
            <NewTransactionModal
              isOpen={isExchangeContractModalOpen}
              onRequestClose={handleCloseExchangeContractModal}
              textAlign="center"
              title="Contrato de câmbio anexado com sucesso"
              description="Agora que você cadastrou todas as informações das mercadorias vamos dar sequência na operação. "
              image=""
              type="text"
              buttonText="Ver detalhes da operação"
              buttonTextTwo="Cadastrar nova operação"
              buttonTextColor="#fff"
              buttonTextColorTwo="#3751FE"
              buttonBackgroundColor="#3751FE"
              buttonBackgroundColorTwo="#F4F7FE"
              inputState={false}
              descriptionState={true}
              buttonTwoState={true}
              imageState={true}
              paddingSideProps={81}
              paddingSidePropsTwo={79}
              imageSrc={SuccessImage}
              requisitionColor="#028633"
            />
            <NewTransactionModal
              isOpen={isIncompleteDataModalOpen}
              onRequestClose={handleCloseIncompleteDataModalOpen}
              textAlign="center"
              title="Dados incompletos"
              description="Ainda não identificamos o comprovante de pagamento do frete, faça upload do arquivo para continuar. "
              image=""
              type="text"
              buttonText="Anexar documento"
              buttonTextTwo="Continuar mais tarde"
              buttonTextColor="#fff"
              buttonTextColorTwo="#3751FE"
              buttonBackgroundColor="#3751FE"
              buttonBackgroundColorTwo="#F4F7FE"
              inputState={false}
              descriptionState={true}
              buttonTwoState={true}
              imageState={true}
              paddingSideProps={102.2}
              paddingSidePropsTwo={95.3}
              imageSrc={AlertImage}
              requisitionColor="#3751FE"
            />
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default ExchangeClosing;
