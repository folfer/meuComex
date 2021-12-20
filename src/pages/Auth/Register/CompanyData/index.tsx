import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { FieldArray, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../../components/Input";
import { maskCEP, maskCNPJ, phoneMask } from "../../../../utils/masks";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AiOutlinePlus } from "react-icons/ai";

import {
  Container,
  Row,
  FormFormik,
  WrapperInput,
  OptionsInput,
  WrapperLabel,
  AddBranch,
  Title,
  Description,
} from "./styles";
import { useAuth } from "../../../../hooks/useContext";
import api from "../../../../services/api";

interface Props {
  handleIncrement: () => void;
}

const CompanyData: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction, responseUser, setCompanyID } =
    useAuth();
  const [isBranchAlive, setIsBranchAlive] = useState("no");
  const [isActiveBranch, setIsActiveBranch] = useState<boolean>(true);

  useEffect(() => {
    setIsBranchAlive("no");
    setRegisterState("Dados da empresa");
  }, []);

  useEffect(() => {
    if (isBranchAlive === "yes") {
      setIsActiveBranch(!isActiveBranch);
    } else {
      setIsActiveBranch(!isActiveBranch);
    }
  }, [isBranchAlive]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBranchAlive((event.target as HTMLInputElement).value);
  };

  const handleRegisterCompany = (dataInformation: any) => {
    const { availableAccesses } = dataInformation;
    const dataUID = responseUser.user.firebase_uid;

    dataInformation.firebase_uid = dataUID;

    const intAvailableAccesses = parseInt(availableAccesses);

    dataInformation.availableAccesses = intAvailableAccesses;
    api
      .post("company/create", dataInformation)
      .then((response: any) => {
        handleIncrement();
        setCompanyID(response.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(dataUID);
  };

  const validationFormUserSchema = Yup.object().shape({
    corporateName: Yup.string().required("*Obrigatório"),
    cnpj: Yup.string().required("*Obrigatório"),
    stateRegistration: Yup.string().required("*Obrigatório"),
    postalCode: Yup.string().required("*Obrigatório"),
    addressStreet: Yup.string().required("*Obrigatório"),
    addressNumber: Yup.string().required("*Obrigatório"),
    district: Yup.string().required("*Obrigatório"),
    city: Yup.string().required("*Obrigatório"),
    country: Yup.string().required("*Obrigatório"),
    plan: Yup.string().required("*Obrigatório"),
    paymentMethod: Yup.string().required("*Obrigatório"),
    availableAccesses: Yup.number().required("*Obrigatório"),
    contactEmail: Yup.string()
      .required("*Obrigatório")
      .email("*E-mail inválido"),
    contactPhone: Yup.string().required("*Obrigatório"),
    legalResponsible: Yup.string()
      .required("*Obrigatório")
      .email("*E-mail inválido"),
  });

  return (
    <Container>
      <Title>Cadastro</Title>
      <Description>
        Muito bem! 😎 Agora informe o plano, a forma de pagamento e os dados da
        empresa.
      </Description>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(dataInformation) => {
          personalDataFunction(dataInformation);
          handleRegisterCompany(dataInformation);
        }}
        enableReinitialize
        initialValues={{
          corporateName: "",
          cnpj: "",
          stateRegistration: "",
          postalCode: "",
          addressStreet: "",
          addressNumber: "",
          district: "",
          city: "",
          country: "",
          plan: "1",
          paymentMethod: "creditCard",
          availableAccesses: 5,
          contactEmail: "",
          contactPhone: "",
          legalResponsible: "",
          branches: [
            {
              corporateName: "",
              cnpj: "",
              stateRegistration: "",
              postalCode: "",
              addressStreet: "",
              addressNumber: "",
              district: "",
              city: "",
              country: "",
            },
          ],
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <WrapperInput>
                  <Input
                    title="Razão Social"
                    name="corporateName"
                    value={values.corporateName}
                    error={errors.corporateName}
                    touched={touched.corporateName}
                    placeholder="Razão Social"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="CNPJ"
                    name="cnpj"
                    mask={maskCNPJ}
                    value={values.cnpj}
                    error={errors.cnpj}
                    touched={touched.cnpj}
                    placeholder="000.00.000.0/000-0"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Inscrição Estadual"
                    name="stateRegistration"
                    mask={maskCNPJ}
                    value={values.stateRegistration}
                    error={errors.stateRegistration}
                    touched={touched.stateRegistration}
                    placeholder="Inscrição Estadual"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="CEP"
                    name="postalCode"
                    mask={maskCEP}
                    value={values.postalCode}
                    error={errors.postalCode}
                    touched={touched.postalCode}
                    placeholder="00000-000"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Endereço Completo"
                    name="addressStreet"
                    value={values.addressStreet}
                    error={errors.addressStreet}
                    touched={touched.addressStreet}
                    placeholder="Endereço Completo"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Número"
                    name="addressNumber"
                    type="number"
                    value={values.addressNumber}
                    error={errors.addressNumber}
                    touched={touched.addressNumber}
                    placeholder="000"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Bairro"
                    name="district"
                    value={values.district}
                    error={errors.district}
                    touched={touched.district}
                    placeholder="Bairro"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Cidade"
                    name="city"
                    value={values.city}
                    error={errors.city}
                    touched={touched.city}
                    placeholder="Cidade"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="País"
                    name="country"
                    value={values.country}
                    error={errors.country}
                    touched={touched.country}
                    placeholder="País"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Plano"
                    name="plan"
                    value={values.plan}
                    error={errors.plan}
                    touched={touched.plan}
                    placeholder="Selecionar"
                    type="select"
                  >
                    <OptionsInput value="1">Primeiro Plano</OptionsInput>
                    <OptionsInput value="2">Segundo Plano</OptionsInput>
                    <OptionsInput value="3">Terceiro Plano</OptionsInput>
                  </Input>
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Forma de pagamento"
                    name="paymentMethod"
                    value={values.paymentMethod}
                    error={errors.paymentMethod}
                    touched={touched.paymentMethod}
                    placeholder="Selecionar"
                    type="select"
                  >
                    <OptionsInput value="creditCard">
                      Cartão Crédito
                    </OptionsInput>
                    <OptionsInput value="debitCard">Cartão Débito</OptionsInput>
                    <OptionsInput value="pix">PIX</OptionsInput>
                    <OptionsInput value="ticket">Boleto</OptionsInput>
                  </Input>
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Acessos Disponíveis"
                    name="availableAccesses"
                    value={values.availableAccesses}
                    error={errors.availableAccesses}
                    touched={touched.availableAccesses}
                    placeholder="Selecionar"
                    type="select"
                  >
                    <OptionsInput value={5}>5 Acessos</OptionsInput>
                    <OptionsInput value={10}>10 Acessos</OptionsInput>
                    <OptionsInput value={15}>15 Acessos</OptionsInput>
                    <OptionsInput value={20}>20 Acessos</OptionsInput>
                    <OptionsInput value={25}>25 Acessos</OptionsInput>
                  </Input>
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="E-mail de contato"
                    name="contactEmail"
                    value={values.contactEmail}
                    error={errors.contactEmail}
                    touched={touched.contactEmail}
                    placeholder="seuemail@empresa.com.br"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Telefone / Celular"
                    name="contactPhone"
                    mask={phoneMask}
                    value={values.contactPhone}
                    error={errors.contactPhone}
                    touched={touched.contactPhone}
                    placeholder="00 0 0000-0000"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Responsável Legal"
                    name="legalResponsible"
                    value={values.legalResponsible}
                    error={errors.legalResponsible}
                    touched={touched.legalResponsible}
                    placeholder="seuemail@empresa.com.br"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperLabel>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Possui Filial?</FormLabel>
                    <RadioGroup
                      row
                      aria-label="Possui Filial?"
                      name="row-radio-buttons-group"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio checked={isBranchAlive === "yes"} />}
                        label="Sim"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio checked={isBranchAlive === "no"} />}
                        label="Não"
                      />
                    </RadioGroup>
                  </FormControl>
                </WrapperLabel>
              </Row>
              {isActiveBranch ? (
                <>
                  <FieldArray name="branches">
                    {({ remove, push }) =>
                      values.branches.map((branch, index) => (
                        <>
                          <Row>
                            <WrapperInput>
                              <Input
                                title="Razão Social"
                                name={`branches[${index}].corporateName`}
                                value={values.corporateName}
                                error={errors.corporateName}
                                touched={touched.corporateName}
                                placeholder="Razão Social"
                              />
                            </WrapperInput>
                            <WrapperInput>
                              <Input
                                title="CNPJ"
                                name={`branches[${index}].cnpj`}
                                value={values.cnpj}
                                error={errors.cnpj}
                                touched={touched.cnpj}
                                placeholder="CNPJ"
                                mask={maskCNPJ}
                              />
                            </WrapperInput>
                            <WrapperInput>
                              <Input
                                title="Inscrição Estadual"
                                name={`branches[${index}].stateRegistration`}
                                value={values.stateRegistration}
                                error={errors.stateRegistration}
                                touched={touched.stateRegistration}
                                placeholder="Inscrição Estadual"
                                mask={maskCNPJ}
                              />
                            </WrapperInput>
                          </Row>
                          <Row>
                            <WrapperInput>
                              <Input
                                title="CEP"
                                name={`branches[${index}].postalCode`}
                                mask={maskCEP}
                                value={values.postalCode}
                                error={errors.postalCode}
                                touched={touched.postalCode}
                                placeholder="CEP"
                              />
                            </WrapperInput>
                            <WrapperInput>
                              <Input
                                title="Endereço Completo"
                                name={`branches[${index}].addressStreet`}
                                value={values.addressStreet}
                                error={errors.addressStreet}
                                touched={touched.addressStreet}
                                placeholder="Endereço Completo"
                              />
                            </WrapperInput>
                            <WrapperInput>
                              <Input
                                title="Número"
                                name={`branches[${index}].addressNumber`}
                                value={values.addressNumber}
                                error={errors.addressNumber}
                                touched={touched.addressNumber}
                                placeholder="Número"
                                type="number"
                              />
                            </WrapperInput>
                          </Row>
                          <Row>
                            <WrapperInput>
                              <Input
                                title="Bairro"
                                name={`branches[${index}].district`}
                                value={values.district}
                                error={errors.district}
                                touched={touched.district}
                                placeholder="Bairro"
                              />
                            </WrapperInput>
                            <WrapperInput>
                              <Input
                                title="Cidade"
                                name={`branches[${index}].city`}
                                value={values.city}
                                error={errors.city}
                                touched={touched.city}
                                placeholder="Cidade"
                              />
                            </WrapperInput>
                            <WrapperInput>
                              <Input
                                title="País"
                                name={`branches[${index}].country`}
                                value={values.country}
                                error={errors.country}
                                touched={touched.country}
                                placeholder="País"
                              />
                            </WrapperInput>
                          </Row>
                          {values.branches.length - 1 === index && (
                            <Row>
                              <AddBranch
                                onClick={() =>
                                  push({
                                    corporateName: "",
                                    cnpj: "",
                                    stateRegistration: "",
                                    postalCode: "",
                                    addressStreet: "",
                                    addressNumber: "",
                                    district: "",
                                    city: "",
                                    country: "",
                                  })
                                }
                              >
                                <AiOutlinePlus size={18} /> Adicionar Filial
                              </AddBranch>
                            </Row>
                          )}
                        </>
                      ))
                    }
                  </FieldArray>
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

export default CompanyData;
