import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

const data = [];
for (let i = 10; i < 36; i++) {
  data.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

export default class SelectAndSearch extends React.Component{

  handleChange=(value)=>{
    console.log(`selected ${value}`);
  }

  render(){
    return(
      <div>
        <Select 
          mode="tags" 
          style={{ width: '100%' }}
          placeholder="Select or Search" 
          onChange={this.handleChange} 
          tokenSeparators={[',']}>
          {data}
        </Select>
      </div>
    )
  }
}