import { useEffect, useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Modal from "react-modal";
import { useAuth } from "../../../hooks/useContext";
import {
  Container,
  Row,
  FormFormik,
  WrapperInput,
  OptionsInput,
  WrapperInputOneItens,
} from "./styles";
import { Input } from "../../../components/Input";
import FormShell from "../FormShell";

interface NewContributorsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  clickFunction?: () => void;
}

export function NewContributorsModal({
  isOpen,
  onRequestClose,
  clickFunction,
}: NewContributorsModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();

  useEffect(() => {
    setRegisterState("Adicionar Colaborador");
  }, []);

  const validationFormUserSchema = Yup.object().shape({
    name: Yup.string().required("*Obrigatório"),
    nickName: Yup.string().required("*Obrigatório"),
    userLevel: Yup.string().required("*Obrigatório"),
    email: Yup.string().required("*Obrigatório"),
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-contributors-conten"
    >
      <Container>
        <Formik
          validationSchema={validationFormUserSchema}
          onSubmit={(e) => {
            personalDataFunction(e);
          }}
          enableReinitialize
          initialValues={{
            name: "",
            nickName: "",
            userLevel: "Selecionar",
            email: "",
          }}
        >
          {({ errors, values, touched, initialValues }) => (
            <FormFormik ref={formRef}>
              <FormShell clickFunction={() => 0}>
                <Row>
                  <WrapperInputOneItens>
                    <Input
                      title="Nome Completo"
                      name="name"
                      value={values.name}
                      error={errors.name}
                      touched={touched.name}
                      placeholder="Nome e sobrenome"
                    />
                  </WrapperInputOneItens>
                  <WrapperInput>
                    <Input
                      title="Como prefere ser chamado?"
                      name="nickName"
                      value={values.nickName}
                      error={errors.nickName}
                      touched={touched.nickName}
                      placeholder="Tratamento"
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
                      placeholder="seuemail@empresa.com.br"
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      title="Nível de usuário"
                      name="userLevel"
                      value={values.userLevel}
                      error={errors.userLevel}
                      touched={touched.userLevel}
                      type="select"
                    >
                      <OptionsInput value="Administrador">
                        Unidade 1
                      </OptionsInput>
                      <OptionsInput value="Intermediário">
                        Unidade 2
                      </OptionsInput>
                      <OptionsInput value="Básico">Unidade 3</OptionsInput>
                    </Input>
                  </WrapperInput>
                </Row>
              </FormShell>
            </FormFormik>
          )}
        </Formik>
      </Container>
    </Modal>
  );
}
