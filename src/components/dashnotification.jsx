import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100% }} aria-label="simple table">
        <TableHead classname="bg-gray-100  dark:bg-gray-700 border-r border-grey-200">
          <TableRow>
            <TableCell classname="texe-sm font-normal leading-6 text-grey-600 border-r border-grey-200">Dessert (100g serving)</TableCell>
            <TableCell classname="texe-sm font-normal leading-6 text-grey-600 border-r border-grey-200" align="right">Calories</TableCell>
            <TableCell classname="texe-sm font-normal leading-6 text-grey-600 border-r border-grey-200" align="right">Fat&nbsp;(g)</TableCell>
            <TableCell classname="texe-sm font-normal leading-6 text-grey-600 border-r border-grey-200" align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell classname="texe-sm font-normal leading-6 text-grey-600 border-r border-grey-200" align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell classname="texe-sm font-normal leading-6 text-grey-600 border-r border-grey-200" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell classname="texe-sm font-normal leading-6 text-grey-600 border-r border-grey-200" align="right">{row.calories}</TableCell>
              <TableCell classname="texe-sm font-normal leading-6 text-grey-600 border-r border-grey-200" align="right">{row.fat}</TableCell>
              <TableCell classname="texe-sm font-normal leading-6 text-grey-600 border-r border-grey-200" align="right">{row.carbs}</TableCell>
              <TableCell classname="texe-sm font-normal leading-6 text-grey-600 border-r border-grey-200" align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
