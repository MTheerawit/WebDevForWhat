import React from 'react';
import '../../../node_modules/antd/dist/antd.css';
import { Table, Tag, message } from 'antd';

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
    dateRange: '',
  }
  ClickNext = ()=>{
    console.log(this.state.Year)
    console.log(this.state.Month)
    console.log(this.state.Day)
    if((this.state.Month == "09" && this.state.Day > "30") || (this.state.Month == "11" && this.state.Day > "30")){
      message.info('this month only have 30 days');
    } else {
      if(this.state.Year == "2019" && this.state.Month >= "08"){
        if(this.state.Month == "08" && this.state.Day >= "16"){
          this.state.dateRange = this.state.Year + '-' + ('0' + this.state.Month).slice(-2) + '-' + ('0' + this.state.Day).slice(-2)
          this.state.dateRange = encodeURIComponent(JSON.stringify(this.state.dateRange))
          this.componentDidMount()
        } else if(this.state.Month > "08"){
          this.state.dateRange = this.state.Year + '-' + ('0' + this.state.Month).slice(-2) + '-' + ('0' + this.state.Day).slice(-2)
          this.state.dateRange = encodeURIComponent(JSON.stringify(this.state.dateRange))
          this.componentDidMount()
        } else {
          message.info('Please select date range between 2019-08-16 to 2020-02-19');
        }
      } else if(this.state.Year == "2020" && this.state.Month <= "02"){
        if(this.state.Month == "02" && this.state.Day <= "19"){
          this.state.dateRange = this.state.Year + '-' + ('0' + this.state.Month).slice(-2) + '-' + ('0' + this.state.Day).slice(-2)
          this.state.dateRange = encodeURIComponent(JSON.stringify(this.state.dateRange))
          this.componentDidMount()
        } else if(this.state.Month == "01"){
          this.state.dateRange = this.state.Year + '-' + ('0' + this.state.Month).slice(-2) + '-' + ('0' + this.state.Day).slice(-2)
          this.state.dateRange = encodeURIComponent(JSON.stringify(this.state.dateRange))
          this.componentDidMount()
        } else {
          message.info('Please select date range between 2019-08-16 to 2020-02-19');
        }
      } else {
        message.info('Please select date range between 2019-08-16 to 2020-02-19');
      }
    }
  }
  handleChangeDate = (e, { name, value }) => {
    this.setState({ [name]: value })
    console.log(`selected ${value}`)
    console.log({[name]: value})
  }
  callAPI() {
    fetch("http://localhost:9000/getRecStock/" + this.state.dateRange)
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