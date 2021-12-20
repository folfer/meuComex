import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../../components/Input";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import {
  Container,
  Row,
  FormFormik,
  WrapperInput,
  WrapperInputTwoItens,
  WrapperCheckBox,
  WrapperLabel,
  Title,
  LabelForInput,
  InputFile,
  SearchText,
  Description,
  TitlePage,
} from "./styles";
import { MdFilePresent } from "react-icons/md";
import { maskCPF, phoneMask } from "../../../../utils/masks";
import { useAuth } from "../../../../hooks/useContext";
import api from "../../../../services/api";

interface Props {
  handleIncrement: () => void;
  handleOpenNewOperationModal: () => void;
}

const AccountingData: React.FC<Props> = ({
  handleIncrement,
  handleOpenNewOperationModal,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction, companyId } = useAuth();

  useEffect(() => {
    setRegisterState("Dados contábeis");
  }, []);

  const [isBranchAlive, setIsBranchAlive] = useState("");
  const [fileArray, setFileArray] = useState<any>([]);
  const [fileArrayTwo, setFileArrayTwo] = useState<any>([]);

  const [isAliveFile, setIsAliveFile] = useState<any>(false);
  const [isAliveFileTwo, setIsAliveFileTwo] = useState<any>(false);

  useEffect(() => {
    if (fileArray) {
      setIsAliveFile(!isAliveFile);
    } else {
      setIsAliveFile(isAliveFile);
    }
  }, [fileArray]);

  useEffect(() => {
    if (fileArrayTwo) {
      setIsAliveFileTwo(!isAliveFileTwo);
    } else {
      setIsAliveFileTwo(isAliveFileTwo);
    }
  }, [fileArrayTwo]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBranchAlive((event.target as HTMLInputElement).value);
  };

  const validationFormUserSchema = Yup.object().shape({
    fullName: Yup.string().required("*Obrigatório"),
    cpf: Yup.string().required("*Obrigatório"),
    email: Yup.string().required("*Obrigatório").email("*E-mail inválido"),
    phoneNumber: Yup.string().required("*Obrigatório"),
    csll: Yup.number().required("*Obrigatório"),
    pis: Yup.number().required("*Obrigatório"),
    cofins: Yup.number().required("*Obrigatório"),
    ipi: Yup.number().required("*Obrigatório"),
    pisTwo: Yup.number().required("*Obrigatório"),
    cofinsTwo: Yup.number().required("*Obrigatório"),
    ipiTwo: Yup.number().required("*Obrigatório"),
    importTax: Yup.number().required("*Obrigatório"),
  });

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const handleRegisterAccounting = async (dataInformation: any) => {
    const {
      fullName,
      cpf,
      email,
      phoneNumber,
      csll,
      pis,
      cofins,
      ipi,
      importTax,
    } = dataInformation;

    try {
      await api
        .post("accountant/create", {
          fullName,
          cpf,
          email,
          phoneNumber,
          company_id: companyId,
        })
        .catch((err) => {
          console.log(fullName, cpf, email, phoneNumber, companyId);
        });

      await api
        .put(`/company/update/${companyId}`, {
          taxRegime: isBranchAlive,
          csll,
          pis,
          cofins,
          ipi,
          importTax,
        })
        .catch((err) => {
          console.log(isBranchAlive, csll, pis, cofins, ipi, importTax);
        });
      handleIncrement();
    } catch {
      console.log("err");
    }
  };

  return (
    <Container>
      <TitlePage>Cadastro</TitlePage>
      <Description>
        Estamos avançando! 💪 Chegou a hora dos dados contábeis fiscais e dos
        produtos.
      </Description>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(dataInformation) => {
          personalDataFunction(dataInformation);
          handleOpenNewOperationModal();
          handleRegisterAccounting(dataInformation);
        }}
        enableReinitialize
        initialValues={{
          fullName: "",
          cpf: "",
          email: "",
          phoneNumber: "",
          csll: 0.0,
          pis: 0.0,
          cofins: 0.0,
          ipi: 0.0,
          importTax: 0.0,
          pisTwo: 0.0,
          cofinsTwo: 0.0,
          ipiTwo: 0.0,
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <WrapperInputTwoItens>
                  <Input
                    title="Nome do Contador"
                    name="fullName"
                    value={values.fullName}
                    error={errors.fullName}
                    touched={touched.fullName}
                    placeholder="Nome do Contador"
                  />
                </WrapperInputTwoItens>
                <WrapperInputTwoItens>
                  <Input
                    title="CPF"
                    name="cpf"
                    value={values.cpf}
                    error={errors.cpf}
                    touched={touched.cpf}
                    placeholder="000.000.000-00"
                    mask={maskCPF}
                  />
                </WrapperInputTwoItens>
              </Row>
              <Row>
                <WrapperInputTwoItens>
                  <Input
                    title="E-mail de contato"
                    name="email"
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                    placeholder="seuemail@empresa.com.br"
                  />
                </WrapperInputTwoItens>
                <WrapperInputTwoItens>
                  <Input
                    title="Telefone"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    error={errors.phoneNumber}
                    touched={touched.phoneNumber}
                    placeholder="(00) 00000-0000"
                    mask={phoneMask}
                  />
                </WrapperInputTwoItens>
              </Row>
              <Row>
                <WrapperCheckBox>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Permitir que o contador tenha acesso à plataforma"
                    />
                  </FormGroup>
                </WrapperCheckBox>
              </Row>
              <Row>
                <WrapperLabel>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Selecione o regime tributário da empresa
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="Possui Filial?"
                      name="row-radio-buttons-group"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="SIMPLES_NACIONAL"
                        control={<Radio />}
                        label="Simples Nacional"
                      />
                      <FormControlLabel
                        value="LUCRO_PRESUMIDO"
                        control={<Radio />}
                        label="Lucro Presumido"
                      />
                      <FormControlLabel
                        value="LUCRO_REAL"
                        control={<Radio />}
                        label="Lucro Real"
                      />
                    </RadioGroup>
                  </FormControl>
                </WrapperLabel>
              </Row>
              <Row>
                <Title>Alíquotas de imposto federal</Title>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="CSLL"
                    name="csll"
                    type="number"
                    value={values.csll}
                    error={errors.csll}
                    touched={touched.csll}
                    placeholder="1.9"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="PIS"
                    name="pis"
                    type="number"
                    value={values.pis}
                    error={errors.pis}
                    touched={touched.pis}
                    placeholder="6.6"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Cofins"
                    name="cofins"
                    type="number"
                    value={values.cofins}
                    error={errors.cofins}
                    touched={touched.cofins}
                    placeholder="2.2"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="IPI"
                    name="ipi"
                    type="number"
                    value={values.ipi}
                    error={errors.ipi}
                    touched={touched.ipi}
                    placeholder="5.2"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <Title>Cadastro de produtos</Title>
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
                <Title>NCM utilizado</Title>
              </Row>
              <Row>
                <WrapperLabel>
                  {isAliveFileTwo ? (
                    <>
                      <LabelForInput htmlFor="fuskTwo">
                        Clique aqui para
                        <SearchText>procurar em seu computador</SearchText>
                      </LabelForInput>
                    </>
                  ) : (
                    <>
                      <LabelForInput htmlFor="fuskTwo">
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
                    id="fuskTwo"
                    type="file"
                    name="photo"
                  />
                </WrapperLabel>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Imposto de importação"
                    name="importTax"
                    value={values.importTax}
                    error={errors.importTax}
                    touched={touched.importTax}
                    placeholder="Imposto de importação"
                    type="number"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="PIS"
                    name="pisTwo"
                    type="number"
                    value={values.pisTwo}
                    error={errors.pisTwo}
                    touched={touched.pisTwo}
                    placeholder="6.4"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Cofins"
                    name="cofinsTwo"
                    type="number"
                    value={values.cofinsTwo}
                    error={errors.cofinsTwo}
                    touched={touched.cofinsTwo}
                    placeholder="2.4"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="IPI"
                    name="ipiTwo"
                    type="number"
                    value={values.ipiTwo}
                    error={errors.ipiTwo}
                    touched={touched.ipiTwo}
                    placeholder="5.4"
                  />
                </WrapperInput>
              </Row>
            </FormShell>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default AccountingData;
