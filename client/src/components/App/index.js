import React from 'react';
import './style.css';
import { Badge } from 'react-bootstrap';
import '../../../node_modules/antd/dist/antd.css';
import { Table } from 'antd';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    width: 120,
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    width: 120,
  },
  {
    title: 'Open',
    dataIndex: 'open',
    width: 70,
  },
  {
    title: 'High',
    dataIndex: 'high',
    width: 70,
  },
  {
    title: 'Low',
    dataIndex: 'low',
    width: 70,
  },
  {
    title: 'Last',
    dataIndex: 'close',
    width: 70,
  },
  {
    title: 'Change%',
    dataIndex: 'percentchange',
    width: 95,
  },
  {
    title: 'TotalVolume(shares)',
    dataIndex: 'volume',
    width: 165,
  },
  {
    title: 'TotalVolume("000 bath)',
    dataIndex: 'money',
    width: 185,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 70,
  },
];
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    date: '2019-08-15',
    symbol: 'ADVANC',
    open: '219',
    high: '219',
    low: '215',
    close: '216',
    percentchange: '-3.57',
    volume: '145057103',
    money: '777777777.777',
    status: '0',
  });
}

class App extends React.Component{

  BoxInputSearch = (keyword)=>{
    console.log('search : ',keyword);
  }

  BoxInputNumber = (number)=>{
    console.log('inputnum : ', number);
  }

  render(){
    return (
      <div className="web-background">
        <table className="web-header">
          <tbody>
            <tr>
              <td>
                <h1 className ="fontHeader"><Badge variant="success">Advice</Badge><Badge variant="danger">Trading</Badge></h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input className="boxinput" placeholder="Search..."  onChange={(event)=>{this.BoxInputSearch(event.target.value)}}/>
        <input className="boxinput" placeholder="0"  onChange={(event)=>{this.BoxInputNumber(event.target.value)}}/>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 600 }} />,
      </div>
    );
  }
}
export default App;