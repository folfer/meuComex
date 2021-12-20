import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { FieldArray, Formik, getIn } from "formik";
import * as Yup from "yup";

import {
  Container,
  Description,
  Row,
  FormFormik,
  WrapperInput,
  OptionsInput,
  Title,
  WrapperInputTwoItens,
  AddBranch,
  WrapperPlus,
  WrapperLabel,
  WrapperInputFull,
  LabelForInput,
  SearchText,
  InputFile,
} from "./styles";
import { AiOutlineCalendar, AiOutlinePlus } from "react-icons/ai";
import { useAuth } from "../../../hooks/useContext";
import { Input } from "../../../components/Input";
import { maskCPF, maskDateBird, phoneMask } from "../../../utils/masks";
import StatusBar from "./StatusBar";
import { MdFilePresent, MdInfoOutline } from "react-icons/md";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface Props {
  handleIncrement: () => void;
}

const Closing: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();
  const [newExpenditureExist, setNewExpenditureExist] =
    useState<boolean>(false);
  const [isNewExp, setIsNewExp] = useState("no");
  const [isActiveNewExp, setIsActiveExp] = useState<boolean>(true);

  const [avaliation, setAvaliation] = useState("no");
  const [isActiveAvaliation, setIsActiveAvaliation] = useState<boolean>(true);
  const [isAliveFile, setIsAliveFile] = useState<any>(false);
  const [fileArray, setFileArray] = useState<any>([]);

  const [isAliveFileTwo, setIsAliveFileTwo] = useState<any>(false);
  const [fileArrayTwo, setFileArrayTwo] = useState<any>([]);

  useEffect(() => {
    setIsNewExp("no");
    setAvaliation("no");
    setRegisterState("Dados pessoais");
  }, []);

  useEffect(() => {
    if (isNewExp === "Yes") {
      setIsActiveExp(!isActiveNewExp);
    } else {
      setIsActiveExp(!isActiveNewExp);
    }
  }, [isNewExp]);

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

  useEffect(() => {
    if (avaliation === "Yes") {
      setIsActiveAvaliation(!isActiveAvaliation);
    } else {
      setIsActiveAvaliation(!isActiveAvaliation);
    }
  }, [avaliation]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsNewExp((event.target as HTMLInputElement).value);
  };

  const handleChangeAvaliation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAvaliation((event.target as HTMLInputElement).value);
  };

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const validationFormUserSchema = Yup.object().shape({
    predictedCost: Yup.string().required("*Obrigatório"),
    realCost: Yup.string().required("*Obrigatório"),
    ipi: Yup.string().required("*Obrigatório"),
    pis: Yup.string().required("*Obrigatório"),
    cofins: Yup.string().required("*Obrigatório"),
    icms: Yup.string().required("*Obrigatório"),
    commodity: Yup.string().required("*Obrigatório"),
    detailsCommodity: Yup.string().required("*Obrigatório"),
    newExpenditures: Yup.array().of(
      Yup.object().shape({
        newExpenditure: Yup.string().required("*Obrigatório"),
        nameExpenditure: Yup.string().required("*Obrigatório"),
      })
    ),
  });

  return (
    <Container>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(e) => {
          handleIncrement();
        }}
        enableReinitialize
        initialValues={{
          predictedCost: "",
          realCost: "",
          ipi: "",
          pis: "",
          cofins: "",
          icms: "",
          commodity: "",
          detailsCommodity: "",
          newExpenditures: [
            {
              newExpenditure: "",
              nameExpenditure: "",
            },
          ],
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <Title>Validação dos custos Finais</Title>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Custo Previsto"
                    name="predictedCost"
                    value={values.predictedCost}
                    error={errors.predictedCost}
                    touched={touched.predictedCost}
                    placeholder="R$0.000,00"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Custo Real"
                    name="realCost"
                    value={values.realCost}
                    error={errors.realCost}
                    touched={touched.realCost}
                    placeholder="R$0.000,00"
                  />
                </WrapperInput>
                <WrapperInput>
                  <StatusBar
                    color="#E01A1A"
                    backgroundColor="#fadddd"
                    borderColor="#E01A1A"
                    text="Pendência cambial"
                  >
                    <MdInfoOutline color="#E01A1A" size={18} />
                  </StatusBar>
                </WrapperInput>
              </Row>
              <Row>
                <Title>Detalhamento dos impostos</Title>
              </Row>
              <Row>
                <WrapperInputTwoItens>
                  <Input
                    title="IPI"
                    name="ipi"
                    value={values.ipi}
                    error={errors.ipi}
                    touched={touched.ipi}
                    placeholder=""
                  />
                </WrapperInputTwoItens>
                <WrapperInputTwoItens>
                  <Input
                    title="PIS"
                    name="pis"
                    value={values.pis}
                    error={errors.pis}
                    touched={touched.pis}
                    placeholder=""
                  />
                </WrapperInputTwoItens>
              </Row>
              <Row>
                <WrapperInputTwoItens>
                  <Input
                    title="COFINS"
                    name="cofins"
                    value={values.cofins}
                    error={errors.cofins}
                    touched={touched.cofins}
                    placeholder=""
                  />
                </WrapperInputTwoItens>
                <WrapperInputTwoItens>
                  <Input
                    title="ICMS"
                    name="icms"
                    value={values.icms}
                    error={errors.icms}
                    touched={touched.icms}
                    placeholder=""
                  />
                </WrapperInputTwoItens>
              </Row>
              <Row>
                <WrapperLabel>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Possui nova despesa?
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="Possui nova despesa?"
                      name="row-radio-buttons-group"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio checked={isNewExp === "yes"} />}
                        label="Sim"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio checked={isNewExp === "no"} />}
                        label="Não"
                      />
                    </RadioGroup>
                  </FormControl>
                </WrapperLabel>
              </Row>
              {isActiveNewExp && (
                <FieldArray name="newExpenditures">
                  {({ remove, push }) =>
                    values.newExpenditures.map((newExpenditures, index) => (
                      <>
                        <Row>
                          <WrapperInputTwoItens>
                            <Input
                              title="Nome da despesa"
                              name={`newExpenditures[${index}].nameExpenditure`}
                              value={newExpenditures.nameExpenditure}
                              error={getIn(
                                errors,
                                `newExpenditures.${index}.nameExpenditure`
                              )}
                              touched={getIn(
                                touched,
                                `newExpenditures.${index}.nameExpenditure`
                              )}
                            ></Input>
                          </WrapperInputTwoItens>
                          <WrapperInputTwoItens>
                            <Input
                              title="Despesa"
                              name={`newExpenditures[${index}].newExpenditure`}
                              value={newExpenditures.newExpenditure}
                              error={getIn(
                                errors,
                                `newExpenditures.${index}.newExpenditure`
                              )}
                              touched={getIn(
                                touched,
                                `newExpenditures.${index}.newExpenditure`
                              )}
                              placeholder="R$0.000,00"
                            ></Input>
                          </WrapperInputTwoItens>
                        </Row>
                        {(values.newExpenditures.length - 1 === index ||
                          values.newExpenditures.length === 0) && (
                          <Row>
                            <AddBranch
                              onClick={() => {
                                push({
                                  newExpenditure: "",
                                  nameExpenditure: "",
                                });
                              }}
                            >
                              <AiOutlinePlus size={18} /> Adicionar nova despesa
                            </AddBranch>
                          </Row>
                        )}
                      </>
                    ))
                  }
                </FieldArray>
              )}
              <Row>
                <WrapperLabel>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Avaliação do transporte
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="Possui nova despesa?"
                      name="row-radio-buttons-group"
                      onChange={handleChangeAvaliation}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio checked={avaliation === "yes"} />}
                        label="Chegou em bom estado"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio checked={avaliation === "no"} />}
                        label="Chegou com avaria/perda"
                      />
                    </RadioGroup>
                  </FormControl>
                </WrapperLabel>
              </Row>
              <Row>
                <WrapperInputFull>
                  <Input
                    title="Selecionar mercadorias"
                    name="commodity"
                    value={values.commodity}
                    error={errors.commodity}
                    touched={touched.commodity}
                    type="select"
                  >
                    <OptionsInput value="1">1</OptionsInput>
                    <OptionsInput value="2">2</OptionsInput>
                    <OptionsInput value="3">3</OptionsInput>
                  </Input>
                </WrapperInputFull>
              </Row>
              <Row>
                <WrapperInputFull>
                  <Input
                    title="Detalhamento da avaria"
                    name="detailsCommodity"
                    value={values.detailsCommodity}
                    error={errors.detailsCommodity}
                    touched={touched.detailsCommodity}
                    type="textarea"
                  />
                </WrapperInputFull>
              </Row>
              <Row>
                <Title>Fotos da mercadoria danificada</Title>
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
                <Title>Fotos da mercadoria danificada</Title>
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

export default Closing;
