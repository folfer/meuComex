import React, { useEffect, useRef } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../../components/Input";
import { maskCPF, maskDateBird, phoneMask } from "../../../../utils/masks";
import api from "../../../../services/api";

import {
  Container,
  Description,
  Row,
  FormFormik,
  WrapperInput,
  Title,
  WrapperInputTwoItens,
} from "./styles";
import { useAuth } from "../../../../hooks/useContext";
import { AiOutlineCalendar } from "react-icons/ai";

interface Props {
  handleIncrement: () => void;
}

const PersonalData: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction, setResponseUser } = useAuth();

  useEffect(() => {
    setRegisterState("Dados pessoais");
  }, [setRegisterState]);

  const validationFormUserSchema = Yup.object().shape({
    fullName: Yup.string().required("*Obrigatório"),
    nickname: Yup.string().required("*Obrigatório"),
    email: Yup.string().required("*Obrigatório").email("*E-mail inválido"),
    cpf: Yup.string().required("*Obrigatório"),
    birthDate: Yup.string().required("*Obrigatório"),
    phoneNumber: Yup.string().required("*Obrigatório"),
    password: Yup.string().required("*Obrigatório"),
    confirmPassword: Yup.string().when("password", {
      is: (val: any) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  const handleRegister = (eventInformation: any) => {
    delete eventInformation.confirmPassword;

    api
      .post("auth/register", eventInformation)
      .then((response) => {
        setResponseUser(response.data);
        handleIncrement();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <Description>
        Complete seu cadastro para utilizar todos os recursos da plataforma 🤓
      </Description>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(eventInformation) => {
          personalDataFunction(eventInformation);
          handleRegister(eventInformation);
        }}
        enableReinitialize
        initialValues={{
          fullName: "",
          email: "",
          nickname: "",
          cpf: "",
          birthDate: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <WrapperInputTwoItens>
                  <Input
                    title="Nome Completo"
                    name="fullName"
                    value={values.fullName}
                    error={errors.fullName}
                    touched={touched.fullName}
                    placeholder="Nome"
                  />
                </WrapperInputTwoItens>
                <WrapperInputTwoItens>
                  <Input
                    title="Como prefere ser chamado?"
                    name="nickname"
                    value={values.nickname}
                    error={errors.nickname}
                    touched={touched.nickname}
                    placeholder="Apelido"
                  />
                </WrapperInputTwoItens>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="CPF"
                    name="cpf"
                    mask={maskCPF}
                    value={values.cpf}
                    error={errors.cpf}
                    touched={touched.cpf}
                    placeholder="000.000.000-00"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Aniversário"
                    name="birthDate"
                    mask={maskDateBird}
                    value={values.birthDate}
                    error={errors.birthDate}
                    touched={touched.birthDate}
                    placeholder="00/00/0000"
                    icon={() => <AiOutlineCalendar color="#2B3674" size={19} />}
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Telefone / Celular"
                    name="phoneNumber"
                    mask={phoneMask}
                    value={values.phoneNumber}
                    error={errors.phoneNumber}
                    touched={touched.phoneNumber}
                    placeholder="(71) 99213-6545"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="E-mail"
                    name="email"
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                    placeholder="email@email.com"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Senha"
                    name="password"
                    value={values.password}
                    error={errors.password}
                    touched={touched.password}
                    placeholder="Digite sua senha"
                    type="password"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Confirme sua senha"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    placeholder="Digite sua senha novamente"
                    type="password"
                  ></Input>
                </WrapperInput>
              </Row>
            </FormShell>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default PersonalData;
