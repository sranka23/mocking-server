import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";



const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

function createData(name, description, id) {
  const url = `http://localhost:9000/mock/${id}`
  return { name, description, id, url };
}


export default function Home() {
  const [rows, setRows] = useState([]);
  const generateRows = (inputResponse) => {
    const rowsData = [];
    inputResponse.data.forEach((item) => {
      rowsData.push(createData(item.mock_name, item.mock_description, item._id));
    })
    return rowsData;
  }
  const removeAPI = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:9000/mock/${id}`).then(() => {
      axios.get('http://localhost:9000/mocks')
        .then((response) => {
          console.log(response);
          if (response.data && response.data.length) {
            setRows(generateRows(response));
          }
        })
        .catch(() => { })
    }).catch(() => { })
  }

  useEffect(() => {
    axios.get('http://localhost:9000/mocks')
      .then((response) => {
        console.log(response);
        if (response.data && response.data.length) {
          setRows(generateRows(response));
        }
      })
      .catch(() => { })
  }, [])
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                <ul>
                  <li><a href={row.url} target="_blank" rel="noopener noreferrer">View Data</a></li>
                  <li><Link to={`/update-mock/${row.id}`}>Update</Link></li>
                  <li><a href="/" onClick={(e) => { removeAPI(e, row.id); }}>Delete</a></li>
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
