import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import '../../../node_modules/antd/dist/antd.css';
import { Tag } from 'antd';
import Table_antd from '../../../node_modules/antd/lib/table/Table'
import Title from 'antd/lib/skeleton/Title';

import ModelHistory from '../Badge/ModelHistory';
import ModelResult from '../Badge/ModelResult';

const columns = [
    {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 105,
    },
    {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
    width: 110,
    },
    {
    title: 'Price',
    dataIndex: 'open',
    key: 'open',
    width: 70,
    },
    {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    render: status => (<Tag color='gold' key={status}>{status}</Tag>)
    },
    {
    title: 'Bought amount',
    dataIndex: 'BoughtAmount',
    key: 'BoughtAmount',
    width: 120,
    },
    {
    title: 'Amount spent',
    dataIndex: 'AmountSpent',
    key: 'AmountSpent',
    width: 120,
    },
    {
    title: 'Money remaining',
    dataIndex: 'MoneyRemaining',
    key: 'MoneyRemaining',
    width: 120,
    },
    {
    title: 'Total shares',
    dataIndex: 'TotalShares',
    key: 'TotalShares',
    width: 120,
    },
    {
    title: 'Value of assets',
    dataIndex: 'ValueAssets',
    key: 'ValueAssets',
    width: 120,
    },
];
const data = [];
for (let i = 0; i < 100; i++) {
  let tmp =''
  if (i%3===0) {
    tmp = 'Downward'
  }else if(i%3===1){
    tmp = 'Stable'
  }else{
    tmp = 'Upward'
  }
  data.push({
    key: i,
    date:'xxxx-xx-xx',
    symbol:'A123456789',
    open:'10.12',
    status: tmp,
    BoughtAmount:'10000',
    AmountSpent:'50000',
    MoneyRemaining:'50000',
    TotalShares:'0',
    ValueAssets:'100000',
  });
}
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
    <div>
      <Title/>
      <ModelHistory/>
      <Title/>
      <Table_antd columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ x: 1000,y: 600 }}/>
      <Title/>
      <ModelResult/>
      <Title/>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
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
      <Title/>
    </div>
  );
}