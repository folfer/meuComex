import React, { useEffect, useRef } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../components/Input";
import { maskCPF, maskDateBird, phoneMask } from "../../../utils/masks";

import {
  Container,
  Row,
  FormFormik,
  WrapperInput,
  OptionsInput,
  WrapperInputTwoItens,
  WrapperLabel,
  LabelForInput,
  SearchText,
  InputFile,
  Text,
  WrapperCheckBox,
  WrapperInputCheck,
  WrapperInputThreeItens,
} from "./styles";

import { useAuth } from "../../../hooks/useContext";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdFilePresent } from "react-icons/md";

interface Props {
  handleIncrement: () => void;
}

export const ShippingDetails: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();

  useEffect(() => {
    setRegisterState("Dados de embarque");
  }, []);

  const validationFormUserSchema = Yup.object().shape({
    invoiceNumber: Yup.string().required("*Obrigatório"),
    productionTime: Yup.string().required("*Obrigatório"),
    deadline: Yup.string().required("*Obrigatório"),
    modeOfTransport: Yup.string().required("*Obrigatório"),
    paymentTerm: Yup.string().required("*Obrigatório"),
    paymentMethod: Yup.string().required("*Obrigatório"),
    boardingPlace: Yup.string().required("*Obrigatório"),
    placeOfArrivalInBrazil: Yup.string().required("*Obrigatório"),
    kindOfPacking: Yup.string().required("*Obrigatório"),
    typeOfCargo: Yup.string().required("*Obrigatório"),
    declarationType: Yup.string().required("*Obrigatório"),
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
          invoiceNumber: "",
          productionTime: "",
          deadline: "",
          modeOfTransport: "",
          paymentTerm: "",
          paymentMethod: "",
          boardingPlace: "",
          placeOfArrivalInBrazil: "",
          exchangeContract: "",
          kindOfPacking: "",
          typeOfCargo: "",
          declarationType: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <WrapperInput>
                  <Input
                    title="Número da invoice"
                    name="invoiceNumber"
                    value={values.invoiceNumber}
                    error={errors.invoiceNumber}
                    touched={touched.invoiceNumber}
                    placeholder="XY3595LAMB86"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Prazo de produção"
                    name="productionTime"
                    mask={maskDateBird}
                    value={values.productionTime}
                    error={errors.productionTime}
                    touched={touched.productionTime}
                    placeholder="00/00/0000"
                    icon={() => <AiOutlineCalendar color="#2B3674" size={19} />}
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Prazo de entrega"
                    name="deadline"
                    mask={maskDateBird}
                    value={values.deadline}
                    error={errors.deadline}
                    touched={touched.deadline}
                    placeholder="00/00/0000"
                    icon={() => <AiOutlineCalendar color="#2B3674" size={19} />}
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Modalidade de transporte"
                    name="modeOfTransport"
                    value={values.modeOfTransport}
                    error={errors.modeOfTransport}
                    touched={touched.modeOfTransport}
                    type="select"
                  >
                    <OptionsInput value="Dinheiro">Carro</OptionsInput>
                    <OptionsInput value="Crédito">Bicicleta</OptionsInput>
                    <OptionsInput value="Débito">Navio</OptionsInput>
                  </Input>
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Prazo de Pagamento"
                    name="paymentTerm"
                    mask={maskDateBird}
                    value={values.paymentTerm}
                    error={errors.paymentTerm}
                    touched={touched.paymentTerm}
                    placeholder="00/00/0000"
                    icon={() => <AiOutlineCalendar color="#2B3674" size={19} />}
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Modalidade de pagamento"
                    name="paymentMethod"
                    value={values.paymentMethod}
                    error={errors.paymentMethod}
                    touched={touched.paymentMethod}
                    type="select"
                  >
                    <OptionsInput value="Débito">Débito</OptionsInput>
                    <OptionsInput value="Crédito">Crédtio</OptionsInput>
                    <OptionsInput value="Pix">Pix</OptionsInput>
                  </Input>
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInputTwoItens>
                  <Input
                    title="Local de embarque"
                    name="boardingPlace"
                    value={values.boardingPlace}
                    error={errors.boardingPlace}
                    touched={touched.boardingPlace}
                    type="select"
                  >
                    <OptionsInput value="Porto">Porto</OptionsInput>
                    <OptionsInput value="Rodoviária">Rodoviária</OptionsInput>
                    <OptionsInput value="Aeroporto">Aeroporto</OptionsInput>
                  </Input>
                </WrapperInputTwoItens>
                <WrapperInputTwoItens>
                  <Input
                    title="Local de chegada no Brasil"
                    name="placeOfArrivalInBrazil"
                    value={values.placeOfArrivalInBrazil}
                    error={errors.placeOfArrivalInBrazil}
                    touched={touched.placeOfArrivalInBrazil}
                    type="select"
                  >
                    <OptionsInput value="Porto de Santos">
                      Porto de Santos
                    </OptionsInput>
                    <OptionsInput value="Porto de Salvador">
                      Porto de Salvador
                    </OptionsInput>
                    <OptionsInput value="Guarulhos">Guarulhos</OptionsInput>
                  </Input>
                </WrapperInputTwoItens>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Tipo de embalagem"
                    name="kindOfPacking"
                    value={values.kindOfPacking}
                    error={errors.kindOfPacking}
                    touched={touched.kindOfPacking}
                    type="select"
                  >
                    <OptionsInput value="Plástico">Plástico</OptionsInput>
                    <OptionsInput value="Papelão">Papelão</OptionsInput>
                    <OptionsInput value="Container">Container</OptionsInput>
                  </Input>
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Tipo de carga"
                    name="typeOfCargo"
                    value={values.typeOfCargo}
                    error={errors.typeOfCargo}
                    touched={touched.typeOfCargo}
                    type="select"
                  >
                    <OptionsInput value="Frágil">Frágil</OptionsInput>
                    <OptionsInput value="Pesado">Pesado</OptionsInput>
                    <OptionsInput value="Commodities">Commodities</OptionsInput>
                  </Input>
                </WrapperInput>
              </Row>
              <Row>
                <WrapperInputThreeItens>
                  <Input
                    title="Tipo de declaração"
                    name="declarationType"
                    value={values.declarationType}
                    error={errors.declarationType}
                    touched={touched.declarationType}
                    type="select"
                  >
                    <OptionsInput value="Simples">Simples</OptionsInput>
                    <OptionsInput value="Composta">Composta</OptionsInput>
                    <OptionsInput value="Complexa">Complexa</OptionsInput>
                  </Input>
                </WrapperInputThreeItens>
                <WrapperInputCheck>
                  <WrapperCheckBox>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Possui LI antecipada"
                      />
                    </FormGroup>
                  </WrapperCheckBox>
                </WrapperInputCheck>
              </Row>
              <Row>
                <WrapperInputThreeItens>
                  <Input
                    title="Motivo da importação"
                    name="typeOfCargo"
                    value={values.typeOfCargo}
                    error={errors.typeOfCargo}
                    touched={touched.typeOfCargo}
                    type="select"
                  >
                    <OptionsInput value="Frágil">Frágil</OptionsInput>
                    <OptionsInput value="Pesado">Pesado</OptionsInput>
                    <OptionsInput value="Commodities">Commodities</OptionsInput>
                  </Input>
                </WrapperInputThreeItens>
                <WrapperInputCheck>
                  <WrapperCheckBox>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Sem cobertura câmbial"
                      />
                    </FormGroup>
                  </WrapperCheckBox>
                </WrapperInputCheck>
              </Row>
            </FormShell>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default ShippingDetails;
