import React from 'react';
import '../../../node_modules/antd/dist/antd.css';
import { Table, Tag } from 'antd';

import {  Grid, Dropdown,Button } from 'semantic-ui-react'
import _ from "lodash";

import RecommendToday from '../Badge/RecommendToday';
import Title from 'antd/lib/skeleton/Title';

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

export default class TableR extends React.Component{
  state = {
    data: [],
    Year: '',
    Month: '',
    Day: '',
  }
  ClickNext = ()=>{
    console.log('muyuuu')
  }
  handleChangeDate = (e, { name, value }) => {
    this.setState({ [name]: value })
    console.log(`selected ${value}`)
    console.log({[name]: value})
  }
  callAPI() {
    fetch("http://localhost:9000/getRecStock")
    .then(res => res.json())
    .then(res => {
      this.setState({ data: res})
    })
    .catch(err => err)
  }
  componentDidMount(){
    this.callAPI()
  }
  render(){
    const getOptions = (number, prefix = "") =>
      _.times(number, index => ({
          key: index,
          text: `${prefix}${index + 1}`,
          value: index+1
      }));
    const getOptionsYear = (number, prefix = "") =>
      _.times(number, index => ({
          key: index,
          text: `${prefix}${index + 2019}`,
          value: index+2019
      }));
    const { value } = this.state
    return(
      <div>

        <Title/>
        <RecommendToday/>
        <Title/>

        <Grid columns='equal'>
          <Grid.Column>
            <Dropdown
              selection
              name = 'Year'
              options={getOptionsYear(2)}
              onChange={this.handleChangeDate }
              placeholder='Year'
              value={value}
            />
            <Dropdown
              selection
              name = 'Month'
              options={getOptions(12)}
              onChange={this.handleChangeDate }
              placeholder='Month'
              value={value}
            />
            <Dropdown
              selection
              name = 'Day'
              options={getOptions(31)}
              onChange={this.handleChangeDate }
              placeholder='Day'
              value={value}
            />
            <Button color="teal" onClick={this.ClickNext} >mayu</Button>
          </Grid.Column>
        </Grid>

        <Title/>
        <Table columns={columns} dataSource={this.state.data} pagination={{ pageSize: 10 }} scroll={{ x: 1000,y: 600 }} />
        <Title/>

      </div>
    )
  }
}