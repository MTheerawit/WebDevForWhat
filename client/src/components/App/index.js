import React from 'react';
import './index.css';
import Header from '../../../src/components/Header/Header'
import BoxinputNum from '../../../src/components/Boxinput/BoxinputNum'
import BoxinputSearch from '../../../src/components/Boxinput/BoxinputSearch'
import TableC from '../Table/TableC'
import DropdownDate from '../../../src/components/Dropdown/DropdownDate'

export default class App extends React.Component{
  render(){
    return (
      <div className="web-background" >
        <Header></Header>
        <BoxinputNum></BoxinputNum>
        <BoxinputSearch></BoxinputSearch>
        <TableC></TableC>
        <DropdownDate></DropdownDate>
      </div>
    );
  }
}
