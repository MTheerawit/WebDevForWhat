import React from 'react';
import '../../../node_modules/antd/dist/antd.css';
import { Table } from 'antd';

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
      width: 165,
    },
    {
      title: 'TotalVolume("000 bath)',
      dataIndex: 'money',
      key: 'money',
      width: 185,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 140,
      fixed: 'right',
      // render: () => ( <Tag color={color} key={tag}/> )
    },
  ];
  const data = [];
  for (let i = 0; i < 20; i++) {
    let tmp =''
    if (i%3===0) {
      // tmp = '1'
      tmp = 'Downward'
    }else if(i%3===1){
      // tmp = '0'
      tmp = 'Stable'
    }else{
      // tmp = '-1'
      tmp = 'Upward'
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
      // status: '0',
    });
  }

export default class TableC extends React.Component{
    render(){
        return(
            <div>
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 600 }} />
            </div>
        )
    }
}