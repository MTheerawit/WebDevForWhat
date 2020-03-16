import React from 'react';
import './index.css';

import { Container } from 'semantic-ui-react';
import Title from 'antd/lib/skeleton/Title';

import TableR from '../Table/TableR';
import TableS from '../Table/TableS';
import ButtonNext from '../Button/ButtonNext';
import DropdownDate from '../Dropdown/DropdownDate';
import SelectAndSearch from '../SelectAndSearch/SelectAndSearch'

import Header from '../Badge/Header'
import RecommendToday from '../Badge/RecommendToday';
import ModelPurchase from '../Badge/ModelPurchase';
import SelectDate from '../Badge/SelectDate';
import SelectSymbol from '../Badge/SelectSymbol';
import EnterAmount from '../Badge/EnterAmount';


export default class App extends React.Component{
  render(){
    return (
      <div className="web-background">
        <Container textAlign='center'>
          <Header/>
        </Container>

        <Title/>
        <Container textAlign='left'>
          <Title/>
          <RecommendToday/>
          <Title/>
          <TableR/>
          <Title/>
        </Container>

        <Title/>
        <Container textAlign='center'>
          <ModelPurchase/>
        </Container>

        <Title/>
        <Container textAlign='left'>
          <Title/>
          <SelectDate/>
          <Title/>
          <DropdownDate/>
          <Title/>
        </Container>

        <Title/>
        <Container textAlign='left'>
          <Title/>
          <SelectSymbol/>
          <Title/>
          <SelectAndSearch/>
          <Title/>
        </Container>

        <Title/>
        <Container textAlign='left'>
          <Title/>
          <EnterAmount/>
          <Title/>
          <TableS/>
          <Title/>
        </Container>

        <Title/>
        <Container textAlign='right'>
          <Title/>
          <ButtonNext/>
          <Title/>
        </Container>
        <Title/>
      </div>
    );
  }
}
