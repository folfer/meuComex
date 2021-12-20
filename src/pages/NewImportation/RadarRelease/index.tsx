import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  Row,
  FormFormik,
  WrapperInput,
  Title,
  WrapperInputTwoItens,
  OcultTableButton,
  WrapperLabel,
  LabelForInput,
  SearchText,
  InputFile,
} from "./styles";
import { useAuth } from "../../../hooks/useContext";
import { Input } from "../../../components/Input";
import ButtonMUI from "../../../components/ButtonMUI";
import {
  MdOutlineFileDownload,
  MdRefresh,
  MdRemoveRedEye,
  MdOutlineDone,
  MdFilePresent,
} from "react-icons/md";
import { FiEyeOff, FiEye } from "react-icons/fi";
import TableShell from "./TableShell";
import {
  dataInformationCommodity,
  dataInformationExporters,
} from "../../../utils/dataInformation";
import StatusBar from "./StatusBar";

interface Props {
  handleIncrement: () => void;
}

const RadarRelease: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState } = useAuth();
  const [hiddenTable, setHiddenTable] = useState<boolean>(false);

  const [fileArrayFour, setFileArrayFour] = useState<any>([]);
  const [isAliveFileFour, setIsAliveFileFour] = useState<any>(false);

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  useEffect(() => {
    setRegisterState("Dados pessoais");
  }, []);

  const validationFormUserSchema = Yup.object().shape({
    ImportationLimit: Yup.string().required("*Obrigatório"),
    HabilitationType: Yup.string().required("*Obrigatório"),
  });

  const handleHiddenTable = () => {
    setHiddenTable(!hiddenTable);
  };

  return (
    <Container>
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(e) => {
          handleIncrement();
        }}
        enableReinitialize
        initialValues={{
          ImportationLimit: "",
          HabilitationType: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <Title>Limite do Radar</Title>
              </Row>
              <Row>
                <WrapperInputTwoItens>
                  <Input
                    title="Limite de importação"
                    name="ImportationLimit"
                    value={values.ImportationLimit}
                    error={errors.ImportationLimit}
                    touched={touched.ImportationLimit}
                    placeholder="USD 55.000,00"
                  />
                </WrapperInputTwoItens>
                <WrapperInputTwoItens>
                  <Input
                    title="Tipo de habilitação"
                    name="HabilitationType"
                    value={values.HabilitationType}
                    error={errors.HabilitationType}
                    touched={touched.HabilitationType}
                    placeholder="Habilitação expressa"
                  />
                </WrapperInputTwoItens>
              </Row>
              <Row>
                <ButtonMUI
                  color="#3751FE"
                  backgroundColor="#fff"
                  text="Baixar documentos da operação"
                  paddingSides={5}
                  paddingTopBottom={16}
                  isLink={false}
                  clickFunction={() => 0}
                >
                  <MdOutlineFileDownload />
                </ButtonMUI>
              </Row>
              <Row>
                <Title>Detalhamento das mercadorias</Title>
                {!hiddenTable ? (
                  <OcultTableButton type="button" onClick={handleHiddenTable}>
                    <FiEye size={18} />
                    Ocultar tabela
                  </OcultTableButton>
                ) : (
                  <OcultTableButton type="button" onClick={handleHiddenTable}>
                    <FiEyeOff size={18} />
                    Ocultar tabela
                  </OcultTableButton>
                )}
              </Row>
              <Row>
                {!hiddenTable && (
                  <TableShell dataInformation={dataInformationCommodity} />
                )}
              </Row>
              <Row>
                <WrapperInputTwoItens>
                  <Title>Registro DI</Title>
                  <ButtonMUI
                    color="#fff"
                    backgroundColor="#3751FE"
                    text="Atualizar informações do Siscomex"
                    paddingSides={30}
                    paddingTopBottom={12}
                    isLink={false}
                    clickFunction={() => 0}
                  >
                    <MdRefresh />
                  </ButtonMUI>
                </WrapperInputTwoItens>
                <WrapperInputTwoItens>
                  <Title>Parametrização</Title>
                  <StatusBar
                    color="#028633"
                    backgroundColor="#f2f9f5"
                    borderColor="#028633"
                    text="Pronto para proseguir"
                  >
                    <MdOutlineDone color="#028633" size={18} />
                  </StatusBar>
                </WrapperInputTwoItens>
              </Row>
              <Row>
                <Title>Nota Fiscal</Title>
              </Row>
              <Row>
                <WrapperLabel>
                  {isAliveFileFour ? (
                    <>
                      <LabelForInput htmlFor="fuskFour">
                        Clique aqui para
                        <SearchText>procurar em seu computador</SearchText>
                      </LabelForInput>
                    </>
                  ) : (
                    <>
                      <LabelForInput htmlFor="fuskFour">
                        <MdFilePresent color="#3751FE" size={20} />
                        {fileArrayFour[0]?.name ? fileArrayFour[0]?.name : ""}
                        <SearchText>
                          (
                          {fileArrayFour[0]?.size
                            ? formatBytes(fileArrayFour[0]?.size)
                            : ""}
                          )
                        </SearchText>
                      </LabelForInput>
                    </>
                  )}
                  <InputFile
                    onChange={(e) =>
                      setFileArrayFour(
                        e.currentTarget.files ? e.currentTarget.files : []
                      )
                    }
                    id="fuskFour"
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

export default RadarRelease;
