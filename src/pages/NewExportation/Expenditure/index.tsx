import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../components/Input";
import { maskCPF, maskDateBird, phoneMask } from "../../../utils/masks";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import {
  Container,
  Row,
  Title,
  FormFormik,
  WrapperInput,
  OptionsInput,
  WrapperLabel,
  LabelForInput,
  SearchText,
  InputFile,
  WrapperInputByTwo,
} from "./styles";

import { useAuth } from "../../../hooks/useContext";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { AiOutlineCalendar, AiOutlinePlus } from "react-icons/ai";
import { MdFilePresent, MdInfoOutline } from "react-icons/md";

interface Props {
  handleIncrement: () => void;
}

export const Expenditure: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();

  useEffect(() => {
    setRegisterState("Despesas");
  }, []);

  const [isBranchAlive, setIsBranchAlive] = useState("no");
  const [isActiveBranch, setIsActiveBranch] = useState<boolean>(true);

  const [isBranchAliveTwo, setIsBranchAliveTwo] = useState("no");
  const [isActiveBranchTwo, setIsActiveBranchTwo] = useState<boolean>(true);

  const [fileArray, setFileArray] = useState<any>([]);
  const [fileArrayTwo, setFileArrayTwo] = useState<any>([]);

  const [isAliveFile, setIsAliveFile] = useState<any>(false);
  const [isAliveFileTwo, setIsAliveFileTwo] = useState<any>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBranchAlive((event.target as HTMLInputElement).value);
  };

  const handleChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBranchAliveTwo((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (isBranchAlive === "Yes") {
      setIsActiveBranch(!isActiveBranch);
    } else {
      setIsActiveBranch(!isActiveBranch);
    }
  }, [isBranchAlive]);

  useEffect(() => {
    if (isBranchAliveTwo === "Yes") {
      setIsActiveBranchTwo(!isActiveBranchTwo);
    } else {
      setIsActiveBranchTwo(!isActiveBranchTwo);
    }
  }, [isBranchAliveTwo]);

  useEffect(() => {
    if (fileArray) {
      setIsAliveFile(!isAliveFile);
    } else {
      setIsAliveFile(!isAliveFile);
    }
  }, [fileArray]);

  useEffect(() => {
    if (fileArrayTwo) {
      setIsAliveFileTwo(!isAliveFileTwo);
    } else {
      setIsAliveFileTwo(!isAliveFileTwo);
    }
  }, [fileArrayTwo]);

  const validationFormUserSchema = Yup.object().shape({
    incoterm: Yup.string().required("*Obrigatório"),
    costOfFreight: Yup.string().required("*Obrigatório"),
    currencyOfOperation: Yup.string().required("*Obrigatório"),
    quotation: Yup.string().required("*Obrigatório"),
    internationalCostOfFreight: Yup.string().required("*Obrigatório"),
    internationalCurrencyOfOperation: Yup.string().required("*Obrigatório"),
    internationalQuotation: Yup.string().required("*Obrigatório"),
    foremen: Yup.string().required("*Obrigatório"),
    originRate: Yup.string().required("*Obrigatório"),
    totalAmountofTheAddition: Yup.string().required("*Obrigatório"),
    AdditionCurrencyOfOperation: Yup.string().required("*Obrigatório"),
    AdditionQuotation: Yup.string().required("*Obrigatório"),
    storage: Yup.string().required("*Obrigatório"),
    dispatcher: Yup.string().required("*Obrigatório"),
    sda: Yup.string().required("*Obrigatório"),
    iof: Yup.string().required("*Obrigatório"),
    afrmm: Yup.string().required("*Obrigatório"),
    ceMerchant: Yup.string().required("*Obrigatório"),
    siscomexRate: Yup.string().required("*Obrigatório"),
    totalIpi: Yup.string().required("*Obrigatório"),
    totalPis: Yup.string().required("*Obrigatório"),
    totalCofins: Yup.string().required("*Obrigatório"),
    totalIcms: Yup.string().required("*Obrigatório"),
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
          incoterm: "",
          costOfFreight: "",
          currencyOfOperation: "",
          quotation: "",
          internationalCostOfFreight: "",
          internationalCurrencyOfOperation: "",
          internationalQuotation: "",
          foremen: "",
          originRate: "",
          totalAmountofTheAddition: "",
          AdditionCurrencyOfOperation: "",
          AdditionQuotation: "",
          storage: "",
          dispatcher: "",
          sda: "",
          iof: "",
          afrmm: "",
          ceMerchant: "",
          siscomexRate: "",
          totalIpi: "",
          totalPis: "",
          totalCofins: "",
          totalIcms: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <WrapperInput>
                  <Input
                    title="Incoterm"
                    name="incoterm"
                    value={values.incoterm}
                    error={errors.incoterm}
                    touched={touched.incoterm}
                    type="select"
                  >
                    <OptionsInput value="1">1</OptionsInput>
                    <OptionsInput value="2">2</OptionsInput>
                    <OptionsInput value="3">3</OptionsInput>
                  </Input>
                </WrapperInput>
              </Row>
              <Row>
                <Title>Dados do Frete</Title>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Valor do frete"
                    name="costOfFreight"
                    value={values.costOfFreight}
                    error={errors.costOfFreight}
                    touched={touched.costOfFreight}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Moeda da operação"
                    name="currencyOfOperation"
                    value={values.currencyOfOperation}
                    error={errors.currencyOfOperation}
                    touched={touched.currencyOfOperation}
                    placeholder="Selecionar"
                    type="select"
                  >
                    <OptionsInput value="1">Dólar</OptionsInput>
                    <OptionsInput value="2">Euro</OptionsInput>
                    <OptionsInput value="3">Real</OptionsInput>
                  </Input>
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Cotação"
                    name="quotation"
                    value={values.quotation}
                    error={errors.quotation}
                    touched={touched.quotation}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperLabel>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Escolher a divisão por
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="escolher a divisão por"
                      name="row-radio-buttons-group"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="absoluteValue"
                        control={
                          <Radio checked={isBranchAlive === "absoluteValue"} />
                        }
                        label="Valor Absoluto"
                      />
                      <FormControlLabel
                        value="%VMLE"
                        control={<Radio checked={isBranchAlive === "%VMLE"} />}
                        label="%VMLE"
                      />
                    </RadioGroup>
                  </FormControl>
                </WrapperLabel>
              </Row>
              <Row>
                <Title>Seguro internacional</Title>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Valor do frete"
                    name="internationalCostOfFreight"
                    value={values.internationalCostOfFreight}
                    error={errors.internationalCostOfFreight}
                    touched={touched.internationalCostOfFreight}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Moeda da operação"
                    name="internationalCurrencyOfOperation"
                    value={values.internationalCurrencyOfOperation}
                    error={errors.internationalCurrencyOfOperation}
                    touched={touched.internationalCurrencyOfOperation}
                    placeholder="Selecionar"
                    type="select"
                  >
                    <OptionsInput value="1">Dólar</OptionsInput>
                    <OptionsInput value="2">Euro</OptionsInput>
                    <OptionsInput value="3">Real</OptionsInput>
                  </Input>
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Cotação"
                    name="internationalQuotation"
                    value={values.internationalQuotation}
                    error={errors.internationalQuotation}
                    touched={touched.internationalQuotation}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <Title>Acréscimos</Title>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Capatazias"
                    name="foremen"
                    value={values.foremen}
                    error={errors.foremen}
                    touched={touched.foremen}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Taxa de origem"
                    name="originRate"
                    value={values.originRate}
                    error={errors.originRate}
                    touched={touched.originRate}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Valor total do acréscimo"
                    name="totalAmountofTheAddition"
                    value={values.totalAmountofTheAddition}
                    error={errors.totalAmountofTheAddition}
                    touched={touched.totalAmountofTheAddition}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Moeda da operação"
                    name="AdditionCurrencyOfOperation"
                    value={values.AdditionCurrencyOfOperation}
                    error={errors.AdditionCurrencyOfOperation}
                    touched={touched.AdditionCurrencyOfOperation}
                    placeholder="Selecionar"
                    type="select"
                  >
                    <OptionsInput value="1">Dólar</OptionsInput>
                    <OptionsInput value="2">Euro</OptionsInput>
                    <OptionsInput value="3">Real</OptionsInput>
                  </Input>
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Cotação"
                    name="AdditionQuotation"
                    value={values.AdditionQuotation}
                    error={errors.AdditionQuotation}
                    touched={touched.AdditionQuotation}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <Title>Despesas Nacionais</Title>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Armazenagem"
                    name="storage"
                    value={values.storage}
                    error={errors.storage}
                    touched={touched.storage}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Despachante"
                    name="dispatcher"
                    value={values.dispatcher}
                    error={errors.dispatcher}
                    touched={touched.dispatcher}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="SDA"
                    name="sda"
                    value={values.sda}
                    error={errors.sda}
                    touched={touched.sda}
                    placeholder="R$ 0.000,00"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <Title>Adicionar nova despesa (FAZER)</Title>
              </Row>
              <Row>
                <Title>Despesas Aduaneiras</Title>
              </Row>
              <Row>
                <WrapperInputByTwo>
                  <Input
                    title="IOF"
                    name="iof"
                    value={values.iof}
                    error={errors.iof}
                    touched={touched.iof}
                    placeholder="Marítimo"
                  />
                </WrapperInputByTwo>
                <WrapperInputByTwo>
                  <Input
                    title="AFRMM"
                    name="afrmm"
                    value={values.afrmm}
                    error={errors.afrmm}
                    touched={touched.afrmm}
                    placeholder="R$0.000,00"
                  />
                </WrapperInputByTwo>
                <WrapperInputByTwo>
                  <Input
                    title="CE Mercante"
                    name="ceMerchant"
                    value={values.ceMerchant}
                    error={errors.ceMerchant}
                    touched={touched.ceMerchant}
                    placeholder="R$0.000,00"
                  />
                </WrapperInputByTwo>
                <WrapperInputByTwo>
                  <Input
                    title="Taxa Siscomex"
                    name="siscomexRate"
                    value={values.siscomexRate}
                    error={errors.siscomexRate}
                    touched={touched.siscomexRate}
                    placeholder="R$0.000,00"
                  />
                </WrapperInputByTwo>
              </Row>
              <Row>
                <Title>Cálculo dos impostos</Title>
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
                <WrapperInputByTwo>
                  <Input
                    title="Total do IPI"
                    name="totalIpi"
                    value={values.totalIpi}
                    error={errors.totalIpi}
                    touched={touched.totalIpi}
                    placeholder="R$0.000,00"
                  />
                </WrapperInputByTwo>
                <WrapperInputByTwo>
                  <Input
                    title="Total do PIS"
                    name="totalPis"
                    value={values.totalPis}
                    error={errors.totalPis}
                    touched={touched.totalPis}
                    placeholder="R$0.000,00"
                  />
                </WrapperInputByTwo>
                <WrapperInputByTwo>
                  <Input
                    title="Total do COFINS"
                    name="totalCofins"
                    value={values.totalCofins}
                    error={errors.totalCofins}
                    touched={touched.totalCofins}
                    placeholder="R$0.000,00"
                  />
                </WrapperInputByTwo>
                <WrapperInputByTwo>
                  <Input
                    title="Total do ICMS"
                    name="totalIcms"
                    value={values.totalIcms}
                    error={errors.totalIcms}
                    touched={touched.totalIcms}
                    placeholder="R$0.000,00"
                  />
                </WrapperInputByTwo>
              </Row>
              <Row>
                <Title>Proforme Invoice</Title>
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
            </FormShell>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default Expenditure;
