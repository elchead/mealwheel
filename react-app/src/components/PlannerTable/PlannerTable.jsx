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

interface Props {
    rows: Array <{
        Mo: string;
        Tu: string;
        We: string;
        Th: string;
        Fr: string;
        Sa: string;
        Su: string;
    }>;
}

export default function PlannerTable({rows}: Props) {
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
          {/**Content of the Columns */}
            <TableCell align="center"> Monday</TableCell>
            <TableCell align="center">Tuesday</TableCell>
            <TableCell align="center">Wednesday</TableCell>
            <TableCell align="center">Thursday</TableCell>
            <TableCell align="center">Friday</TableCell>
            <TableCell align="center">Saturday</TableCell>
            <TableCell align="center">Sunday</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.Mo} </TableCell>
              <TableCell align="center">{row.Tu}</TableCell>
              <TableCell align="center">{row.We}</TableCell>
              <TableCell align="center">{row.Th}</TableCell>
              <TableCell align="center">{row.Fr}</TableCell>
              <TableCell align="center">{row.Sa}</TableCell>
              <TableCell align="center">{row.Su}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}