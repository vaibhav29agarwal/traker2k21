import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import TablePagination from "@material-ui/core/TablePagination";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Dropdown from "../Dropdown/AddToListDropdown";
import "./Table.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#FFF1E1",
    color: "#4E4E4E",
  },
  body: {
    fontSize: 14,
    borderBottom: 0,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    background: "#F8F8F8 0% 0% no-repeat padding-box",
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: "100%",
    borderSpacing: "4px",
    borderCollapse: "separate",
  },
  tableContainer: {
    borderTopRightRadius: "3%",
    borderTopLeftRadius: "3%",
    boxShadow: "none",
    maxHeight: "85vh",
    minWidth: "1800px",
  },
  pagination: {
    position: "absolute",
    top: "86vh",
    zIndex: "100",
    left: "60%",
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [project, setproject] = useState(false);
  const [Client, setClient] = useState({ show: false });
  const [Billable, setBillable] = useState(false);
  const [ManagerAssignmed, setManagerAssignmed] = useState(false);
  const [creationDate, setcreationDate] = useState(false);
  const [dueDate, setdueDate] = useState(false);
  const [closingDate, setclosingDate] = useState(false);
  const [hourSpent, sethourSpent] = useState(false);
  const [costSpent, setcostSpent] = useState(false);
  const [status, setstatus] = useState(false);
  const ClientDropdownlist = ["a", "b", "c"];
  const ProjectDropdown = ["p1", "p2", "p3"];
  const BillableDropdown = ["b1", "b2", "b3"];
  const ManagerAssignmedDropdown = ["m1", "m2", "m3"];
  const CreationDateDropdown = ["c1", "c2", "c3"];
  const DueDateDropdown = ["d1", "d2", "d3"];
  const ClosingDateDropdown = ["c1", "c2", "c3"];
  const HourSpentDropdown = ["h1", "h2", "h3"];
  const CostSpentDropdown = ["c1", "c2", "c3"];
  const statusDropdown = ["True", "False"];

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              Project
              <ArrowDropDownIcon
                onClick={() => {
                  setproject(true);
                }}
              />
            </StyledTableCell>
            <StyledTableCell>
              Client
              <ArrowDropDownIcon
                onClick={() => {
                  setClient((prev) => {
                    console.log(prev);
                    return { show: !prev.show };
                  });
                }}
              />
              {Client.show ? (
                <Dropdown
                  dropdownClass="clientDropdown"
                  wholeList={ClientDropdownlist}
                />
              ) : null}
            </StyledTableCell>
            <StyledTableCell>
              Billable
              <ArrowDropDownIcon
                onClick={() => {
                  setBillable(true);
                }}
              />
            </StyledTableCell>
            <StyledTableCell>
              Manager Assigned
              <ArrowDropDownIcon
                onClick={() => {
                  setManagerAssignmed(true);
                }}
              />
            </StyledTableCell>
            <StyledTableCell>
              Creation Date
              <ArrowDropDownIcon
                onClick={() => {
                  setcreationDate(true);
                }}
              />
            </StyledTableCell>
            <StyledTableCell>
              Due Date
              <ArrowDropDownIcon
                onClick={() => {
                  setdueDate(true);
                }}
              />
            </StyledTableCell>
            <StyledTableCell>
              Closing Date
              <ArrowDropDownIcon
                onClick={() => {
                  setclosingDate(true);
                }}
              />
            </StyledTableCell>
            <StyledTableCell>
              Hours Spent
              <ArrowDropDownIcon
                onClick={() => {
                  sethourSpent(true);
                }}
              />
            </StyledTableCell>
            <StyledTableCell>
              Cost Spent
              <ArrowDropDownIcon
                onClick={() => {
                  setcostSpent(true);
                }}
              />
            </StyledTableCell>
            <StyledTableCell>
              Status
              <ArrowDropDownIcon
                onClick={() => {
                  setstatus(true);
                }}
              />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              // {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>{row.fat}</StyledTableCell>
                <StyledTableCell>{row.carbs}</StyledTableCell>
                <StyledTableCell>{row.protein}</StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>{row.fat}</StyledTableCell>
                <StyledTableCell>{row.carbs}</StyledTableCell>
                <StyledTableCell>{row.protein}</StyledTableCell>
                <StyledTableCell>{row.carbs}</StyledTableCell>
                {/*<StyledTableCell>
                <EditOutlinedIcon /> <DeleteForeverIcon />
              </StyledTableCell>*/}
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        className={classes.pagination}
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
