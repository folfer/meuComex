import React, { useEffect, useState } from "react";

import { MdDeleteOutline } from "react-icons/md";

import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";

import {
  Container,
  Estimated,
  Date,
  SeeAllButton,
  Border,
  TableTitle,
  WrapperTitle,
  TitleContainer,
  Type,
  TypeContainer,
} from "./styles";
import { useAuth } from "../../../../hooks/useContext";

const TableShell: React.FC<any> = ({ dataInformation, searchExist }) => {
  const history = useHistory();

  const { setData, setColumn, setName } = useAuth();

  const [dataRow, setDataRow] = useState<any>([]);

  useEffect(() => {
    setDataRow(dataInformation);
    setData(dataInformation);
    setColumn(columns);
    setName("csv");
  }, []);

  const [filterText, setFilterText] = React.useState("");
  React.useState(false);
  const filteredItems = dataInformation.filter(
    (item: any) =>
      item.identifier &&
      item.identifier.toLowerCase().includes(filterText.toLowerCase())
  );

  const customStyles = {
    headCells: {
      style: {
        color: "#2B3674",
        opacity: "100%",
      },
    },
  };

  const defineColor = {
    Finalizado: "#028633",
    Transporte: "#FDD817",
    Atraso: "#E01A1A",
  };

  const defineFontColor = {
    Transporte: "#474A5F",
    Atraso: "#FFFFFF",
    Finalizado: "#FFFFFF",
  };

  const columns = [
    {
      name: "Descrição da mercadoria",
      selector: (row: any) => row.identifier,
      grow: 1.2,
    },
    {
      name: "Valor unitário",
      selector: (row: any) => row.company,
      grow: 1,
    },
    {
      name: "Total de impostos",
      cell: (row: any) => (
        <Estimated>
          <Date>{row.estimated}</Date>
        </Estimated>
      ),
    },
    {
      name: "Total de despesas",
      cell: (row: any) => (
        <TypeContainer>
          <Type>{row.type}</Type>
        </TypeContainer>
      ),
    },
    {
      name: "",
      cell: (row: any) => (
        <TypeContainer>
          <Type>
            <MdDeleteOutline size={19} color="#8394fe" />
          </Type>
        </TypeContainer>
      ),
      grow: 1.2,
    },
  ];

  const handleRedirect = (id: any) => {
    history.push(`/importation/${id}`);
  };

  return (
    <Container>
      <TitleContainer>
        <WrapperTitle>
          <TableTitle>Detalhamento da mercadoria</TableTitle>
        </WrapperTitle>
        <SeeAllButton></SeeAllButton>
      </TitleContainer>
      <Border />
      <DataTable
        columns={columns}
        data={filteredItems}
        customStyles={customStyles}
        onRowClicked={() => handleRedirect(dataRow[0].id)}
      />
    </Container>
  );
};

export default TableShell;
