import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  
function sumRow(invest, profit) {
    return invest + profit;
  }

function createRow(desc, invest, profit) {
    const sum = sumRow(invest, profit);
    return { desc, invest, profit, sum };
  }
  
function totalCurrent(items) {
    return items.map(({ sum }) => sum).reduce((sum, i) => sum + i, 0);
  }

function totalProfit(items) {
    return items.map(({ profit }) => profit).reduce((profit, i) => profit + i, 0);
  }

function totalInvest(items) {
    return items.map(({ invest }) => invest).reduce((invest, i) => invest + i, 0);
  }
  
const rows = [
    createRow('Symbol(1)', 10000, 2000),
    createRow('Symbol(2)', 10000, -5000),
    createRow('Symbol(3)', 10000, 500),
];
  
const invoiceSubtotal = totalInvest(rows);
const invoiceTaxes = totalProfit(rows);
const invoiceTotal = totalCurrent(rows);

export default function SpanningTable() {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Invest</TableCell>
              <TableCell align="right">Profit</TableCell>
              <TableCell align="right">Current</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.invest}</TableCell>
                <TableCell align="right">{row.profit}</TableCell>
                <TableCell align="right">{ccyFormat(row.sum)}</TableCell>
              </TableRow>
            ))}
  
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Total invest</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total profit</TableCell>
              <TableCell align="right">{`${(((invoiceTotal/invoiceSubtotal)*100)-100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }