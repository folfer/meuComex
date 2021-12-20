import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useContext";
import { useLocation } from "react-router-dom";

import {
  Container,
  Title,
  Description,
  WrapperText,
  Header,
  InfoButton,
  Border,
  Text,
  ClosedButton,
  HeaderDescription,
  WrapperBody,
  WrapperTitleHeader,
  Routes,
  WrapperHelperText,
  HelperText,
  WrapperFirstSectionHeader,
} from "./styles";
import TableShell from "../../components/TableShell";
import ButtonMUI from "../../components/ButtonMUI";
import { MdOutlineFileDownload, MdClose } from "react-icons/md";
import { downloadCSV } from "../../utils/DownloadCSV";
import InformationButton from "../../components/InformationButton";

const History: React.FC = () => {
  const { oldPath, setOldPath, data, column, name } = useAuth();
  const [isExpand, setIsExpand] = useState(false);

  const location = useLocation();

  const dataInformation = [
    {
      id: 1,
      identifier: "Marina Funke",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Transporte",
    },
    {
      id: 2,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Exportação",
      status: "Finalizado",
    },
    {
      id: 3,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Transporte",
    },
    {
      id: 4,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Exportação",
      status: "Finalizado",
    },
    {
      id: 5,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Transporte",
    },
    {
      id: 6,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 7,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Exportação",
      status: "Finalizado",
    },
    {
      id: 8,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Atraso",
    },
    {
      id: 9,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Exportação",
      status: "Transporte",
    },
    {
      id: 10,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Atraso",
    },
    {
      id: 11,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 12,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Atraso",
    },
    {
      id: 13,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
    {
      id: 14,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Atraso",
    },
    {
      id: 15,
      identifier: "Carlos",
      company: "Ace",
      estimated: "70.00 20/02",
      type: "Importação",
      status: "Finalizado",
    },
  ];

  return (
    <Container>
      <Header>
        <WrapperText>
          <WrapperFirstSectionHeader>
            <WrapperTitleHeader>
              <Title>Histórico</Title>
              <Routes>{`${
                oldPath ? oldPath.replace("/", "") : ""
              } > ${location.pathname.replace("/", "")}`}</Routes>
            </WrapperTitleHeader>
            <ButtonMUI
              color="#fff"
              backgroundColor="#3751FE"
              text="Exportar Relatório"
              paddingSides={40}
              paddingTopBottom={16}
              isLink={false}
              clickFunction={() => downloadCSV(data, column, name)}
            >
              <MdOutlineFileDownload />
            </ButtonMUI>
          </WrapperFirstSectionHeader>
          <WrapperHelperText>
            <HelperText>
              Elementum sed pretium dolor nulla a curabitur facilisis
            </HelperText>
            <InformationButton
              marginLeft={0}
              marginTop={0.5}
              marginBottom={0}
              marginRight={0}
              text="Et congue gravida mauris diam mauris pellentesque porttitor."
            />
          </WrapperHelperText>
        </WrapperText>
        <Description isExpand={!isExpand}>
          <HeaderDescription>
            <ClosedButton onClick={() => setIsExpand(!isExpand)}>
              <MdClose />
            </ClosedButton>
          </HeaderDescription>
          <WrapperBody>
            <InfoButton />
            <Border />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              sed pretium dolor nulla a curabitur facilisis. Et congue gravida
              mauris diam mauris pellentesque porttitor. Neque pellentesque
              pellentesque malesuada quisque imperdiet amet, vitae nulla nec.
              Ultricies eget amet, faucibus non mi lectus at pretium. Elementum
              tincidunt fusce tristique lorem ante maecenas non, at. Facilisis
              tempor consectetur mauris potenti dolor. At netus at habitant
              platea parturient blandit sapien vitae. Morbi quis faucibus
              vestibulum ac eget commodo
            </Text>
          </WrapperBody>
        </Description>
      </Header>
      <TableShell
        searchExist={false}
        isPagination={true}
        dataInformation={dataInformation}
      />
    </Container>
  );
};

export default History;
