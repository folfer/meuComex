import React, { useEffect, useRef, useState } from "react";
import {
  MdFilePresent,
  MdOutlineErrorOutline,
  MdOutlineFileDownload,
  MdOutlineShoppingCart,
  MdOutlineWarningAmber,
} from "react-icons/md";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import ButtonMUI from "../../components/ButtonMUI";
import { useAuth } from "../../hooks/useContext";
import ProgressBarImportDetails from "./ProgressBar";
import {
  AlertText,
  AlertTitle,
  Container,
  ContainerValues,
  Header,
  IconContainer,
  Item,
  ItemShell,
  ItemValue,
  ContentContainer,
  OperationFlag,
  ContentHeader,
  ContentTitle,
  ProgressBarContainer,
  Routes,
  Title,
  Wrapper,
  WrapperContainerValues,
  WrapperFirstSectionHeader,
  WrapperText,
  WrapperTitleHeader,
  FormFormik,
  Row,
  WrapperInput,
  WrapperInputByTwo,
  OptionsInput,
  WrapperInputHalfSpace,
  WrapperRow,
  Screen,
  WrapperTaxes,
  WrapperScreen,
  ScreenText,
  WrapperLabel,
  SearchText,
  LabelForInput,
  InputFile,
  WrapperInputFile,
  Box,
  BoxHeader,
  BoxTitle,
  BoxStatus,
  BoxText,
} from "./styles";
import { Input } from "../../components/Input";

const ExportDetails: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();

  const { oldPath, setOldPath } = useAuth();

  const location = useLocation();

  const [fileArray, setFileArray] = useState<any>([]);
  const [fileArrayTwo, setFileArrayTwo] = useState<any>([]);
  const [fileArrayThree, setFileArrayThree] = useState<any>([]);

  const [isAliveFile, setIsAliveFile] = useState<any>(false);
  const [isAliveFileTwo, setIsAliveFileTwo] = useState<any>(false);
  const [isAliveFileThree, setIsAliveFileThree] = useState<any>(false);

  useEffect(() => {
    if (fileArray) {
      setIsAliveFile(!isAliveFile);
    } else {
      setIsAliveFile(!isAliveFile);
    }
  }, [fileArray]);

  useEffect(() => {
    if (fileArrayTwo) {
      setIsAliveFileTwo(!fileArrayTwo);
    } else {
      setIsAliveFileTwo(!fileArrayTwo);
    }
  }, [fileArrayTwo]);

  useEffect(() => {
    if (fileArrayThree) {
      setIsAliveFileThree(!fileArrayThree);
    } else {
      setIsAliveFileThree(!fileArrayThree);
    }
  }, [fileArrayThree]);

  const validationFormUserSchema = Yup.object().shape({
    countryOfOrigin: Yup.string().required("*Obrigatório"),
    Specification: Yup.string().required("*Obrigatório"),
    valueOfGoods: Yup.string().required(""),
    costOfFreight: Yup.string().required(""),
    costOfInsurance: Yup.string().required(""),
    ipi: Yup.string().required(""),
    pis: Yup.string().required(""),
    cofins: Yup.string().required(""),
    icms: Yup.string().required(""),
  });

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const defineStatusColor: any = {
    Liberada: "#028633",
    Aguardando: "#FDD817",
    Pendente: "#E01A1A",
  };

  return (
    <Container>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(e) => {
          personalDataFunction(e);
        }}
        enableReinitialize
        initialValues={{
          countryOfOrigin: "",
          Specification: "Selecionar",
          valueOfGoods: "",
          costOfFreight: "",
          costOfInsurance: "",
          ipi: "",
          pis: "",
          cofins: "",
          icms: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <Header>
              <WrapperText>
                <WrapperFirstSectionHeader>
                  <WrapperTitleHeader>
                    <Title>Detalhes da exportação</Title>
                    <Routes>{`${
                      oldPath ? oldPath.replace("/", "") : ""
                    } > ${location.pathname.replace("/", "")}`}</Routes>
                  </WrapperTitleHeader>
                  <ButtonMUI
                    color="#fff"
                    backgroundColor="#3751FE"
                    text="Exportar relatório"
                    paddingSides={40}
                    paddingTopBottom={16}
                    clickFunction={() => 0}
                    isLink={true}
                    link="/new-importation"
                  >
                    <MdOutlineFileDownload size={20} />
                  </ButtonMUI>
                </WrapperFirstSectionHeader>
              </WrapperText>
            </Header>
            <ProgressBarContainer>
              <ProgressBarImportDetails percent={90} />
            </ProgressBarContainer>
            <ContentContainer>
              <ContentHeader>
                <ContentTitle>Resumo da Operação</ContentTitle>
                <OperationFlag>
                  <MdOutlineErrorOutline size={15} />
                  Pendência Cambial
                </OperationFlag>
              </ContentHeader>
              <WrapperContainerValues>
                <ContainerValues>
                  <Wrapper>
                    <IconContainer>
                      <MdOutlineShoppingCart size={20} />
                    </IconContainer>
                    <ItemShell>
                      <Item>Número da operação</Item>
                      <ItemValue>XY3595LAMB86</ItemValue>
                    </ItemShell>
                    <ItemShell>
                      <Item>Nome da empresa</Item>
                      <ItemValue>R$0.000,00</ItemValue>
                    </ItemShell>
                    <ItemShell>
                      <Item>Número DI</Item>
                      <ItemValue>00.000.000-00</ItemValue>
                    </ItemShell>
                    <ItemShell>
                      <AlertTitle>
                        <MdOutlineWarningAmber size={17} /> Alto risco de multa
                      </AlertTitle>
                      <AlertText>14 alertas em aberto</AlertText>
                    </ItemShell>
                  </Wrapper>
                </ContainerValues>
              </WrapperContainerValues>
            </ContentContainer>
            <ContentContainer>
              <ContentHeader>
                <ContentTitle>Mercadorias</ContentTitle>
              </ContentHeader>
              <Row>
                <WrapperInput>
                  <Input
                    title="País de origem"
                    name="countryOfOrigin"
                    value={values.countryOfOrigin}
                    error={errors.countryOfOrigin}
                    touched={touched.countryOfOrigin}
                    placeholder="Estados Unidos"
                  />
                </WrapperInput>
                <WrapperInputByTwo>
                  <Input
                    title="Especificação"
                    name="Specification"
                    value={values.Specification}
                    error={errors.Specification}
                    touched={touched.Specification}
                    type="select"
                  >
                    <OptionsInput value="Administrador">
                      Especificação 1
                    </OptionsInput>
                    <OptionsInput value="Intermediário">
                      Especificação 2
                    </OptionsInput>
                    <OptionsInput value="Básico">Especificação 3</OptionsInput>
                  </Input>
                </WrapperInputByTwo>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Valor da mercadoria"
                    name="valueOfGoods"
                    value={values.valueOfGoods}
                    error={errors.valueOfGoods}
                    touched={touched.valueOfGoods}
                    placeholder="R$3.998,65"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Valor do frete"
                    name="costOfFreight"
                    value={values.costOfFreight}
                    error={errors.costOfFreight}
                    touched={touched.costOfFreight}
                    placeholder="R$1.785,44"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Valor do seguro"
                    name="costOfInsurance"
                    value={values.costOfInsurance}
                    error={errors.costOfInsurance}
                    touched={touched.costOfInsurance}
                    placeholder="R$989,77"
                  />
                </WrapperInput>
              </Row>
            </ContentContainer>
            <ContentContainer>
              <ContentHeader>
                <ContentTitle>Impostos</ContentTitle>
              </ContentHeader>
              <WrapperTaxes>
                <WrapperRow>
                  <Row>
                    <WrapperInputHalfSpace>
                      <Input
                        title="IPI"
                        name="ipi"
                        value={values.ipi}
                        error={errors.ipi}
                        touched={touched.ipi}
                        placeholder="R$3.998,65"
                      />
                    </WrapperInputHalfSpace>
                    <WrapperInputHalfSpace>
                      <Input
                        title="PIS"
                        name="pis"
                        value={values.pis}
                        error={errors.pis}
                        touched={touched.pis}
                        placeholder="22.22222.22-2"
                      />
                    </WrapperInputHalfSpace>
                  </Row>
                  <Row>
                    <WrapperInputHalfSpace>
                      <Input
                        title="COFINS"
                        name="cofins"
                        value={values.cofins}
                        error={errors.cofins}
                        touched={touched.cofins}
                        placeholder="R$1.785,44"
                      />
                    </WrapperInputHalfSpace>
                    <WrapperInputHalfSpace>
                      <Input
                        title="ICMS"
                        name="icms"
                        value={values.icms}
                        error={errors.icms}
                        touched={touched.icms}
                        placeholder="R$989,77"
                      />
                    </WrapperInputHalfSpace>
                  </Row>
                </WrapperRow>
                <WrapperScreen>
                  <Item>Total dos impostos de importação</Item>
                  <Screen>
                    <ScreenText>R$ 4.444,44</ScreenText>
                  </Screen>
                </WrapperScreen>
              </WrapperTaxes>
            </ContentContainer>
            <ContentContainer>
              <ContentHeader>
                <ContentTitle>Alertas</ContentTitle>
              </ContentHeader>
              <Row>
                <Box>
                  <BoxHeader>
                    <BoxTitle>LI Antecipada</BoxTitle>
                    <BoxStatus backgroundColor={defineStatusColor["Liberada"]}>
                      Liberada
                    </BoxStatus>
                  </BoxHeader>
                  <BoxText>
                    Lorem ipsum dolor sit amet, set retium consectetur
                    adipiscing elitemen tumed pretium dolor nulla a abitur
                  </BoxText>
                </Box>
                <Box>
                  <BoxHeader>
                    <BoxTitle>Nota fiscal</BoxTitle>
                    <BoxStatus backgroundColor={defineStatusColor["Pendente"]}>
                      Pendente
                    </BoxStatus>
                  </BoxHeader>
                  <BoxText>
                    Lorem ipsum dolor sit amet, set retium consectetur
                    adipiscing elitemen tumed pretium dolor nulla a abitur
                  </BoxText>
                </Box>
                <Box>
                  <BoxHeader>
                    <BoxTitle>Fechamento operação</BoxTitle>
                    <BoxStatus
                      backgroundColor={defineStatusColor["Aguardando"]}
                    >
                      Aguardando
                    </BoxStatus>
                  </BoxHeader>
                  <BoxText>
                    Lorem ipsum dolor sit amet, set retium consectetur
                    adipiscing elitemen tumed pretium dolor nulla a abitur
                  </BoxText>
                </Box>
              </Row>
            </ContentContainer>
            <ContentContainer>
              <ContentHeader>
                <ContentTitle>Documentos da Operação</ContentTitle>
                <OperationFlag>
                  <MdOutlineErrorOutline size={15} />
                  Documentação incompleta
                </OperationFlag>
              </ContentHeader>
              <Row>
                <WrapperInputFile>
                  <Item>Comprovantes de pagamento frete</Item>
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
                </WrapperInputFile>
                <WrapperInputFile>
                  <Item>Contrato de Câmbio</Item>
                  <WrapperLabel>
                    {isAliveFileTwo ? (
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
                          {fileArrayTwo[0]?.name ? fileArrayTwo[0]?.name : ""}
                          <SearchText>
                            (
                            {fileArrayTwo[0]?.size
                              ? formatBytes(fileArrayTwo[0]?.size)
                              : ""}
                            )
                          </SearchText>
                        </LabelForInput>
                      </>
                    )}
                    <InputFile
                      onChange={(e) =>
                        setFileArrayTwo(
                          e.currentTarget.files ? e.currentTarget.files : []
                        )
                      }
                      id="fusk"
                      type="file"
                      name="photo"
                    />
                  </WrapperLabel>
                </WrapperInputFile>
                <WrapperInputFile>
                  <Item>Comprovantes de pagamento frete</Item>
                  <WrapperLabel>
                    {isAliveFileThree ? (
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
                          {isAliveFileThree[0]?.name
                            ? isAliveFileThree[0]?.name
                            : ""}
                          <SearchText>
                            (
                            {isAliveFileThree[0]?.size
                              ? formatBytes(isAliveFileThree[0]?.size)
                              : ""}
                            )
                          </SearchText>
                        </LabelForInput>
                      </>
                    )}
                    <InputFile
                      onChange={(e) =>
                        setFileArrayThree(
                          e.currentTarget.files ? e.currentTarget.files : []
                        )
                      }
                      id="fusk"
                      type="file"
                      name="photo"
                    />
                  </WrapperLabel>
                </WrapperInputFile>
              </Row>
            </ContentContainer>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default ExportDetails;
