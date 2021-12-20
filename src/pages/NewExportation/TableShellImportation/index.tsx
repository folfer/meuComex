import React, { useEffect, useState } from "react";

import { MdSearch } from "react-icons/md";

import DataTable from "react-data-table-component";
import {
  MdNavigateNext,
  MdOutlineSell,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { useHistory } from "react-router-dom";
import InformationButton from "../../../components/InformationButton";
import { useAuth } from "../../../hooks/useContext";

import {
  Container,
  Estimated,
  Date,
  Border,
  TableTitle,
  WrapperTitle,
  TitleContainer,
  Label,
  Filter,
  Wrapper,
} from "./styles";
import { InputAdornment, TextField } from "@material-ui/core";

const TableShellImportation: React.FC<any> = ({
  isPagination,
  dataInformation,
  searchExist,
  backgroundColorWrapper,
  setIsSelectedExporter,
  showForm,
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
  const [isEmpty, setIsEmpty] = React.useState<boolean>(false);

  const filteredItems = dataInformation.filter(
    (item: any) =>
      item.identifier &&
      item.identifier.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    if (filterText === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [filterText]);

  const customStyles = {
    headCells: {
      style: {
        color: "#2B3674",
        opacity: "70%",
      },
    },
  };

  const columns = [
    {
      name: "Identificação",
      selector: (row: any) => row.identifier,
      grow: 1.2,
    },
    {
      name: "Contato",
      selector: (row: any) => row.contact,
      grow: 1,
    },
    {
      name: "País",
      cell: (row: any) => (
        <Estimated>
          <Date>{row.country}</Date>
        </Estimated>
      ),
    },
    {
      name: "Início da vigência",
      cell: (row: any) => (
        <Estimated>
          <Date>{row.validity}</Date>
        </Estimated>
      ),
    },
  ];

  const handleRedirect = (id: any) => {
    history.push(`/xxxx/${id}`);
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
          <Label>Buscar exportadores cadastrados</Label>
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

      {!isEmpty ? (
        <Container>
          <TitleContainer>
            <WrapperTitle>
              <TableTitle>Buscar de exportadores</TableTitle>
            </WrapperTitle>
          </TitleContainer>
          <Border />
          <DataTable
            columns={columns}
            data={filteredItems}
            pagination={isPagination}
            customStyles={customStyles}
            onRowClicked={() => setIsSelectedExporter(true)}
            paginationComponentOptions={paginationComponentOptions}
          />
        </Container>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default TableShellImportation;
