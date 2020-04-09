import React from 'react';
import '../../../node_modules/antd/dist/antd.css';
import { Table, Tag} from 'antd';

import Title from 'antd/lib/skeleton/Title';
import ModelHistory from '../Badge/ModelHistory';
import ModelResult from '../Badge/ModelResult';

const columnsHistory = [
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
  width: 155,
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
  width: 95,
  fixed: 'right',
  render: status => (
    <Tag color='gold' key={status}>{status}</Tag>
    )
  },
];

const columnsResult = [
  {
  title: 'Symbol',
  dataIndex: 'symbol',
  key: 'symbol',
  fixed: 'left',
  },
  {
  title: 'LastBalance',
  dataIndex: 'lastBalance',
  key: 'lastBalance',
  },
  {
  title: 'Profit',
  dataIndex: 'profit',
  key: 'profit',
  },
];

export default class TableM extends React.Component{
  state = {
    dataHistory: [],
    // dataResult: [],
    dataResult: [
      {
        key: '1',
        symbol:'AB1',
        lastBalance:'10000',
        profit:'10.12'
      },
      {
        key: '2',
        symbol:'AB2',
        lastBalance:'800',
        profit:'11.12'
      },
      {
        key: '3',
        symbol:'AB3',
        lastBalance:'9000',
        profit:'-10.12'
      },
    ],
  }
  callAPI() {
    fetch("http://localhost:9000/getRecStock")
    .then(res => res.json())
    .then(res => {
      this.setState({ dataHistory: res})
    })
    .catch(err => err)
  }
  componentDidMount(){
    this.callAPI()
  }
  render(){
    return(
      <div>
        <Title/>
        <ModelHistory/>
        <Title/>
        <Table 
          columns={columnsHistory} 
          dataSource={this.state.dataHistory} 
          pagination={{ pageSize: 10 }} 
          scroll={{ x: 1000,y: 600 }} 
        />
        <Title/>
        <Title/>
        <ModelResult/>
        <Title/>
        <Table 
          columns={columnsResult} 
          dataSource={this.state.dataResult} 
          pagination={{ pageSize: 10 }} 
          scroll={{ x: 1000,y: 600 }} 
        />
        <Title/>
      </div>
    )
  }
}