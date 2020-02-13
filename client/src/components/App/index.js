import React from 'react';
import './style.css';
import { Badge } from 'react-bootstrap';
import '../../../node_modules/antd/dist/antd.css';
import { DatePicker,InputNumber,Table } from 'antd';

const {RangePicker} = DatePicker;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
function onChangeDate(date, dateString) {
  console.log(date, dateString);
}
function onChangeNumber(value) {
  console.log('changed', value);
}

class App extends React.Component{

  boxsearch = (keyword)=>{
    console.log(keyword)
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
        <br />
        <input className="boxsearch" placeholder="Search..."  onChange={(event)=>{this.searchbox(event.target.value)}}/>
        <br />
        <RangePicker onChange={onChangeDate} />
        <br />
        {/* <InputNumber size="large" min={0} max={100000} defaultValue={0} onChange={onChangeNumber} /> */}
        <InputNumber min={0} max={100000} defaultValue={0} onChange={onChangeNumber} />
        <br />
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />,

      </div>
    );
  }
}
export default App;