import React from 'react';
import '../../../node_modules/antd/dist/antd.css';
import { Table, Tag } from 'antd';

const columns = [
  {
  title: 'Date',
  dataIndex: 'date',
  key: 'date',
  width: 105,
  fixed: 'left',
  },
  {
  title: 'Symbol',
  dataIndex: 'symbol',
  key: 'symbol',
  width: 110,
  fixed: 'left',
  },
  {
  title: 'Open',
  dataIndex: 'open',
  key: 'open',
  width: 70,
  },
  {
  title: 'High',
  dataIndex: 'high',
  key: 'high',
  width: 70,
  },
  {
  title: 'Low',
  dataIndex: 'low',
  key: 'low',
  width: 70,
  },
  {
  title: 'Last',
  dataIndex: 'close',
  key: 'close',
  width: 70,
  },
  {
  title: 'Change%',
  dataIndex: 'percentchange',
  key: 'percentchange',
  width: 95,
  },
  {
  title: 'TotalVolume(shares)',
  dataIndex: 'volume',
  key: 'volume',
  width: 120,
  },
  {
  title: 'TotalVolume("000 bath)',
  dataIndex: 'money',
  key: 'money',
  width: 120,
  },
  {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  width: 100,
  fixed: 'right',
  render: status => (
    <Tag color='gold' key={status}>{status}</Tag>
    )
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
    date: '2019-08-15',
    symbol: 'A123456789',
    open: '219',
    high: '219',
    low: '215',
    close: '216',
    percentchange: '-3.57',
    volume: '145057103',
    money: '777777777.777',
    status: tmp,
  });
}

export default class TableR extends React.Component{
  render(){
    return(
      <div>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ x: 1000,y: 600 }} />
      </div>
    )
  }
}