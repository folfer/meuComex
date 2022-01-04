import React, { useEffect, useState } from "react";

import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

import {
  Container,
  Button,
  Image,
  Money,
  MoneyDescription,
  WrapperHeader,
  WrapperMoney,
} from "./styles";
import CurveUp from "../../assets/curve.png";
import CurveDown from "../../assets/curveDown.png";
interface Props {
  signal: string;
}
const CardExchange: React.FC<Props> = ({ signal }) => {
  const [buttonBackgroundColor, setButtonBackgroundColor] =
    useState<string>("");
  const [buttonColor, setButtonColor] = useState<string>("");

  const verifySignal = signal.charAt(0);

  useEffect(() => {
    if (verifySignal === "+") {
      setButtonBackgroundColor("#02863347");
      setButtonColor("#028633");
    } else if (verifySignal === "-") {
      setButtonBackgroundColor("#e01a1a47");
      setButtonColor("#E01A1A");
    }
  }, [signal]);

  return (
    <Container>
      <WrapperHeader>
        <Button
          signalBackground={buttonBackgroundColor}
          signalColor={buttonColor}
        >
          {verifySignal === "+" ? <MdArrowDropUp /> : <MdArrowDropDown />}
          {signal}
        </Button>
        <Image src={verifySignal === "+" ? CurveUp : CurveDown} alt="image" />
      </WrapperHeader>
      <WrapperMoney>
        <Money>USD 25,215</Money>
        <MoneyDescription>Valor total de câmbio contratado</MoneyDescription>
      </WrapperMoney>
    </Container>
  );
};

export default CardExchange;
