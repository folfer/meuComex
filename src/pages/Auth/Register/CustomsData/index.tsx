import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../../components/Input";
import { maskDateBird } from "../../../../utils/masks";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

import {
  Container,
  Row,
  FormFormik,
  WrapperInput,
  Title,
  WrapperActivationBox,
  TitleActivation,
  ValueActivation,
  DescriptionActivation,
  Border,
  WrapperCheckBox,
  Description,
  TitlePage,
} from "./styles";
import { useAuth } from "../../../../hooks/useContext";
import { AiOutlineCalendar } from "react-icons/ai";
import api from "../../../../services/api";

interface Props {
  handleIncrement: () => void;
}

const CustomsData: React.FC<Props> = ({ handleIncrement }) => {
  const { setRegisterState, personalDataFunction, companyId } = useAuth();
  const formRef = useRef<HTMLFormElement>(null);
  const [isImportation, setIsImportation] = useState("");
  const [drawback, setDrawback] = useState(false);

  useEffect(() => {
    setRegisterState("Dados aduaneiros");
  }, []);

  const validationFormUserSchema = Yup.object().shape({
    customsAuthorizationDate: Yup.string().required("*Obrigatório"),
  });

  const handleSelectImpotation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsImportation((event.target as HTMLInputElement).value);
  };

  const handleSelectDraw = (event: any) => {
    setDrawback(event.currentTarget.value);
  };

  const handleRegisterCustoms = (dataInformation: any) => {
    dataInformation.typeCustomsAuthorization = isImportation;
    dataInformation.drawbackFlag = drawback;

    api
      .put(`/company/update/${companyId}`, dataInformation)
      .then((response: any) => {
        handleIncrement();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <TitlePage>Cadastro</TitlePage>
      <Description>
        Quase lá! 🤓 Selecione a data de habilitação e seu tipo.
      </Description>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(dataInformation) => {
          personalDataFunction(dataInformation);
          handleRegisterCustoms(dataInformation);
        }}
        enableReinitialize
        initialValues={{
          customsAuthorizationDate: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <WrapperInput>
                  <Input
                    title="Data de habilitação"
                    name="customsAuthorizationDate"
                    value={values.customsAuthorizationDate}
                    error={errors.customsAuthorizationDate}
                    touched={touched.customsAuthorizationDate}
                    placeholder="00/00/0000"
                    icon={() => <AiOutlineCalendar color="#2B3674" size={19} />} // n aparece no canto
                    mask={maskDateBird}
                  />
                </WrapperInput>
              </Row>
              <Row>
                <Title>Selecione o tipo de habilitação</Title>
              </Row>
              <Row>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="Possui Filial?"
                    name="row-radio-buttons-group"
                    onChange={handleSelectImpotation}
                  >
                    <WrapperActivationBox>
                      <TitleActivation>Limite de importação de</TitleActivation>
                      <ValueActivation>USD 50.000,00</ValueActivation>
                      <DescriptionActivation>
                        CIF - VMLD - Mercadoria + Frete + Seguro
                      </DescriptionActivation>
                      <Border />
                      <FormControlLabel
                        value="EXPRESSA"
                        control={<Radio />}
                        label="Habilitação express"
                      />
                    </WrapperActivationBox>
                    <WrapperActivationBox>
                      <TitleActivation>Limite de importação de</TitleActivation>
                      <ValueActivation>USD 50.000,00</ValueActivation>
                      <DescriptionActivation>
                        CIF - VMLD - Mercadoria + Frete + Seguro
                      </DescriptionActivation>
                      <Border />
                      <FormControlLabel
                        value="LIMITADA"
                        control={<Radio />}
                        label="Habilitação limita"
                      />
                    </WrapperActivationBox>
                    <WrapperActivationBox>
                      <TitleActivation>Limite de importação de</TitleActivation>
                      <ValueActivation>USD 50.000,00</ValueActivation>
                      <DescriptionActivation>
                        CIF - VMLD - Mercadoria + Frete + Seguro
                      </DescriptionActivation>
                      <Border />
                      <FormControlLabel
                        value="ILIMITADA"
                        control={<Radio />}
                        label="Habilitação ilimitada"
                      />
                    </WrapperActivationBox>
                  </RadioGroup>
                </FormControl>
              </Row>
              <Row>
                <WrapperCheckBox>
                  <FormGroup>
                    <RadioGroup
                      value={true}
                      onChange={(e) => handleSelectDraw(e)}
                    >
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Drawback - Ato Concessório concedido"
                      />
                    </RadioGroup>
                  </FormGroup>
                </WrapperCheckBox>
              </Row>
            </FormShell>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default CustomsData;
