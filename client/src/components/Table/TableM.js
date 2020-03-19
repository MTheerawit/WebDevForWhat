import React from 'react';

import '../../../node_modules/antd/dist/antd.css';
import { Table, Tag } from 'antd';

import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Table_material from '../../../node_modules/@material-ui/core/Table/Table'
import TableBody_material from '../../../node_modules/@material-ui/core/TableBody/TableBody'
import TableCell_material from '../../../node_modules/@material-ui/core/TableCell/TableCell'
import TableContainer_material from '../../../node_modules/@material-ui/core/TableContainer/TableContainer'
import TableHead_material from '../../../node_modules/@material-ui/core/TableHead/TableHead'
import TableRow_material from '../../../node_modules/@material-ui/core/TableRow/TableRow'

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
    render: status => (
        <Tag color='gold' key={status}>{status}</Tag>
        )
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
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ x: 1000,y: 600 }} />
            <TableContainer_material component={Paper}>
                <Table_material className={classes.table} aria-label="spanning table">
                <TableHead_material>
                    <TableRow_material>
                    <TableCell_material align="center" colSpan={3}></TableCell_material>
                    <TableCell_material align="right"></TableCell_material>
                    </TableRow_material>
                    <TableRow_material>
                    <TableCell_material>Desc</TableCell_material>
                    <TableCell_material align="right">Invest</TableCell_material>
                    <TableCell_material align="right">Profit</TableCell_material>
                    <TableCell_material align="right">Current</TableCell_material>
                    </TableRow_material>
                </TableHead_material>
                <TableBody_material>
                    {rows.map(row => (
                    <TableRow_material key={row.desc}>
                        <TableCell_material>{row.desc}</TableCell_material>
                        <TableCell_material align="right">{row.invest}</TableCell_material>
                        <TableCell_material align="right">{row.profit}</TableCell_material>
                        <TableCell_material align="right">{ccyFormat(row.sum)}</TableCell_material>
                    </TableRow_material>
                    ))}
                    <TableRow_material>
                    <TableCell_material rowSpan={3} />
                    <TableCell_material colSpan={2}>Total invest</TableCell_material>
                    <TableCell_material align="right">{ccyFormat(invoiceSubtotal)}</TableCell_material>
                    </TableRow_material>
                    <TableRow_material>
                    <TableCell_material>Total profit</TableCell_material>
                    <TableCell_material align="right">{`${(((invoiceTotal/invoiceSubtotal)*100)-100).toFixed(0)} %`}</TableCell_material>
                    <TableCell_material align="right">{ccyFormat(invoiceTaxes)}</TableCell_material>
                    </TableRow_material>
                    <TableRow_material>
                    <TableCell_material colSpan={2}>Total</TableCell_material>
                    <TableCell_material align="right">{ccyFormat(invoiceTotal)}</TableCell_material>
                    </TableRow_material>
                </TableBody_material>
                </Table_material>
            </TableContainer_material>
        </div>
    );
  }