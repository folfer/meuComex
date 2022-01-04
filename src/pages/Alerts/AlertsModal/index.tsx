import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../components/Input";
import { maskDateBird } from "../../../utils/masks";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import {
  Button,
  Container,
  HeaderText,
  Line,
  WrapperContent,
  Title,
  Row,
  WrapperInput,
  Option,
  WrapperRow,
  FormFormik,
  WrapperInputByTwo,
} from "./styles";

import FormControlLabel from "@mui/material/FormControlLabel";
import { AiOutlineCalendar } from "react-icons/ai";
import { useAuth } from "../../../hooks/useContext";

interface AlertsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const AlertsModal: React.FC<AlertsModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isBranchAlive, setIsBranchAlive] = useState("no");
  const [value, setValue] = useState<number[]>([20, 37]);
  const [status, setStatus] = useState<string>("");
  const [type, setType] = useState<string>("");

  function valueText(value: number) {
    return `USD${value},00`;
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBranchAlive((event.target as HTMLInputElement).value);
  };

  const handleChangeValue = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const validationFormUserSchema = Yup.object().shape({
    operationNumber: Yup.string().required("*Obrigatório"),
    destinationUnit: Yup.string().required("*Obrigatório"),
    selectSubsidiary: Yup.string().required("*Obrigatório"),
    minimumPrice: Yup.string().required("*Obrigatório"),
    maximumPrice: Yup.string().required("*Obrigatório"),
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-alerts"
    >
      <Formik
        validationSchema={validationFormUserSchema}
        onSubmit={(e) => {}}
        enableReinitialize
        initialValues={{
          operationNumber: "",
          destinationUnit: "Selecionar",
          selectSubsidiary: "Selecionar",
          minimumPrice: "",
          maximumPrice: "",
        }}
      >
        {({ errors, values, touched, initialValues }) => (
          <FormFormik ref={formRef}>
            <Container>
              <HeaderText>Filtros</HeaderText>
              <Line />
              <WrapperContent>
                <Title>Tipo de operação</Title>
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup
                    row
                    aria-label="escolher a divisão por"
                    name="row-radio-buttons-group"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="importation"
                      control={
                        <Radio checked={isBranchAlive === "importation"} />
                      }
                      label="Importação"
                    />
                    <FormControlLabel
                      value="exportation"
                      control={
                        <Radio checked={isBranchAlive === "exportation"} />
                      }
                      label="Exportação"
                    />
                  </RadioGroup>
                </FormControl>
                <Title>Status</Title>
                <Row>
                  <WrapperInput>
                    <Option
                      className={status === "ATRASADO" ? "selected" : ""}
                      onClick={() => setStatus("ATRASADO")}
                    >
                      Atrasado
                    </Option>
                  </WrapperInput>
                  <WrapperInput>
                    <Option
                      className={status === "TRANSPORTE" ? "selected" : ""}
                      onClick={() => setStatus("TRANSPORTE")}
                    >
                      Transporte
                    </Option>
                  </WrapperInput>
                  <WrapperInput>
                    <Option
                      className={status === "FINALIZADO" ? "selected" : ""}
                      onClick={() => setStatus("FINALIZADO")}
                    >
                      Finalizado
                    </Option>
                  </WrapperInput>
                </Row>
                <Title>Tipo de alerta</Title>
                <WrapperRow>
                  <Row>
                    <WrapperInput>
                      <Option
                        className={type === "DRAWBACK" ? "selected" : ""}
                        onClick={() => setType("DRAWBACK")}
                      >
                        Drawback
                      </Option>
                    </WrapperInput>
                    <WrapperInput>
                      <Option
                        className={type === "CÂMBIO" ? "selected" : ""}
                        onClick={() => setType("CÂMBIO")}
                      >
                        Câmbio
                      </Option>
                    </WrapperInput>
                    <WrapperInput>
                      <Option
                        className={type === "ESPECIAL" ? "selected" : ""}
                        onClick={() => setType("ESPECIAL")}
                      >
                        Especial
                      </Option>
                    </WrapperInput>
                  </Row>
                  <Row>
                    <WrapperInput>
                      <Option
                        className={type === "NCM" ? "selected" : ""}
                        onClick={() => setType("NCM")}
                      >
                        NCM
                      </Option>
                    </WrapperInput>
                    <WrapperInput>
                      <Option
                        className={type === "EMBARQUE" ? "selected" : ""}
                        onClick={() => setType("EMBARQUE")}
                      >
                        Embarque
                      </Option>
                    </WrapperInput>
                    <WrapperInput>
                      <Option
                        className={type === "DOCUMENTOS" ? "selected" : ""}
                        onClick={() => setType("DOCUMENTOS")}
                      >
                        Documentos
                      </Option>
                    </WrapperInput>
                  </Row>
                </WrapperRow>
                <Title>Estimativa</Title>
                <Input
                  title="Selecione um período"
                  name="productionTime"
                  mask={maskDateBird}
                  placeholder="00/00/0000"
                  icon={() => <AiOutlineCalendar color="#2B3674" size={19} />}
                />
                <Title>Faixa de preço</Title>
                <Box sx={{ width: 486 }}>
                  <Slider
                    getAriaLabel={() => "Faixa de Preço"}
                    value={value}
                    onChange={handleChangeValue}
                    valueLabelDisplay="auto"
                    getAriaValueText={valueText}
                  />
                </Box>
                <Row>
                  <WrapperInputByTwo>
                    <Input
                      title="Preço mínimo"
                      name="minimumPrice"
                      type="number"
                      value={values.minimumPrice}
                      error={errors.minimumPrice}
                      touched={touched.minimumPrice}
                      placeholder="000"
                    />
                  </WrapperInputByTwo>
                  <WrapperInputByTwo>
                    <Input
                      title="Preço máximo"
                      name="maximumPrice"
                      type="number"
                      value={values.maximumPrice}
                      error={errors.maximumPrice}
                      touched={touched.maximumPrice}
                      placeholder="000"
                    />
                  </WrapperInputByTwo>
                </Row>
                <Button>Ver resultados</Button>
              </WrapperContent>
            </Container>
          </FormFormik>
        )}
      </Formik>
    </Modal>
  );
};

export default AlertsModal;
