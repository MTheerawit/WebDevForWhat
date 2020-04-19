import React from 'react';
import '../../../node_modules/antd/dist/antd.css';
import { Table, Tag} from 'antd';

import Title from 'antd/lib/skeleton/Title';
import ModelHistory from '../Badge/ModelHistory';
import ModelResult from '../Badge/ModelResult';

import { Container } from 'semantic-ui-react';
import { Button } from "semantic-ui-react";

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
  dataIndex: 'name',
  key: 'name',
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
    dataResult: [],
  }
  getSimulatedStock() {
    fetch("http://localhost:9000/getSimulatedStock")
    .then(res => res.json())
    .then(res => {
      this.setState({ dataHistory: res.history })
      this.setState({ dataResult: res.stockSummary })
    })
    .catch(err => err)
  }
  componentDidMount(){
    this.getSimulatedStock()
  }

  ClickBack = ()=>{
    console.log('cClick  : Back');
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

        <Title/>
        <Container textAlign='right'>
          <Title/>
          <Button color="blue" onClick={this.ClickBack} >Back</Button>  
          <Title/>
        </Container>
        <Title/>

      </div>
    )
  }
}