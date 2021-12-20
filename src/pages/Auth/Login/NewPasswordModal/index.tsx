import Modal from "react-modal";
import DoneImg from "../../../../assets/done.png";
import ButtonMUI from "../../../../components/ButtonMUI";
import {
  Container,
  IconContainer,
  Image,
  Input,
  Label,
  Title,
  WrapperContainer,
  WrapperTitle,
} from "./styles";

interface NewPasswordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  clickFunction?: () => void;
  onChange?: any;
}

export function NewPasswordModal({
  isOpen,
  onRequestClose,
  clickFunction,
  onChange,
}: NewPasswordModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <WrapperTitle>
          <WrapperContainer>
            <IconContainer>
              <Image src={DoneImg} alt="Done" />
            </IconContainer>
          </WrapperContainer>
          <Title>Confirme sua nova senha</Title>
        </WrapperTitle>
        <Label>Senha</Label>
        <Input onChange={onChange} type="text" placeholder="Digite sua senha" />
        <Label>Digite novamente</Label>
        <Input
          onChange={onChange}
          type="text"
          placeholder="Digite sua senha novamente"
        />
        <ButtonMUI
          color="#fff"
          backgroundColor="#3751FE"
          text="Enviar"
          paddingSides={141}
          paddingTopBottom={16}
          isLink={false}
          clickFunction={clickFunction}
        />
      </Container>
    </Modal>
  );
}
