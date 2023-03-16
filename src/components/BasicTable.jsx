import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
// import axiosInstance from "./AxiosInastance";
import COLUMNS from "./Columns";
import ButtonsTheme from "../Themes/ButtonsTheme";

import "./TableCss.css";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const BasicTable = () => {
  const [display, setDisplay] = useState([]);
  const [Page, setPage] = useState(1);
  const [term, setTerm] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("asc");

  const columns = useMemo(() => COLUMNS, []);

  const data = display;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,

    pageOptions,
    state: { pageIndex, pageSize },
    gotoPage,
    pageCount,
    setPageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      manualPagination: true,
    },
    usePagination
  );

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/todos?q=${term}&_page=${Page}&_limit=${pageSize}&_sort=${sort}&_order=${order}`
      )
      .then((res) => {
        console.log(res.data);
        setDisplay(res.data);
      });
  }, [pageSize, Page, order, sort, term]);

  const handlePreviousPage = () => {
    setPage(Page - 1);
  };
  const handleNextPage = () => {
    setPage(Page + 1);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
  };
  const handlechange = (event) => {
    setTerm(event.target.value);
  };
  const handlSortSubmit = (event) => {
    event.preventDefault();
  };
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };
  const handleAssengingOrder = () => {
    setOrder("asc");
  };
  const HandleDesendingOrder = () => {
    setOrder("desc");
  };
  return (
    <>
      <Box
        sx={{ display: "flex", justifyItems: "center", alignItems: "center" }}
      >
        <Box>
          <form value={term} onSubmit={handlesubmit}>
            <TextField
              placeholder="Search here"
              type="text"
              onChange={handlechange}
            />
          </form>
        </Box>
      </Box>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Box sx={{ m: "10px" }}>
        <ButtonsTheme variant="contained" onClick={handlePreviousPage}>
          Previous
        </ButtonsTheme>{" "}
        <ButtonsTheme variant="contained" onClick={handleNextPage}>
          Next
        </ButtonsTheme>{" "}
        <Box sx={{ m: "10px" }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Show {pageSize}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pageSize}
              label="Age"
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[1, 5, 10].map((pageSize) => (
                <MenuItem key={pageSize} value={pageSize}>
                  {" "}
                  Show {pageSize}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {/* <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[1, 5, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
        <nav>
          <form onSubmit={handlSortSubmit}>
            <TextField
              placeholder="Sort here"
              value={sort}
              onChange={handleSortChange}
              type="text"
            />
          </form>
          <ButtonsTheme variant="contained" onClick={handleAssengingOrder}>
            assending
          </ButtonsTheme>
          <ButtonsTheme variant="contained" onClick={HandleDesendingOrder}>
            desending
          </ButtonsTheme>
        </nav>
      </Box>
      {/* <ButtonsTheme variant="contained">Next Step</ButtonsTheme> */}
    </>
  );
};

export default BasicTable;
