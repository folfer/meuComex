import React, { useEffect, useRef } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../components/Input";

import {
  Container,
  Row,
  FormFormik,
  WrapperInput,
  OptionsInput,
  WrapperCheckBox,
  WrapperInputOneItens,
} from "./styles";
import { useAuth } from "../../../hooks/useContext";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

interface Props {
  handleIncrement: () => void;
}

const Identification: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();

  useEffect(() => {
    setRegisterState("Identificação");
  }, []);

  const validationFormUserSchema = Yup.object().shape({
    operationNumber: Yup.string().required("*Obrigatório"),
    destinationUnit: Yup.string().required("*Obrigatório"),
    selectSubsidiary: Yup.string().required("*Obrigatório"),
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
          operationNumber: "",
          destinationUnit: "Selecionar",
          selectSubsidiary: "Selecionar",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <WrapperInput>
                  <Input
                    title="Número da operação"
                    name="operationNumber"
                    value={values.operationNumber}
                    error={errors.operationNumber}
                    touched={touched.operationNumber}
                    placeholder="XY3595LAMB86"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Nível de usuário"
                    name="destinationUnit"
                    value={values.destinationUnit}
                    error={errors.destinationUnit}
                    touched={touched.destinationUnit}
                    type="select"
                  >
                    <OptionsInput value="Administrador">Unidade 1</OptionsInput>
                    <OptionsInput value="Intermediário">Unidade 2</OptionsInput>
                    <OptionsInput value="Básico">Unidade 3</OptionsInput>
                  </Input>
                </WrapperInput>
                <WrapperCheckBox>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Vincular filial a operação"
                    />
                  </FormGroup>
                </WrapperCheckBox>
              </Row>
              <Row>
                <WrapperInputOneItens>
                  <Input
                    title="Selecionar Filial"
                    name="selectSubsidiary"
                    value={values.selectSubsidiary}
                    error={errors.selectSubsidiary}
                    touched={touched.selectSubsidiary}
                    type="select"
                  >
                    <OptionsInput value="Administrador">Unidade 1</OptionsInput>
                    <OptionsInput value="Intermediário">Unidade 2</OptionsInput>
                    <OptionsInput value="Básico">Unidade 3</OptionsInput>
                  </Input>
                </WrapperInputOneItens>
              </Row>
            </FormShell>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default Identification;
