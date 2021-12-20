import { useEffect, useState } from "react";
import Modal from "react-modal";
import ButtonMUI from "../ButtonMUI";
import {
  Container,
  Description,
  IconContainer,
  Image,
  Input,
  Label,
  Title,
  WrapperContainer,
  WrapperTitle,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  textAlign: string;
  title: string;
  description: string;
  image: string;
  label?: string;
  placeholder?: string;
  type: string;
  buttonText: string;
  buttonTextTwo: string;
  buttonTextColor: string;
  buttonTextColorTwo: string;
  buttonBackgroundColor: string;
  buttonBackgroundColorTwo: string;
  inputState: boolean;
  descriptionState: boolean;
  buttonTwoState: boolean;
  imageState: boolean;
  clickFunction?: () => void;
  clickFunctionTwo?: () => void;
  paddingSideProps: number;
  paddingSidePropsTwo: number;
  imageSrc?: string;
  requisitionColor?: string;
  onChange?: any;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
  textAlign,
  title,
  description,
  image,
  label,
  placeholder,
  type,
  buttonText,
  buttonTextTwo,
  buttonTextColor,
  buttonTextColorTwo,
  buttonBackgroundColor,
  buttonBackgroundColorTwo,
  inputState,
  descriptionState,
  buttonTwoState,
  imageState,
  clickFunction,
  clickFunctionTwo,
  paddingSideProps,
  paddingSidePropsTwo,
  imageSrc,
  requisitionColor,
  onChange,
}: NewTransactionModalProps) {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isButtonTwoOpen, setIsButtonTwoOpen] = useState(false);

  useEffect(() => {
    setIsInputOpen(inputState);
    setIsDescriptionOpen(descriptionState);
    setIsImageOpen(imageState);
    setIsButtonTwoOpen(buttonTwoState);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <WrapperTitle textAlign={textAlign}>
          {isImageOpen && (
            <>
              <WrapperContainer
                requisitionColor={requisitionColor ? requisitionColor : "#000"}
              >
                <IconContainer
                  requisitionColor={
                    requisitionColor ? requisitionColor : "#000"
                  }
                >
                  <Image src={imageSrc} alt="img" />
                </IconContainer>
              </WrapperContainer>
            </>
          )}
          <Title>{title}</Title>
          {isDescriptionOpen && <Description>{description}</Description>}
        </WrapperTitle>
        {isInputOpen && (
          <>
            <Label>{label}</Label>
            <Input onChange={onChange} type={type} placeholder={placeholder} />
          </>
        )}
        <ButtonMUI
          color={buttonTextColor}
          backgroundColor={buttonBackgroundColor}
          text={buttonText}
          paddingSides={paddingSideProps}
          paddingTopBottom={16}
          isLink={false}
          clickFunction={clickFunction}
        />
        {isButtonTwoOpen && (
          <>
            <ButtonMUI
              color={buttonTextColorTwo}
              backgroundColor={buttonBackgroundColorTwo}
              text={buttonTextTwo}
              paddingSides={paddingSidePropsTwo}
              paddingTopBottom={16}
              clickFunction={clickFunctionTwo}
              isLink={false}
            />
          </>
        )}
      </Container>
    </Modal>
  );
}
