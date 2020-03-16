import React from 'react';
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';

export default class InputNumberC extends React.Component{

  InputNumber = (value)=>{
    console.log('inputnum : ', value);
}

  render(){
    return(
      <div>
        <InputNumber min={0} max={1000000} defaultValue={0} onChange={this.InputNumber} />
      </div>
    )
  }
}