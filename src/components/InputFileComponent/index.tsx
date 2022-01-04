import React, { useEffect, useState } from "react";
import { MdFilePresent } from "react-icons/md";
import {
  LabelForInput,
  SearchText,
  WrapperLabel,
  File,
  Container,
  Title,
} from "./styles";

interface InputFileComponentProps {
  title: string;
  htmlFor: string;
  id: string;
}

const InputFileComponent: React.FC<InputFileComponentProps> = ({
  title,
  htmlFor,
  id,
}) => {
  const [fileArray, setFileArray] = useState<any>([]);

  const [isAliveFile, setIsAliveFile] = useState<any>(false);

  useEffect(() => {
    if (fileArray) {
      setIsAliveFile(!isAliveFile);
    } else {
      setIsAliveFile(isAliveFile);
    }
  }, [fileArray]);

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
      <Title>{title}</Title>
      <WrapperLabel>
        {isAliveFile ? (
          <>
            <LabelForInput htmlFor={htmlFor}>
              Clique aqui para
              <SearchText>procurar em seu computador</SearchText>
            </LabelForInput>
          </>
        ) : (
          <>
            <LabelForInput htmlFor={htmlFor}>
              <MdFilePresent color="#3751FE" size={20} />
              {fileArray[0]?.name ? fileArray[0]?.name : ""}
              <SearchText>
                ({fileArray[0]?.size ? formatBytes(fileArray[0]?.size) : ""})
              </SearchText>
            </LabelForInput>
          </>
        )}
        <File
          onChange={(e) =>
            setFileArray(e.currentTarget.files ? e.currentTarget.files : [])
          }
          id={id}
          type="file"
          name="photo"
        />
      </WrapperLabel>
    </Container>
  );
};

export default InputFileComponent;
