import React, { ChangeEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { FiEyeOff, FiEye } from "react-icons/fi";
import logo from "../../../assets/logo.png";
import CommonAuthComponents from "../CommonAuthComponent";
import letter from "../../../assets/letter.png";
import sucess from "../../../assets/cool.png";

import {
  Container,
  WelcomeText,
  LoginOptions,
  RememberContainer,
  RememberText,
  ForgotPasswordText,
  Button,
  LogoImage,
  DescriptionText,
  ButtonRegister,
  ButtonContainer,
} from "./styles";
import { NewTransactionModal } from "../../../components/NewOperationModal";
import { useAuth } from "../../../hooks/useContext";
import api from "../../../services/api";
import { NewPasswordModal } from "./NewPasswordModal";

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [cookies, setCookie] = useCookies(["meu-comex"]);
  const history = useHistory();

  const [email, setEmail] = useState<string>(cookies.user_email || "");
  const [password, setPassword] = useState<string>(cookies.user_security || "");
  const [checkValue, setCheckValue] = useState<boolean>(true);
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [forgotPassword, setForgotPassword] = useState<string>("");
  const [sucessForgotPassword, setSucessForgotPassword] = useState<boolean>();
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [colorSpinner, setColorSpinner] = useState("#ffffff");
  const [isFinishNewOperationModalOpen, setIsFinishNewOperationModalOpen] =
    useState(false);
  const [isSucessNewOperationModalOpen, setIsSucessNewOperationModalOpen] =
    useState(false);
  const [isNewPasswordModalOpen, setIsNewPasswordModalOpen] = useState(false);

  useEffect(() => {
    setLoadingSpinner(false);
    if (!localStorage.getItem("@MeuComex:token")) {
      history.push("/");
    } else {
      history.push("/dashboard");
    }
  }, []);

  const handleSendEmailForForgotPassword = () => {
    const data = {
      email: forgotPassword,
    };

    api
      .post("auth/forgotPassword", data)
      .then(() => {
        setSucessForgotPassword(true);
        handleOpenNewModal();
      })
      .catch((error) => {
        console.log(error);
        setIsFinishNewOperationModalOpen(false);
      });
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleCheckbox = () => {
    return setCheckValue(!checkValue);
  };

  const handleOpenNewModal = () => {
    setIsFinishNewOperationModalOpen(false);
    setIsSucessNewOperationModalOpen(true);
  };

  async function handleSendLogin(): Promise<void> {
    setLoadingSpinner(true);
    try {
      if (checkValue) {
        setCookie("email", email);
        setCookie("password", password);
      } else {
        setCookie("email", "");
        setCookie("password", "");
      }

      await signIn({
        email,
        password,
      });
      await history.push("/dashboard");
      setLoadingSpinner(false);
    } catch (err) {
      console.log(err);
      setLoadingSpinner(false);
    }
  }

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    z-index: 999;
  `;

  return (
    <CommonAuthComponents>
      <NewTransactionModal // Modal email operação
        isOpen={isSucessNewOperationModalOpen}
        onRequestClose={() =>
          setIsSucessNewOperationModalOpen(!isSucessNewOperationModalOpen)
        }
        textAlign="center"
        title="Enviamos uma nova senha para seu e-mail. "
        description="Utilize a nova senha para acessar o sistema e troque quando quiser no menu configurações."
        image=""
        label="E-mail de cadastro"
        placeholder="nome.sobrenome@empresa.com.br"
        type="text"
        buttonText="Fechar"
        buttonTextTwo="Cadastrar nova operação"
        buttonTextColor="#fff"
        buttonTextColorTwo="#3751FE"
        buttonBackgroundColor="#3751FE"
        buttonBackgroundColorTwo="#F4F7FE"
        inputState={false}
        descriptionState={true}
        buttonTwoState={false}
        imageState={true}
        clickFunction={() => setIsSucessNewOperationModalOpen(false)}
        clickFunctionTwo={() => 0}
        paddingSideProps={81}
        paddingSidePropsTwo={79}
        imageSrc={letter}
        requisitionColor="#028633"
      />
      <NewTransactionModal
        isOpen={isFinishNewOperationModalOpen}
        onRequestClose={() =>
          setIsFinishNewOperationModalOpen(!isFinishNewOperationModalOpen)
        }
        textAlign="center"
        title="Esqueceu sua senha?"
        description="Confirme seu e-mail de cadastro que enviaremos um link para recuperação."
        image=""
        label="E-mail de cadastro"
        placeholder="nome.sobrenome@empresa.com.br"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setForgotPassword(e.currentTarget.value)
        }
        buttonText="Enviar"
        buttonTextTwo="Cadastrar nova operação"
        buttonTextColor="#fff"
        buttonTextColorTwo="#3751FE"
        buttonBackgroundColor="#3751FE"
        buttonBackgroundColorTwo="#F4F7FE"
        inputState={true}
        descriptionState={true}
        buttonTwoState={false}
        imageState={true}
        clickFunction={handleSendEmailForForgotPassword}
        clickFunctionTwo={() => 0}
        paddingSideProps={142}
        paddingSidePropsTwo={79}
        imageSrc={sucess}
        requisitionColor="#2241EE"
      />
      <NewPasswordModal
        isOpen={isNewPasswordModalOpen}
        onRequestClose={() =>
          setIsNewPasswordModalOpen(!isNewPasswordModalOpen)
        }
        clickFunction={() => 0}
      />
      <Container>
        <LogoImage src={logo} alt="logo" />
        <WelcomeText>
          Comércio exterior inteligente, simples, e usável.
        </WelcomeText>
        <DescriptionText>
          Bom te ver de novo! Confirme os dados da sua conta:
        </DescriptionText>
        <TextField
          id="filled-basic"
          label="E-mail Address"
          autoComplete="none"
          onChange={handleChangeEmail}
          defaultValue={email}
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
        />
        <TextField
          id="filled-basic"
          variant="filled"
          label="Password"
          type={seePassword ? "text" : "password"}
          onChange={handleChangePassword}
          defaultValue={password}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                {seePassword ? (
                  <FiEyeOff
                    onClick={() => {
                      return setSeePassword(false);
                    }}
                  />
                ) : (
                  <FiEye
                    onClick={() => {
                      return setSeePassword(true);
                    }}
                  />
                )}
              </InputAdornment>
            ),
          }}
        />
        <LoginOptions>
          <RememberContainer>
            <Checkbox
              onChange={handleCheckbox}
              value={checkValue}
              checked={checkValue}
            />
            <RememberText>Me lembre</RememberText>
          </RememberContainer>

          <ForgotPasswordText
            onClick={() => setIsFinishNewOperationModalOpen(true)}
          >
            Esqueceu a senha?
          </ForgotPasswordText>
        </LoginOptions>
        <ButtonContainer>
          <Button onClick={handleSendLogin}>
            {loadingSpinner ? (
              <BeatLoader
                color={colorSpinner}
                loading={loadingSpinner}
                css={override}
                size={12}
              />
            ) : (
              <>logar</>
            )}
          </Button>
          <ButtonRegister to="/register">Cadastro</ButtonRegister>
        </ButtonContainer>
      </Container>
    </CommonAuthComponents>
  );
};

export default Login;
