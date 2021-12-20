import React from "react";
import ButtonMUI from "../ButtonMUI";

import {
  Container,
  Title,
  Text,
  WrapperValue,
  Value,
  TextValue,
  FormText,
  Form,
} from "./styles";

interface Props {
  title: string;
  value: string;
  date: string;
  text: string;
  formTextOne: string;
  formTextTwo: string;
  formTextThree: string;
}

const Card: React.FC<Props> = ({
  title,
  value,
  date,
  text,
  formTextOne,
  formTextTwo,
  formTextThree,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <WrapperValue>
        <Value>R${value}</Value>
        <TextValue>/ {date}</TextValue>
      </WrapperValue>
      <Text>{text}</Text>
      <Form>
        <FormText>{formTextOne}</FormText>
        <FormText>{formTextTwo}</FormText>
        <FormText>{formTextThree}</FormText>
      </Form>
      <ButtonMUI
        color="#fff"
        backgroundColor="#3751FE"
        text="Contratar"
        paddingSides={80}
        paddingTopBottom={14}
        isLink={false}
      />
    </Container>
  );
};

export default Card;
