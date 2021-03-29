import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {

    marginTop: 50,
    marginBottom: 100,
  },
});

function createData(Meal: Any, Monday: any, Tuesday: any, Wednesday: any, Thursday: any, Friday: any, Saturday: any, Sunday: any) {
  return { Meal, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday};
}

const rows = [
  createData('Breakfast', "Meal 1", "Meal 2", "Meal 3","Meal 4" ,"Meal 5", "Meal 6", "Meal 7"),
  createData('Lunch', "Meal 8", "Meal 9", "Meal 10","Meal 11" ,"Meal 12", "Meal 13", "Meal 14"),
  createData('Dinner', "Meal 15", "Meal 16", "Meal 17","Meal 18" ,"Meal 19", "Meal 20", "Meal 21"),
];

export default function BasicTable(props: any) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          {/**Content of the Columns */}
            <TableCell>  </TableCell>
            <TableCell align="right"> Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
          {/**Content of the Cells */}
              <TableCell component="th" scope="row">
              {row.Meal}
              </TableCell>
              <TableCell align="right">{row.Monday}</TableCell>
              <TableCell align="right">{row.Tuesday}</TableCell>
              <TableCell align="right">{row.Wednesday}</TableCell>
              <TableCell align="right">{row.Thursday}</TableCell>
              <TableCell align="right">{row.Friday}</TableCell>
              <TableCell align="right">{row.Saturday}</TableCell>
              <TableCell align="right">{row.Sunday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




