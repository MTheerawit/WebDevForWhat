import React from 'react';
import '../../../node_modules/antd/dist/antd.css';
import { Table, Tag } from 'antd';

const columns = [
    {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 105,
    // fixed: 'left',
    },
    {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
    width: 110,
    // fixed: 'left',
    },
    {
    title: 'Price',
    dataIndex: 'open',
    key: 'open',
    width: 70,
    // fixed: 'left',
    },
    {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    // fixed: 'left',
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
    // fixed: 'right',
    },
];
const data = [];
for (let i = 0; i < 100; i++) {
  let tmp =''
  // let color =''
  if (i%3===0) {
    // tmp = '-1'
    tmp = 'Downward'
    // color = 'volcano'

  }else if(i%3===1){
    // tmp = '0'
    tmp = 'Stable'
    // color = 'geekblue'
  }else{
    // tmp = '1'
    tmp = 'Upward'
    // color = 'green'
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

export default class TableHistory extends React.Component{
  render(){
    return(
      <div>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ x: 1000,y: 600 }} />
      </div>
    )
  }
}