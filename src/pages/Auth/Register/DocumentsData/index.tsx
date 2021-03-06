import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  Row,
  FormFormik,
  WrapperLabel,
  LabelForInput,
  SearchText,
  InputFile,
  Title,
  Description,
  TitlePage,
  WrapperTitles,
  Subtitle,
} from "./styles";
import { MdFilePresent } from "react-icons/md";
import { useAuth } from "../../../../hooks/useContext";
import api from "../../../../services/api";

interface Props {
  handleIncrement: () => void;
}

const DocumentsData: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const { setRegisterState, personalDataFunction, companyId } = useAuth();

  const [fileArray, setFileArray] = useState<any>([]);
  const [fileArrayTwo, setFileArrayTwo] = useState<any>([]);
  const [fileArrayThird, setFileArrayThird] = useState<any>([]);

  const [isAliveFile, setIsAliveFile] = useState<any>(false);
  const [isAliveFileTwo, setIsAliveFileTwo] = useState<any>(false);
  const [isAliveFileThird, setIsAliveFileThird] = useState<any>(false);

  useEffect(() => {
    setRegisterState("Documentos");

    if (fileArray) {
      setIsAliveFile(!isAliveFile);
    } else {
      setIsAliveFile(isAliveFile);
    }
  }, [fileArray]);

  useEffect(() => {
    if (fileArrayTwo) {
      setIsAliveFileTwo(!isAliveFileTwo);
    } else {
      setIsAliveFileTwo(isAliveFileTwo);
    }
  }, [fileArrayTwo]);

  useEffect(() => {
    if (fileArrayThird) {
      setIsAliveFileThird(!isAliveFileThird);
    } else {
      setIsAliveFileThird(isAliveFileThird);
    }
  }, [fileArrayThird]);

  const handleSendDocuments = () => {
    api
      .post(`/upload/uploadRegister/${companyId}`)
      .then((response) => {
        handleIncrement();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <Container>
      <TitlePage>Cadastro</TitlePage>
      <Description>
        Ufa, terminou. ???? Fa??a o upload dos documentos para finalizar o
        cadastro.
      </Description>
      handleSendDocuments(); handleSendDocuments();
      <FormShell clickFunction={handleSendDocuments}>
        <FormFormik>
          <Row>
            <WrapperLabel>
              <WrapperTitles>
                <Title>Contrato Social</Title>
                <Subtitle>??ltima altera????o</Subtitle>
              </WrapperTitles>
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
            <WrapperLabel>
              <Title>Documento do S??cio</Title>
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
            <WrapperLabel>
              <WrapperTitles>
                <Title>Contrato MeuComex</Title>
                <Subtitle>Assinado</Subtitle>
              </WrapperTitles>
              {isAliveFileThird ? (
                <>
                  <LabelForInput htmlFor="fuskThird">
                    Clique aqui para
                    <SearchText>procurar em seu computador</SearchText>
                  </LabelForInput>
                </>
              ) : (
                <>
                  <LabelForInput htmlFor="fuskThird">
                    <MdFilePresent color="#3751FE" size={20} />
                    {fileArrayThird[0]?.name ? fileArrayThird[0]?.name : ""}
                    <SearchText>
                      (
                      {fileArrayThird[0]?.size
                        ? formatBytes(fileArrayThird[0]?.size)
                        : ""}
                      )
                    </SearchText>
                  </LabelForInput>
                </>
              )}
              <InputFile
                onChange={(e) =>
                  setFileArrayThird(
                    e.currentTarget.files ? e.currentTarget.files : []
                  )
                }
                id="fuskThird"
                type="file"
                name="photo"
              />
            </WrapperLabel>
          </Row>
        </FormFormik>
      </FormShell>
    </Container>
  );
};

export default DocumentsData;
