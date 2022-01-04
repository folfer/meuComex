import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ButtonMUI from "../../../components/ButtonMUI";
import { Input } from "../../../components/Input";
import FormShellCommodity from "./FormShellCommodity";

import { Container, FormFormik, Row, WrapperInput, ModalReact } from "./styles";
import { useAuth } from "../../../hooks/useContext";
import { WrapperInputTwoItens } from "../Exporter/styles";

interface RegisterNewCommodityProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onChange?: any;
  TitleProps: string;
}

export function RegisterNewCommodity({
  isOpen,
  onRequestClose,
  onChange,
  TitleProps,
}: RegisterNewCommodityProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const { setRegisterState } = useAuth();

  useEffect(() => {
    setRegisterState("Nova Mercadoria");
  }, [setRegisterState]);

  const validationFormUserSchema = Yup.object().shape({
    descCommodity: Yup.string().required("*Obrigatório"),
    ncm: Yup.string().required("*Obrigatório"),
    originCountry: Yup.string().required("*Obrigatório"),
    ipi: Yup.string().required("*Obrigatório"),
    pis: Yup.string().required("*Obrigatório"),
    cofins: Yup.string().required("*Obrigatório"),
    icms: Yup.string().required("*Obrigatório"),
  });

  return (
    <ModalReact
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <Formik
          validationSchema={validationFormUserSchema}
          onSubmit={() => onRequestClose()}
          enableReinitialize
          initialValues={{
            descCommodity: "",
            ncm: "",
            originCountry: "",
            ipi: "",
            pis: "",
            cofins: "",
            icms: "",
          }}
        >
          {({ errors, values, touched, initialValues }) => (
            <FormFormik ref={formRef}>
              <FormShellCommodity title={TitleProps} clickFunction={() => 0}>
                <Row>
                  <WrapperInput>
                    <Input
                      title="Descrição da mercadoria"
                      name="descCommodity"
                      value={values.descCommodity}
                      error={errors.descCommodity}
                      touched={touched.descCommodity}
                      placeholder="Descrição da mercadoria"
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      title="NCM"
                      name="ncm"
                      value={values.ncm}
                      error={errors.ncm}
                      touched={touched.ncm}
                      placeholder="00.00.00-0"
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      title="País de origem"
                      name="originCountry"
                      value={values.originCountry}
                      error={errors.originCountry}
                      touched={touched.originCountry}
                      placeholder=""
                    />
                  </WrapperInput>
                </Row>
                <Row>
                  <WrapperInputTwoItens>
                    <Input
                      title="IPI"
                      name="ipi"
                      value={values.ipi}
                      error={errors.ipi}
                      touched={touched.ipi}
                      placeholder=""
                    />
                  </WrapperInputTwoItens>
                  <WrapperInputTwoItens>
                    <Input
                      title="PIS"
                      name="pis"
                      value={values.pis}
                      error={errors.pis}
                      touched={touched.pis}
                      placeholder=""
                    />
                  </WrapperInputTwoItens>
                </Row>
                <Row>
                  <WrapperInputTwoItens>
                    <Input
                      title="COFINS"
                      name="cofins"
                      value={values.cofins}
                      error={errors.cofins}
                      touched={touched.cofins}
                      placeholder=""
                    />
                  </WrapperInputTwoItens>
                  <WrapperInputTwoItens>
                    <Input
                      title="ICSM"
                      name="icms"
                      value={values.icms}
                      error={errors.icms}
                      touched={touched.icms}
                      placeholder=""
                    />
                  </WrapperInputTwoItens>
                </Row>
              </FormShellCommodity>
            </FormFormik>
          )}
        </Formik>
      </Container>
    </ModalReact>
  );
}
