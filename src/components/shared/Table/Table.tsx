import React, { FC } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useStyles } from "./TableStyles";

interface HistoryGameRow {
  time: string;
  guess: string;
  result: number;
  didWin: boolean;
}

interface CustomTableProps {
  rows: HistoryGameRow[];
  cells: string[];
}

const CustomTable: FC<CustomTableProps> = ({ rows, cells }) => {
  const styles = useStyles();

  return (
    <TableContainer component={Paper} sx={styles.container}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {cells.map((item, index) => (
              <TableCell key={index} align="left">
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="left">{row.time}</TableCell>
              <TableCell align="left">{row.guess}</TableCell>
              <TableCell
                align="left"
                sx={{
                  color: row.didWin ? "#2e7d32" : "#d32f2f",
                }}
              >
                {row.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
