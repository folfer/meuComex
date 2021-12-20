import React, { useEffect, useRef, useState } from "react";
import FormShell from "../FormShell";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../components/Input";
import { AiOutlineCalendar } from "react-icons/ai";

import {
  Container,
  Row,
  FormFormik,
  WrapperInput,
  OptionsInput,
  WrapperLabel,
  WrapperFormControl,
  Emoji,
  Title,
  LabelForInput,
  SearchText,
  InputFile,
  Text,
} from "./styles";
import { useAuth } from "../../../hooks/useContext";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import car from "../../../assets/car.png";
import airplane from "../../../assets/airplane.png";
import boat from "../../../assets/boat.png";
import { maskDateBird } from "../../../utils/masks";
import { MdFilePresent } from "react-icons/md";

interface Props {
  handleIncrement: () => void;
}

const Transport: React.FC<Props> = ({ handleIncrement }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState, personalDataFunction } = useAuth();

  const [isBranchAlive, setIsBranchAlive] = useState("no");
  const [isActiveBranch, setIsActiveBranch] = useState<boolean>(true);

  const [isBookingAlive, setIsBookingAlive] = useState("no");
  const [isActiveBooking, setIsActiveBooking] = useState<boolean>(true);

  const [transportChanges, setTransportChanges] = useState("no");
  const [isActiveTransportChanges, setIsActiveTransportChanges] =
    useState<boolean>(true);

  const [fileArray, setFileArray] = useState<any>([]);
  const [fileArrayTwo, setFileArrayTwo] = useState<any>([]);
  const [fileArrayThree, setFileArrayThree] = useState<any>([]);
  const [fileArrayFour, setFileArrayFour] = useState<any>([]);
  const [fileArrayFive, setFileArrayFive] = useState<any>([]);

  const [isAliveFile, setIsAliveFile] = useState<any>(false);
  const [isAliveFileTwo, setIsAliveFileTwo] = useState<any>(false);
  const [isAliveFileThree, setIsAliveFileThree] = useState<any>(false);
  const [isAliveFileFour, setIsAliveFileFour] = useState<any>(false);
  const [isAliveFileFive, setIsAliveFileFive] = useState<any>(false);

  useEffect(() => {
    if (fileArray) {
      setIsAliveFile(!isAliveFile);
    } else {
      setIsAliveFile(!isAliveFile);
    }
  }, [fileArray]);

  useEffect(() => {
    if (fileArrayTwo) {
      setIsAliveFileTwo(!isAliveFileTwo);
    } else {
      setIsAliveFileTwo(!isAliveFileTwo);
    }
  }, [fileArrayTwo]);

  useEffect(() => {
    if (fileArrayThree) {
      setIsAliveFileThree(!isAliveFileThree);
    } else {
      setIsAliveFileThree(!isAliveFileThree);
    }
  }, [fileArrayThree]);

  useEffect(() => {
    if (fileArrayFour) {
      setIsAliveFileFour(!isAliveFileFour);
    } else {
      setIsAliveFileFour(!isAliveFileFour);
    }
  }, [fileArrayFour]);

  useEffect(() => {
    if (fileArrayFive) {
      setIsAliveFileFive(!isAliveFileFive);
    } else {
      setIsAliveFileFive(!isAliveFileFive);
    }
  }, [fileArrayFive]);

  useEffect(() => {
    if (isBranchAlive === "Yes") {
      setIsActiveBranch(!isActiveBranch);
    } else {
      setIsActiveBranch(!isActiveBranch);
    }
  }, [isBranchAlive]);

  useEffect(() => {
    if (isBookingAlive === "Yes") {
      setIsActiveBooking(!isActiveBooking);
    } else {
      setIsActiveBooking(!isActiveBooking);
    }
  }, [isBookingAlive]);

  useEffect(() => {
    if (transportChanges === "Yes") {
      setIsActiveTransportChanges(!isActiveTransportChanges);
    } else {
      setIsActiveTransportChanges(!isActiveTransportChanges);
    }
  }, [transportChanges]);

  useEffect(() => {
    setRegisterState("Dados de transporte");
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBranchAlive((event.target as HTMLInputElement).value);
  };

  const handleChangeBooking = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBookingAlive((event.target as HTMLInputElement).value);
  };

  const handleChangeTransport = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransportChanges((event.target as HTMLInputElement).value);
  };

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const validationFormUserSchema = Yup.object().shape({
    transportResponsibility: Yup.string().required("*Obrigatório"),
    merchandiseTicket: Yup.string().required("*Obrigatório"),
    billOfLadingNumber: Yup.string().required("*Obrigatório"),
    arrivalForecast: Yup.string().required("*Obrigatório"),
    loadingDate: Yup.string().required("*Obrigatório"),
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
          transportResponsibility: "",
          merchandiseTicket: "",
          billOfLadingNumber: "",
          arrivalForecast: "",
          loadingDate: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <FormShell clickFunction={() => 0}>
              <Row>
                <WrapperLabel>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Status das mercadorias
                    </FormLabel>
                    <RadioGroup
                      row
                      name="row-radio-buttons-group"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="absoluteValue"
                        control={
                          <Radio checked={isBranchAlive === "absoluteValue"} />
                        }
                        label="Em produção"
                      />
                      <FormControlLabel
                        value="%VMLE"
                        control={<Radio checked={isBranchAlive === "%VMLE"} />}
                        label="Finalizado"
                      />
                    </RadioGroup>
                  </FormControl>
                </WrapperLabel>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Responsabilidade do transporte"
                    name="transportResponsibility"
                    value={values.transportResponsibility}
                    error={errors.transportResponsibility}
                    touched={touched.transportResponsibility}
                    type="select"
                  >
                    <OptionsInput value="Administrador">Aéreo</OptionsInput>
                    <OptionsInput value="Intermediário">Marítimo</OptionsInput>
                    <OptionsInput value="Básico">Rodoviário</OptionsInput>
                  </Input>
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Ticket de mercadoria"
                    name="merchandiseTicket"
                    value={values.merchandiseTicket}
                    error={errors.merchandiseTicket}
                    touched={touched.merchandiseTicket}
                    placeholder="XU32342D12D"
                  />
                </WrapperInput>
              </Row>
              <Row>
                <WrapperLabel>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Selecione o tipo de transporte:
                    </FormLabel>
                    <RadioGroup
                      row
                      name="row-radio-buttons-group"
                      onChange={handleChangeTransport}
                    >
                      <WrapperFormControl>
                        <Emoji src={airplane} />
                        <FormControlLabel
                          value="fly"
                          control={
                            <Radio checked={transportChanges === "fly"} />
                          }
                          label="Transporte aéreo"
                        />
                      </WrapperFormControl>
                      <WrapperFormControl>
                        <Emoji src={boat} />
                        <FormControlLabel
                          value="ocean"
                          control={
                            <Radio checked={transportChanges === "ocean"} />
                          }
                          label="Transporte marítimo"
                        />
                      </WrapperFormControl>
                      <WrapperFormControl>
                        <Emoji src={car} />
                        <FormControlLabel
                          value="ground"
                          control={
                            <Radio checked={transportChanges === "ground"} />
                          }
                          label="Transporte rodoviário"
                        />
                      </WrapperFormControl>
                    </RadioGroup>
                  </FormControl>
                </WrapperLabel>
              </Row>
              <Row>
                <WrapperLabel>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Booking | Armazenagem
                    </FormLabel>
                    <RadioGroup
                      row
                      name="row-radio-buttons-group"
                      onChange={handleChangeBooking}
                    >
                      <FormControlLabel
                        value="company"
                        control={
                          <Radio checked={isBookingAlive === "company"} />
                        }
                        label="Companhia"
                      />
                      <FormControlLabel
                        value="armed"
                        control={<Radio checked={isBookingAlive === "armed"} />}
                        label="Armador"
                      />
                      <FormControlLabel
                        value="freeTime"
                        control={
                          <Radio checked={isBookingAlive === "freeTime"} />
                        }
                        label="Free Time"
                      />
                      <FormControlLabel
                        value="demurrage"
                        control={
                          <Radio checked={isBookingAlive === "demurrage"} />
                        }
                        label="Demurrage"
                      />
                    </RadioGroup>
                  </FormControl>
                </WrapperLabel>
              </Row>
              <Row>
                <WrapperInput>
                  <Input
                    title="Número de conhecimento do transporte"
                    name="billOfLadingNumber"
                    value={values.billOfLadingNumber}
                    error={errors.billOfLadingNumber}
                    touched={touched.billOfLadingNumber}
                    placeholder="XU32342D12D"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Data de carregamento"
                    name="arrivalForecast"
                    value={values.arrivalForecast}
                    error={errors.arrivalForecast}
                    touched={touched.arrivalForecast}
                    placeholder="00/00/0000"
                    icon={() => <AiOutlineCalendar color="#2B3674" size={19} />}
                    mask={maskDateBird}
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    title="Previsão de chegada"
                    name="loadingDate"
                    value={values.loadingDate}
                    error={errors.loadingDate}
                    touched={touched.loadingDate}
                    placeholder="00/00/0000"
                    icon={() => <AiOutlineCalendar color="#2B3674" size={19} />}
                    mask={maskDateBird}
                  />
                </WrapperInput>
              </Row>
              <Row>
                <Title>Documentos finais para validação</Title>
              </Row>
              <Row>
                <Text>Proforma Invoice</Text>
              </Row>
              <Row>
                <WrapperLabel>
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
              </Row>
              <Row>
                <Text>Packing List</Text>
              </Row>
              <Row>
                <WrapperLabel>
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
              </Row>
              <Row>
                <Text>Conhecimento de transporte</Text>
              </Row>
              <Row>
                <WrapperLabel>
                  {isAliveFileThree ? (
                    <>
                      <LabelForInput htmlFor="fuskThree">
                        Clique aqui para
                        <SearchText>procurar em seu computador</SearchText>
                      </LabelForInput>
                    </>
                  ) : (
                    <>
                      <LabelForInput htmlFor="fuskThree">
                        <MdFilePresent color="#3751FE" size={20} />
                        {fileArrayThree[0]?.name ? fileArrayThree[0]?.name : ""}
                        <SearchText>
                          (
                          {fileArrayThree[0]?.size
                            ? formatBytes(fileArrayThree[0]?.size)
                            : ""}
                          )
                        </SearchText>
                      </LabelForInput>
                    </>
                  )}
                  <InputFile
                    onChange={(e) =>
                      setFileArrayThree(
                        e.currentTarget.files ? e.currentTarget.files : []
                      )
                    }
                    id="fuskThree"
                    type="file"
                    name="photo"
                  />
                </WrapperLabel>
              </Row>
              <Row>
                <Text>Apólice do seguro</Text>
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
              <Row>
                <Text>Certificado de origem</Text>
              </Row>
              <Row>
                <WrapperLabel>
                  {isAliveFileFive ? (
                    <>
                      <LabelForInput htmlFor="fuskFive">
                        Clique aqui para
                        <SearchText>procurar em seu computador</SearchText>
                      </LabelForInput>
                    </>
                  ) : (
                    <>
                      <LabelForInput htmlFor="fuskFive">
                        <MdFilePresent color="#3751FE" size={20} />
                        {fileArrayFive[0]?.name ? fileArrayFive[0]?.name : ""}
                        <SearchText>
                          (
                          {fileArrayFive[0]?.size
                            ? formatBytes(fileArrayFive[0]?.size)
                            : ""}
                          )
                        </SearchText>
                      </LabelForInput>
                    </>
                  )}
                  <InputFile
                    onChange={(e) =>
                      setFileArrayFive(
                        e.currentTarget.files ? e.currentTarget.files : []
                      )
                    }
                    id="fuskFive"
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

export default Transport;
