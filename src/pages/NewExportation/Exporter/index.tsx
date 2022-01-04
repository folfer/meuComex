import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  Row,
  FormFormik,
  WrapperInput,
  WrapperInputTwoItens,
  AddBranch,
  Title,
  WrapperLabel,
  WrapperTitles,
  LabelForInput,
  SearchText,
  InputFile,
  OptionsInput,
} from "./styles";
import { useAuth } from "../../../hooks/useContext";
import { dataInformationExporters } from "../../../utils/dataInformation";
import TableShellImportation from "../TableShellImportation";
import { MdFilePresent, MdSearch } from "react-icons/md";
import { Input } from "../../../components/Input";
import { AiOutlinePlus } from "react-icons/ai";
import { maskCEP, phoneMask } from "../../../utils/masks";

interface Props {
  handleIncrement: () => void;
}

const Exporter: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();
  const [isNewExporter, setIsNewExporter] = useState<boolean>(false);
  const [isSelectedExporter, setIsSelectedExporter] = useState<boolean>(false);
  const [viewSelectedExporter, setViewSelectedExporter] =
    useState<boolean>(false);
  const [viewNewExporter, setViewNewExporter] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isAliveFileThird, setIsAliveFileThird] = useState<any>(false);
  const [fileArrayThird, setFileArrayThird] = useState<any>([]);

  useEffect(() => {
    if (fileArrayThird) {
      setIsAliveFileThird(!isAliveFileThird);
    } else {
      setIsAliveFileThird(!isAliveFileThird);
    }
  }, [fileArrayThird]);

  useEffect(() => {
    setRegisterState("Exportador");

    if (isNewExporter === true) {
      setViewNewExporter(true);
      setViewSelectedExporter(false);
      setShowForm(true);
    } else if (isSelectedExporter === true) {
      setViewSelectedExporter(true);
      setViewNewExporter(false);
      setShowForm(true);
    } else {
      setViewSelectedExporter(false);
      setViewNewExporter(false);
    }
  }, [isNewExporter, isSelectedExporter]);

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const validationFormUserSchema = Yup.object().shape({
    corporateName: Yup.string().required("*Obrigatório"),
    nifAndVat: Yup.string().required("*Obrigatório"),
    name: Yup.string().required("*Obrigatório"),
    phone: Yup.string().required("*Obrigatório"),
    email: Yup.string().required("*Obrigatório").email("*E-mail inválido"),
    addressCollect: Yup.string().required("*Obrigatório"),
    numberCollect: Yup.string().required("*Obrigatório"),
    complementCollect: Yup.string().required("*Obrigatório"),
    districtCollect: Yup.string().required("*Obrigatório"),
    stateCollect: Yup.string().required("*Obrigatório"),
    cityCollect: Yup.string().required("*Obrigatório"),
    countryCollect: Yup.string().required("*Obrigatório"),
    zipCodeCollect: Yup.string().required("*Obrigatório"),
    addressRevenues: Yup.string().required("*Obrigatório"),
    numberRevenues: Yup.string().required("*Obrigatório"),
    complementRevenues: Yup.string().required("*Obrigatório"),
    districtRevenues: Yup.string().required("*Obrigatório"),
    stateRevenues: Yup.string().required("*Obrigatório"),
    cityRevenues: Yup.string().required("*Obrigatório"),
    countryRevenues: Yup.string().required("*Obrigatório"),
    zipCodeRevenues: Yup.string().required("*Obrigatório"),
    ibanAccount: Yup.string().required("*Obrigatório"),
    currency: Yup.string().required("*Obrigatório"),
  });

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
          corporateName: "",
          nifAndVat: "",
          name: "",
          phone: "",
          email: "",
          addressCollect: "",
          numberCollect: "",
          complementCollect: "",
          districtCollect: "",
          stateCollect: "",
          cityCollect: "",
          countryCollect: "",
          zipCodeCollect: "",
          addressRevenues: "",
          numberRevenues: "",
          complementRevenues: "",
          districtRevenues: "",
          stateRevenues: "",
          cityRevenues: "",
          countryRevenues: "",
          zipCodeRevenues: "",
          ibanAccount: "",
          currency: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <TableShellImportation
                  searchExist={true}
                  dataInformation={dataInformationExporters}
                  isPagination={true}
                  setIsSelectedExporter={setIsSelectedExporter}
                  showForm={showForm}
                />
              </Row>
              {!showForm ? (
                <Row>
                  <AddBranch onClick={() => setIsNewExporter(true)}>
                    <AiOutlinePlus size={18} /> Adicionar novo exportador
                  </AddBranch>
                </Row>
              ) : (
                <></>
              )}
              {showForm ? (
                <>
                  <Row>
                    <Title>Exportador selecionado</Title>
                  </Row>
                  <Row>
                    <WrapperInputTwoItens>
                      <Input
                        title="Razão Social"
                        name="corporateName"
                        value={values.corporateName}
                        error={errors.corporateName}
                        touched={touched.corporateName}
                        placeholder="Razão Social"
                      />
                    </WrapperInputTwoItens>
                    <WrapperInputTwoItens>
                      <Input
                        title="NIF/VAT"
                        name="nifAndVat"
                        value={values.nifAndVat}
                        error={errors.nifAndVat}
                        touched={touched.nifAndVat}
                        placeholder="NIF/VAT"
                      />
                    </WrapperInputTwoItens>
                  </Row>
                  <Row>
                    <Title>Contato</Title>
                  </Row>
                  <Row>
                    <WrapperInput>
                      <Input
                        title="Nome"
                        name="name"
                        value={values.name}
                        error={errors.name}
                        touched={touched.name}
                        placeholder="Nome"
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="Telefone"
                        name="phone"
                        value={values.phone}
                        error={errors.phone}
                        touched={touched.phone}
                        placeholder="00 0 0000-0000"
                        mask={phoneMask}
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="E-mail"
                        name="email"
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        placeholder="E-mail"
                      />
                    </WrapperInput>
                  </Row>
                  <Row>
                    <Title>Endereço de coleta</Title>
                  </Row>
                  <Row>
                    <WrapperInput>
                      <Input
                        title="Endereço"
                        name="addressCollect"
                        value={values.addressCollect}
                        error={errors.addressCollect}
                        touched={touched.addressCollect}
                        placeholder="Digite o endereço"
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="Número"
                        name="numberCollect"
                        value={values.numberCollect}
                        error={errors.numberCollect}
                        touched={touched.numberCollect}
                        placeholder="0000"
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="Complemento"
                        name="complementCollect"
                        value={values.complementCollect}
                        error={errors.complementCollect}
                        touched={touched.complementCollect}
                        placeholder=""
                      />
                    </WrapperInput>
                  </Row>
                  <Row>
                    <WrapperInput>
                      <Input
                        title="Bairro"
                        name="districtCollect"
                        value={values.districtCollect}
                        error={errors.districtCollect}
                        touched={touched.districtCollect}
                        placeholder="Endereço"
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="Província/Estado"
                        name="stateCollect"
                        value={values.stateCollect}
                        error={errors.stateCollect}
                        touched={touched.stateCollect}
                        placeholder=""
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="Cidade"
                        name="cityCollect"
                        value={values.cityCollect}
                        error={errors.cityCollect}
                        touched={touched.cityCollect}
                        placeholder="Endereço"
                      />
                    </WrapperInput>
                  </Row>
                  <Row>
                    <WrapperInputTwoItens>
                      <Input
                        title="País"
                        name="countryCollect"
                        value={values.countryCollect}
                        error={errors.countryCollect}
                        touched={touched.countryCollect}
                        placeholder=""
                      />
                    </WrapperInputTwoItens>
                    <WrapperInputTwoItens>
                      <Input
                        title="ZIP-CODE"
                        name="zipCodeCollect"
                        value={values.zipCodeCollect}
                        error={errors.zipCodeCollect}
                        touched={touched.zipCodeCollect}
                        placeholder="00.000-000"
                        mask={maskCEP}
                      />
                    </WrapperInputTwoItens>
                  </Row>
                  <Row>
                    <Title>Endereço Faturamento</Title>
                  </Row>
                  <Row>
                    <WrapperInput>
                      <Input
                        title="Endereço"
                        name="addressRevenues"
                        value={values.addressRevenues}
                        error={errors.addressRevenues}
                        touched={touched.addressRevenues}
                        placeholder="Digite o endereço"
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="Número"
                        name="numberRevenues"
                        value={values.numberRevenues}
                        error={errors.numberRevenues}
                        touched={touched.numberRevenues}
                        placeholder="0000"
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="Complemento"
                        name="complementRevenues"
                        value={values.complementRevenues}
                        error={errors.complementRevenues}
                        touched={touched.complementRevenues}
                        placeholder=""
                      />
                    </WrapperInput>
                  </Row>
                  <Row>
                    <WrapperInput>
                      <Input
                        title="Bairro"
                        name="districtRevenues"
                        value={values.districtRevenues}
                        error={errors.districtRevenues}
                        touched={touched.districtRevenues}
                        placeholder="Endereço"
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="Província/Estado"
                        name="stateRevenues"
                        value={values.stateRevenues}
                        error={errors.stateRevenues}
                        touched={touched.stateRevenues}
                        placeholder=""
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="Cidade"
                        name="cityRevenues"
                        value={values.cityRevenues}
                        error={errors.cityRevenues}
                        touched={touched.cityRevenues}
                        placeholder="Endereço"
                      />
                    </WrapperInput>
                  </Row>
                  <Row>
                    <WrapperInputTwoItens>
                      <Input
                        title="País"
                        name="countryRevenues"
                        value={values.countryRevenues}
                        error={errors.countryRevenues}
                        touched={touched.countryRevenues}
                        placeholder=""
                      />
                    </WrapperInputTwoItens>
                    <WrapperInputTwoItens>
                      <Input
                        title="ZIP-CODE"
                        name="zipCodeRevenues"
                        value={values.zipCodeRevenues}
                        error={errors.zipCodeRevenues}
                        touched={touched.zipCodeRevenues}
                        placeholder="00.000-000"
                        mask={maskCEP}
                      />
                    </WrapperInputTwoItens>
                  </Row>
                  <Row>
                    <Title>Swift</Title>
                  </Row>
                  <Row>
                    <WrapperInput>
                      <Input
                        title="IBAN/Account number"
                        name="ibanAccount"
                        value={values.ibanAccount}
                        error={errors.ibanAccount}
                        touched={touched.ibanAccount}
                        placeholder="GB 12 ABCD 102030 12345678"
                      />
                    </WrapperInput>
                    <WrapperInput>
                      <Input
                        title="Moeda da operação"
                        name="currency"
                        value={values.currency}
                        error={errors.currency}
                        touched={touched.currency}
                        placeholder="Selecionar"
                        type="select"
                      >
                        <OptionsInput value="1">Dólar</OptionsInput>
                        <OptionsInput value="2">Euro</OptionsInput>
                        <OptionsInput value="3">Real</OptionsInput>
                      </Input>
                    </WrapperInput>
                    <WrapperInput>
                      <WrapperLabel>
                        <WrapperTitles>
                          <Title>Tabela PTAX</Title>
                        </WrapperTitles>
                        {isAliveFileThird ? (
                          <>
                            <LabelForInput htmlFor="fuskThird">
                              Clique aqui para
                              <SearchText>
                                procurar em seu computador
                              </SearchText>
                            </LabelForInput>
                          </>
                        ) : (
                          <>
                            <LabelForInput htmlFor="fuskThird">
                              <MdFilePresent color="#3751FE" size={20} />
                              {fileArrayThird[0]?.name
                                ? fileArrayThird[0]?.name
                                : ""}
                              <SearchText>
                                (
                                {fileArrayThird[0]?.size
                                  ? formatBytes(fileArrayThird[0]?.size)
                                  : ""}
                                )
                              </SearchText>
                            </LabelForInput>
                          </>
                        )}
                        <InputFile
                          onChange={(e) =>
                            setFileArrayThird(
                              e.currentTarget.files ? e.currentTarget.files : []
                            )
                          }
                          id="fuskThird"
                          type="file"
                          name="photo"
                        />
                      </WrapperLabel>
                    </WrapperInput>
                  </Row>
                </>
              ) : (
                <></>
              )}
            </FormShell>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default Exporter;
