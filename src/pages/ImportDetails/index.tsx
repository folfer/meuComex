import React, { useRef } from "react";
import { MdOutlineErrorOutline, MdOutlineFileDownload } from "react-icons/md";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import ButtonMUI from "../../components/ButtonMUI";
import { useAuth } from "../../hooks/useContext";
import ProgressBarImportDetails from "./ProgressBar";
import OperationSummary from "./OperationSummary";
import Alert from "./Alert";
import {
  Container,
  Header,
  Item,
  ContentContainer,
  OperationFlag,
  ContentHeader,
  ContentTitle,
  ProgressBarContainer,
  Routes,
  Title,
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
  WrapperInputFile,
  AlertsRow,
  InputFileRow,
} from "./styles";
import { Input } from "../../components/Input";
import InputFileComponent from "../../components/InputFileComponent";

const ImportDetails: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();

  const { oldPath, setOldPath } = useAuth();

  const location = useLocation();

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
                    <Title>Detalhes da importação</Title>
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
              <OperationSummary />
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
                    <OptionsInput value="Especificação 1">
                      Especificação 1
                    </OptionsInput>
                    <OptionsInput value="Especificação 2">
                      Especificação 2
                    </OptionsInput>
                    <OptionsInput value="Especificação 3">
                      Especificação 3
                    </OptionsInput>
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
              <AlertsRow>
                <Alert
                  title="Li Antecipada"
                  status="Liberada"
                  text="Lorem ipsum dolor sit amet, set retium consectetur adipiscing elitemen tumed pretium dolor nulla a abitur "
                />
                <Alert
                  title="Nota fiscal"
                  status="Pendente"
                  text="Lorem ipsum dolor sit amet, set retium consectetur adipiscing elitemen tumed pretium dolor nulla a abitur "
                />
                <Alert
                  title="Fechamento operação"
                  status="Aguardando"
                  text="Lorem ipsum dolor sit amet, set retium consectetur adipiscing elitemen tumed pretium dolor nulla a abitur "
                />
              </AlertsRow>
            </ContentContainer>
            <ContentContainer>
              <ContentHeader>
                <ContentTitle>Documentos da Operação</ContentTitle>
                <OperationFlag>
                  <MdOutlineErrorOutline size={15} />
                  Documentação incompleta
                </OperationFlag>
              </ContentHeader>
              <InputFileRow>
                <WrapperInputFile>
                  <InputFileComponent
                    title="Comprovantes de pagamento frete"
                    htmlFor="fusk"
                    id="fusk"
                  />
                </WrapperInputFile>
                <WrapperInputFile>
                  <InputFileComponent
                    title="Contrato de Câmbio"
                    htmlFor="fuskTwo"
                    id="fuskTwo"
                  />
                </WrapperInputFile>
                <WrapperInputFile>
                  <InputFileComponent
                    title="Comprovantes de pagamento"
                    htmlFor="fuskThree"
                    id="fuskThree"
                  />
                </WrapperInputFile>
              </InputFileRow>
            </ContentContainer>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default ImportDetails;
