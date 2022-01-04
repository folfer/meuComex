import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useContext";

import {
  Container,
  Header,
  ProgressBarContainer,
  Title,
  WrapperContainer,
  WrapperFirstSectionHeader,
  WrapperText,
  WrapperTitleHeader,
} from "./styles";

import ProgressBarImportation from "./ProgressBar";
import Identification from "./Identification";
import ExchangeClosing from "./ExchangeClosing";
import ExpenditureCalculation from "./ExpenditureCalculation";
import ShippingDetails from "./ShippingDetails";
import Expenditure from "./Expenditure";
import Exporter from "./Exporter";
import Commodity from "./Commodity";
import Transport from "./Transport";
import RadarRelease from "./RadarRelease";
import Closing from "./Closing";

const NewImportation: React.FC = () => {
  const { setGlobalCount } = useAuth();
  const [count, setCount] = useState(1);
  const [percent, setPercent] = useState(5);

  useEffect(() => {
    setGlobalCount(count);
  }, [count, setGlobalCount]);

  const handleIncrement = () => {
    setCount((count) => count + 1);
    if (count === 1 || count <= 1) {
      setPercent(15);
    } else if (count === 2) {
      setPercent(26);
    } else if (count === 3) {
      setPercent(35);
    } else if (count === 4) {
      setPercent(45);
    } else if (count === 5) {
      setPercent(56);
    } else if (count === 6) {
      setPercent(67);
    } else if (count === 7) {
      setPercent(78);
    } else if (count === 8) {
      setPercent(100);
    } else if (count === 9) {
      setPercent(89);
    } else if (count === 10) {
      setPercent(100);
    }
  };

  return (
    <Container>
      <Header>
        <WrapperText>
          <WrapperFirstSectionHeader>
            <WrapperTitleHeader>
              <Title>Nova Operação</Title>
            </WrapperTitleHeader>
          </WrapperFirstSectionHeader>
        </WrapperText>
      </Header>
      <ProgressBarContainer>
        <ProgressBarImportation percent={percent} />
      </ProgressBarContainer>
      <WrapperContainer>
        {count === 1 && <Identification handleIncrement={handleIncrement} />}
        {count === 2 && <Exporter handleIncrement={handleIncrement} />}
        {count === 3 && <Commodity handleIncrement={handleIncrement} />}
        {count === 4 && <Expenditure handleIncrement={handleIncrement} />}
        {count === 5 && (
          <ExpenditureCalculation handleIncrement={handleIncrement} />
        )}
        {count === 6 && <ShippingDetails handleIncrement={handleIncrement} />}
        {count === 7 && <ExchangeClosing handleIncrement={handleIncrement} />}
        {count === 8 && <Transport handleIncrement={handleIncrement} />}
        {count === 9 && <RadarRelease handleIncrement={handleIncrement} />}
        {count === 10 && <Closing handleIncrement={handleIncrement} />}
      </WrapperContainer>
    </Container>
  );
};

export default NewImportation;
