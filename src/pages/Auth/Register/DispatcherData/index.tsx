import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { FieldArray, Formik, getIn } from "formik";
import * as Yup from "yup";
import { Input } from "../../../../components/Input";
import { maskCPF, phoneMask } from "../../../../utils/masks";
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
  Description,
  TitlePage,
  WrapperInput,
} from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuth } from "../../../../hooks/useContext";
import api from "../../../../services/api";

interface Props {
  handleIncrement: () => void;
}

const DispatcherData: React.FC<Props> = ({ handleIncrement }) => {
  const { setRegisterState, personalDataFunction, companyId } = useAuth();
  const formRef = useRef<HTMLFormElement>(null);
  const [isBranchAlive, setIsBranchAlive] = useState("No");
  const [isActiveBranch, setIsActiveBranch] = useState<boolean>(true);

  useEffect(() => {
    setRegisterState("Dados do despachante");
  }, []);

  useEffect(() => {
    if (isBranchAlive === "Yes") {
      setIsActiveBranch(!isActiveBranch);
    } else {
      setIsActiveBranch(!isActiveBranch);
    }
  }, [isBranchAlive]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBranchAlive((event.target as HTMLInputElement).value);
  };

  const validationFormUserSchema = Yup.object().shape({
    dispatcher: Yup.array().of(
      Yup.object().shape({
        fullName: Yup.string().required("*Obrigatório"),
        cpf: Yup.string().required("*Obrigatório"),
        email: Yup.string().required("*Obrigatório").email("*E-mail inválido"),
        phoneNumber: Yup.string().required("*Obrigatório"),
        aduanas: Yup.string().required("*Obrigatório"),
        companyUnits: Yup.string().required("*Obrigatório"),
      })
    ),
  });

  const handleRegisterDispatcher = (dataInformation: any) => {
    dataInformation.company_id = companyId;

    api
      .post("forwardingAgent/create", dataInformation)
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
        Você está indo bem! 👏 Informe agora os dados do despachante.
      </Description>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(dataInformation) => {
          handleRegisterDispatcher(dataInformation);
        }}
        enableReinitialize
        initialValues={{
          dispatcher: [
            {
              fullName: "",
              cpf: "",
              email: "",
              phoneNumber: "",
              aduanas: "Administrador",
              companyUnits: "Intermediário",
            },
          ],
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <FieldArray name="dispatcher">
                {({ remove, push }) =>
                  values.dispatcher.map((dispatcher, index) => (
                    <>
                      <Row>
                        <WrapperInputTwoItens>
                          <Input
                            title="Nome"
                            name={`dispatcher[${index}].fullName`}
                            value={dispatcher.fullName}
                            error={getIn(
                              errors,
                              `dispatcher.${index}.fullName`
                            )}
                            touched={getIn(
                              touched,
                              `dispatcher.${index}.fullName`
                            )}
                            placeholder="Nome"
                          />
                        </WrapperInputTwoItens>
                        <WrapperInputTwoItens>
                          <Input
                            title="CPF"
                            name={`dispatcher[${index}].cpf`}
                            value={dispatcher.cpf}
                            error={getIn(errors, `dispatcher.${index}.cpf`)}
                            touched={getIn(touched, `dispatcher.${index}.cpf`)}
                            placeholder="000.000.000-00"
                            mask={maskCPF}
                          />
                        </WrapperInputTwoItens>
                      </Row>
                      <Row>
                        <WrapperInputTwoItens>
                          <Input
                            title="E-mail de contato"
                            name={`dispatcher[${index}].email`}
                            value={dispatcher.email}
                            error={getIn(errors, `dispatcher.${index}.email`)}
                            touched={getIn(
                              touched,
                              `dispatcher.${index}.email`
                            )}
                            placeholder="seuemail@empresa.com.br"
                          />
                        </WrapperInputTwoItens>
                        <WrapperInputTwoItens>
                          <Input
                            title="Telefone"
                            name={`dispatcher[${index}].phoneNumber`}
                            value={dispatcher.phoneNumber}
                            error={getIn(
                              errors,
                              `dispatcher.${index}.phoneNumber`
                            )}
                            touched={getIn(
                              touched,
                              `dispatcher.${index}.phoneNumber`
                            )}
                            mask={phoneMask}
                            placeholder="00 00 0000-0000"
                          />
                        </WrapperInputTwoItens>
                      </Row>
                      <Row>
                        <WrapperCheckBox>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="Permitir que o despachante tenha acesso à plataforma"
                            />
                          </FormGroup>
                        </WrapperCheckBox>
                      </Row>
                      <Row>
                        <WrapperInputTwoItens>
                          <Input
                            title="Selecione uma aduana"
                            name={`dispatcher[${index}].aduanas`}
                            value={dispatcher.aduanas}
                            error={getIn(errors, `dispatcher.${index}.aduanas`)}
                            touched={getIn(
                              touched,
                              `dispatcher.${index}.aduanas`
                            )}
                            placeholder="Selecionar"
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
                            title="Unidade Atendida"
                            name={`dispatcher[${index}].companyUnits`}
                            value={dispatcher.companyUnits}
                            error={getIn(
                              errors,
                              `dispatcher.${index}.companyUnits`
                            )}
                            touched={getIn(
                              touched,
                              `dispatcher.${index}.companyUnits`
                            )}
                            placeholder="Selecionar"
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
                      </Row>
                      {(values.dispatcher.length - 1 === index ||
                        values.dispatcher.length === 0) && (
                        <Row>
                          <AddBranch
                            onClick={() =>
                              push({
                                lastName: "",
                                cpf: "",
                                email: "",
                                phoneNumber: "",
                                aduanas: "",
                                companyUnits: "",
                              })
                            }
                          >
                            <AiOutlinePlus size={18} /> Adicionar Despachante
                          </AddBranch>
                        </Row>
                      )}
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

export default DispatcherData;
