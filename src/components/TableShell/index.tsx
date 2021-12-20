import React, { useEffect, useState } from "react";

import { MdSearch } from "react-icons/md";

import DataTable from "react-data-table-component";
import {
  MdNavigateNext,
  MdOutlineSell,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { useHistory } from "react-router-dom";
import InformationButton from "../InformationButton";
import { useAuth } from "../../hooks/useContext";

import {
  Container,
  Status,
  Estimated,
  Date,
  SeeAllButton,
  Text,
  Border,
  TableTitle,
  WrapperTitle,
  TitleContainer,
  Type,
  TypeContainer,
  Label,
  Filter,
  Wrapper,
} from "./styles";
import { InputAdornment, TextField } from "@material-ui/core";

const TableShell: React.FC<any> = ({
  isPagination,
  dataInformation,
  searchExist,
  backgroundColorWrapper,
  route,
}) => {
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

  const filteredItems = dataInformation.filter(
    (item: any) =>
      item.identifier &&
      item.identifier.toLowerCase().includes(filterText.toLowerCase())
  );

  const customStyles = {
    headCells: {
      style: {
        color: "#2B3674",
        opacity: "70%",
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
      name: "Identificador",
      selector: (row: any) => row.identifier,
      grow: 1.2,
    },
    {
      name: "Nome da empresa",
      selector: (row: any) => row.company,
      grow: 1,
    },
    {
      name: "Estimativa",
      cell: (row: any) => (
        <Estimated>
          <Date>{row.estimated}</Date>
        </Estimated>
      ),
    },
    {
      name: "Tipo",
      cell: (row: any) => (
        <TypeContainer>
          {row.type === "Importação" ? (
            <MdOutlineShoppingCart size={18} />
          ) : (
            <MdOutlineSell size={18} />
          )}
          <Type>{row.type}</Type>
        </TypeContainer>
      ),
    },
    {
      name: "Status",
      cell: (row: { status: "Finalizado" | "Transporte" | "Atraso" }) => (
        <Status
          fontColor={defineFontColor[row.status]}
          backgroundColor={defineColor[row.status]}
        >
          {row.status}
        </Status>
      ),
      grow: 1.2,
    },
  ];

  const handleRedirect = (id: any) => {
    history.push(`/${route}/${id}`);
  };

  const paginationComponentOptions = {
    rowsPerPageText: "Resultados por página",
    rangeSeparatorText: "de resultados",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <Wrapper backgroundColorWrapper={backgroundColorWrapper}>
      {searchExist ? (
        <Filter>
          <Label>Filtrar Alertas</Label>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            placeholder="Buscar"
            onChange={(e: any) => setFilterText(e.target.value)}
            defaultValue={filterText}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <MdSearch size={17} />
                </InputAdornment>
              ),
            }}
          />
        </Filter>
      ) : (
        <></>
      )}

      <Container>
        <TitleContainer>
          <WrapperTitle>
            <TableTitle>Resumo das operações</TableTitle>
            <InformationButton
              marginLeft={1}
              marginTop={0.1}
              marginBottom={0}
              marginRight={0}
              text="Et congue gravida mauris diam mauris pellentesque porttitor."
            />
          </WrapperTitle>
          <SeeAllButton>
            <Text>Ver todos</Text> <MdNavigateNext color="#4318FF;" size={16} />
          </SeeAllButton>
        </TitleContainer>
        <Border />
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination={isPagination}
          customStyles={customStyles}
          onRowClicked={() => handleRedirect(dataRow[0].id)}
          paginationComponentOptions={paginationComponentOptions}
        />
      </Container>
    </Wrapper>
  );
};

export default TableShell;
