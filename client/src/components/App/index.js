import React from 'react';
import './index.css';
import Header from '../../../src/components/Header/Header'
import BoxinputNum from '../../../src/components/Boxinput/BoxinputNum'
import BoxinputSearch from '../../../src/components/Boxinput/BoxinputSearch'
import TableC from '../Table/TableC'
import DropdownDate from '../../../src/components/Dropdown/DropdownDate'
import ButtonNext from '../Button/ButtonNext';
import ButtonBack from '../Button/ButtonBack';

export default class App extends React.Component{
  render(){
    return (
      <div className="web-background" >
        <Header/>
        
      </div>
    );
  }
}
