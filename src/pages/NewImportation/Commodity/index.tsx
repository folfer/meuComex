import React, { useEffect, useState } from "react";
import FormShell from "../FormShell";
import {
  MdDone,
  MdRemoveRedEye,
  MdOutlineModeEditOutline,
  MdDeleteOutline,
  MdOutlineSearch,
} from "react-icons/md";
import { Formik } from "formik";
import * as Yup from "yup";

import { RegisterNewCommodity } from "../RegisterNewCommodity";

import {
  Container,
  Row,
  FormFormik,
  AddBranch,
  WrapperInput,
  CommodityContainer,
  CommodityHeader,
  CommodityWrapperTitle,
  CommodityTitle,
  CommodityFeedback,
  CommodityWrapperDetails,
  CommodityButton,
  CommodityTitleButton,
  CommodityWrapperItemRow,
  CommodityDescription,
  CommodityValue,
  CommodityBody,
  CommodityValueP,
  LabelSearch,
  InputSearch,
} from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuth } from "../../../hooks/useContext";
import { Input } from "../../../components/Input";
import { TextField } from "@mui/material";

interface Props {
  handleIncrement: () => void;
}

const Commodity: React.FC<Props> = ({ handleIncrement }) => {
  const { setRegisterState, personalDataFunction } = useAuth();

  const [isOpenModalRegister, setIsOpenModalRegister] =
    useState<boolean>(false);
  const [isOpenModalDetails, setIsOpenModalDetails] = useState<boolean>(false);

  const [isBranchAlive, setIsBranchAlive] = useState("No");
  const [search, setSearch] = useState("");

  const [isActiveBranch, setIsActiveBranch] = useState<boolean>(true);

  useEffect(() => {
    setRegisterState("Mercadorias");
  }, []);

  useEffect(() => {
    if (isBranchAlive === "Yes") {
      setIsActiveBranch(!isActiveBranch);
    } else {
      setIsActiveBranch(!isActiveBranch);
    }
  }, [isBranchAlive]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((event.target as HTMLInputElement).value);
  };

  return (
    <Container>
      <FormFormik>
        <FormShell clickFunction={() => handleIncrement()}>
          <Row>
            <WrapperInput>
              <LabelSearch>Buscar exportadores cadastrados</LabelSearch>
              <InputSearch type="text" placeholder="🔎" />
            </WrapperInput>
          </Row>
          <Row>
            <CommodityContainer>
              <CommodityHeader>
                <CommodityWrapperTitle>
                  <CommodityTitle>Mercadoria 1</CommodityTitle>
                  <CommodityFeedback>
                    <MdDone />
                    Drawback
                  </CommodityFeedback>
                </CommodityWrapperTitle>
                <CommodityWrapperDetails>
                  <CommodityButton>
                    <CommodityTitleButton
                      onClick={() => setIsOpenModalRegister(true)}
                    >
                      <MdRemoveRedEye size={18} />
                      Ver detalhes
                    </CommodityTitleButton>
                  </CommodityButton>
                  <CommodityButton>
                    <CommodityTitleButton
                      onClick={() => setIsOpenModalDetails(true)}
                    >
                      <MdOutlineModeEditOutline size={18} />
                      Editar
                    </CommodityTitleButton>
                  </CommodityButton>
                  <CommodityButton>
                    <CommodityTitleButton>
                      <MdDeleteOutline size={18} />
                      Excluir
                    </CommodityTitleButton>
                  </CommodityButton>
                </CommodityWrapperDetails>
              </CommodityHeader>
              <CommodityBody>
                <CommodityWrapperItemRow>
                  <CommodityDescription>Descrição</CommodityDescription>
                  <CommodityValueP>
                    Maçãs, peras e marmelos, frecos.
                  </CommodityValueP>
                </CommodityWrapperItemRow>
                <CommodityWrapperItemRow>
                  <CommodityDescription>NCM</CommodityDescription>
                  <CommodityValue>00.00.00-0</CommodityValue>
                </CommodityWrapperItemRow>
                <CommodityWrapperItemRow>
                  <CommodityDescription>Valor Unitário</CommodityDescription>
                  <CommodityValue>R$ 0.000,00</CommodityValue>
                </CommodityWrapperItemRow>
                <CommodityWrapperItemRow>
                  <CommodityDescription>Quantidade</CommodityDescription>
                  <CommodityValue>00000</CommodityValue>
                </CommodityWrapperItemRow>
                <CommodityWrapperItemRow>
                  <CommodityDescription>VMLE</CommodityDescription>
                  <CommodityValue>R$ 0.000,00</CommodityValue>
                </CommodityWrapperItemRow>
              </CommodityBody>
            </CommodityContainer>
          </Row>
          <Row>
            <AddBranch onClick={() => setIsOpenModalRegister(true)}>
              <AiOutlinePlus size={18} /> Adicionar nova mercadoria
            </AddBranch>
          </Row>
        </FormShell>
      </FormFormik>
      <RegisterNewCommodity
        TitleProps="Cadastrar nova mercadoria"
        isOpen={isOpenModalRegister}
        onRequestClose={() => setIsOpenModalRegister(false)}
      />
      <RegisterNewCommodity
        TitleProps="Detalhes da mercadoria"
        isOpen={isOpenModalDetails}
        onRequestClose={() => setIsOpenModalDetails(false)}
      />
    </Container>
  );
};

export default Commodity;
