//look at example 1 & 2
//this screen should show a table of the small business you have selected. 
//4 or 5 business required
//minimum business data is /name/description/address/operating hours
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: "75%"
    
  },
});

function createData(name, Description, Hours,Address) {
  return { name, Description, Hours,Address };
}

const rows = [
  createData('Home Slice Pizza', 'Home Slice Pizza is an independent neighborhood pizza joint serving authentic NY-style pizza- by the pie or by the slice-to nice people like you. We offer our homeade, hand tossed, bona fide pies for either dine in or carry out.', '11AM - 11PM','1415 S Congress Ave, Austin, TX 78704'),
  createData(`Joe's Coffee`, `Stumptown coffee, baked goods & sandwhiches in colorful digs with outdoor area for people-watching`,'7AM - 9PM', '242 W 2nd St. Austin, TX 78701'),
];

function Listings() {
  const classes = useStyles();

  return (
    <TableContainer align='center' component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="center">Hours</TableCell>
            <TableCell align="center">Address</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={ row.name}>
              <TableCell component="th" scope="row">
                
                <a href='google.com'> {row.name} </a>
                
              </TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.Hours}</TableCell>
              <TableCell align="right">{row.Address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Listings;