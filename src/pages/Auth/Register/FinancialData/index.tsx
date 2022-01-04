import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { FieldArray, Formik, getIn } from "formik";
import * as Yup from "yup";
import { Input } from "../../../../components/Input";
import { phoneMask } from "../../../../utils/masks";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

import {
  Container,
  Row,
  FormFormik,
  WrapperInputTwoItens,
  OptionsInput,
  AddBranch,
  WrapperCheckBox,
  WrapperPlus,
  Title,
  Description,
  TitlePage,
} from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuth } from "../../../../hooks/useContext";
import api from "../../../../services/api";

interface Props {
  handleIncrement: () => void;
}

const FinancialData: React.FC<Props> = ({ handleIncrement }) => {
  const { setRegisterState, personalDataFunction, companyId } = useAuth();
  const formRef = useRef<HTMLFormElement>(null);

  const [isBranchAlive, setIsBranchAlive] = useState("No");
  const [isActiveBranch, setIsActiveBranch] = useState<boolean>(true);

  useEffect(() => {
    setRegisterState("Dados financeiros");

    if (isBranchAlive === "Yes") {
      setIsActiveBranch(!isActiveBranch);
    } else {
      setIsActiveBranch(!isActiveBranch);
    }
  }, [isBranchAlive]);

  const validationFormUserSchema = Yup.object().shape({
    registeredBanks: Yup.string().required("*Obrigatório"),
    PaymentOrReceiptRules: Yup.number().required("*Obrigatório"),
    emailForAlert: Yup.array().of(
      Yup.object().shape({
        EmailForReceivingAlerts: Yup.string()
          .required("*Obrigatório")
          .email("*E-mail inválido"),
      })
    ),
    bankingChannels: Yup.array().of(
      Yup.object().shape({
        bankingChannel: Yup.string().required("*Obrigatório"),
      })
    ),
  });

  const handleRegisterPersonal = (dataInformation: any) => {
    const { PaymentOrReceiptRules } = dataInformation;

    const intAvailableAccesses = parseInt(PaymentOrReceiptRules);

    dataInformation.PaymentOrReceiptRules = intAvailableAccesses;
    api
      .post(`/bankChannel/massUpdate/${companyId}`, dataInformation)
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
        Penúltima etapa! 🙌 Informe os dados financeiros e
      </Description>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(e) => {
          personalDataFunction(e);
          handleRegisterPersonal(e);
        }}
        enableReinitialize
        initialValues={{
          registeredBanks: "",
          PaymentOrReceiptRules: 0,
          emailForAlert: [
            {
              EmailForReceivingAlerts: "",
            },
          ],
          bankingChannels: [
            {
              bankingChannel: "",
            },
          ],
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <FieldArray name="emailForAlert">
                {({ remove, push }) =>
                  values.emailForAlert.map((emailForAlert, index) => (
                    <>
                      <Row>
                        <WrapperInputTwoItens>
                          <Input
                            title="E-mail para recebimento de alertas"
                            name={`emailForAlert[${index}].EmailForReceivingAlerts`}
                            value={emailForAlert.EmailForReceivingAlerts}
                            error={getIn(
                              errors,
                              `emailForAlert.${index}.EmailForReceivingAlerts`
                            )}
                            touched={getIn(
                              touched,
                              `emailForAlert.${index}.EmailForReceivingAlerts`
                            )}
                            placeholder="email@empresa.com.br"
                          />
                        </WrapperInputTwoItens>
                        {(values.emailForAlert.length - 1 === index ||
                          values.emailForAlert.length === 0) && (
                          <WrapperInputTwoItens>
                            <AddBranch
                              onClick={() =>
                                push({
                                  EmailForReceivingAlerts: "",
                                })
                              }
                            >
                              <WrapperPlus>
                                <AiOutlinePlus size={18} />
                              </WrapperPlus>
                              Adicionar outro e-mail
                            </AddBranch>
                          </WrapperInputTwoItens>
                        )}
                      </Row>
                    </>
                  ))
                }
              </FieldArray>
              <Row>
                <WrapperInputTwoItens>
                  <Input
                    title="Bancos cadastrados"
                    name="registeredBanks"
                    value={values.registeredBanks}
                    error={errors.registeredBanks}
                    touched={touched.registeredBanks}
                    type="select"
                  >
                    <OptionsInput value="Administrador">
                      Administrador
                    </OptionsInput>
                    <OptionsInput value="Intermediário">
                      Intermediário
                    </OptionsInput>
                    <OptionsInput value="Básico">Básico</OptionsInput>
                  </Input>
                </WrapperInputTwoItens>
                <WrapperInputTwoItens>
                  <Input
                    title="Regras de pagamento ou recebimento"
                    name="PaymentOrReceiptRules"
                    value={values.PaymentOrReceiptRules}
                    error={errors.PaymentOrReceiptRules}
                    touched={touched.PaymentOrReceiptRules}
                    type="select"
                  >
                    <OptionsInput value={0}>Administrador</OptionsInput>
                    <OptionsInput value={1}>Intermediário</OptionsInput>
                    <OptionsInput value={2}>Básico</OptionsInput>
                  </Input>
                </WrapperInputTwoItens>
              </Row>
              <Row>
                <Title>Para exportações</Title>
              </Row>
              <FieldArray name="bankingChannels">
                {({ remove, push }) =>
                  values.bankingChannels.map((bankingChannels, index) => (
                    <>
                      <Row>
                        <WrapperInputTwoItens>
                          <Input
                            title="Canal Bancário"
                            name={`bankingChannels[${index}].bankingChannel`}
                            value={bankingChannels.bankingChannel}
                            error={getIn(
                              errors,
                              `bankingChannels.${index}.bankingChannel`
                            )}
                            touched={getIn(
                              touched,
                              `bankingChannels.${index}.bankingChannel`
                            )}
                            type="select"
                          >
                            <OptionsInput value="Administrador">
                              Administrador
                            </OptionsInput>
                            <OptionsInput value="Intermediário">
                              Intermediário
                            </OptionsInput>
                            <OptionsInput value="Básico">Básico</OptionsInput>
                          </Input>
                        </WrapperInputTwoItens>
                        {(values.bankingChannels.length - 1 === index ||
                          values.bankingChannels.length === 0) && (
                          <WrapperInputTwoItens>
                            <AddBranch
                              onClick={() =>
                                push({
                                  bankingChannel: "",
                                })
                              }
                            >
                              <WrapperPlus>
                                <AiOutlinePlus size={18} />
                              </WrapperPlus>
                              Adicionar outro banco
                            </AddBranch>
                          </WrapperInputTwoItens>
                        )}
                      </Row>
                    </>
                  ))
                }
              </FieldArray>
            </FormShell>
          </FormFormik>
        )}
      </Formik>
    </Container>
  );
};

export default FinancialData;
