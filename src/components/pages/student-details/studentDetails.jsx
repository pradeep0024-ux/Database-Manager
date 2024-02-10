import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
  
const useStyles = makeStyles({
 finalRow: {
   backgroundColor: "lightblue"
 }
});
  
function createData(number, name, fname, email) {
 return { number, name, fname, email };
}
  
const rows = [
 createData(1, "Apple", 5, 3),
 createData(2, "Orange", 2, 2),
 createData(3, "Grapes", 3, 1),
 createData(4, "Tomato", 2, 1.6),
 createData(5, "Mango", 1.5, 4)
];
  
export default function Details() {
 const classes = useStyles();
 let mobile = 0;
  
 // Finding the Total Cost
  
 return (
   <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>S.No</TableCell>
           <TableCell align="right">name</TableCell>
           <TableCell align="right">father name</TableCell>
           <TableCell align="right">email</TableCell>
           <TableCell align="right">  <Link to="/add-student"> Add Student </Link> </TableCell>

         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow key={row.number}>
             <TableCell component="th" scope="row">
               {row.number}
             </TableCell>
             <TableCell align="right">{row.name}</TableCell>
             <TableCell align="right">{row.fname}</TableCell>
             <TableCell align="right">{row.email}</TableCell>
           </TableRow>
         ))}
         <TableRow className={classes.finalRow}>
           <TableCell align="right" colSpan={4}>
             <b>mobile:</b> ${mobile}
           </TableCell>
         </TableRow>
       </TableBody>
     </Table>
   </TableContainer>
 );
}