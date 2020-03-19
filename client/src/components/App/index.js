import React from 'react';
import './index.css';

import { Container } from 'semantic-ui-react';
import Title from 'antd/lib/skeleton/Title';

import Header from '../Badge/Header';
import RecommendToday from '../Badge/RecommendToday';
import TableR from '../Table/TableR';
import ModelPurchase from '../Badge/ModelPurchase';
import SelectDate from '../Badge/SelectDate';
import DropdownDate from '../Dropdown/DropdownDate';
import SelectSymbol from '../Badge/SelectSymbol';
import SelectAndSearch from '../SelectAndSearch/SelectAndSearch';
import EnterAmount from '../Badge/EnterAmount';
import TableS from '../Table/TableS';
import ButtonNext from '../Button/ButtonNext';

import TableM from '../Table/TableM';
import ModelHistory from '../Badge/ModelHistory';
import TableHistory from '../../tmp/TableHistory';
import ModelResult from '../Badge/ModelResult';
import TableResult from '../../tmp/TableResult';
import ButtonBack from '../Button/ButtonBack';

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
          <EnterAmount/>
          <Title/>
          <TableS/>
          <Title/>
        </Container>

        {/* <Title/>
        <Container textAlign='right'>
          <Title/>
          <ButtonNext/>
          <Title/>
        </Container>
        <Title/> */}

        <Title/>
        <Container textAlign='center'>
          <ModelPurchase/>
        </Container>

        {/* <Title/>
        <Container textAlign='left'>
          <Title/>
          <ModelHistory/>
          <Title/>
          <TableHistory/>
          <Title/>
          <ModelResult/>
          <Title/>
          <TableResult/>
          <Title/>
        </Container> */}

        <Title/>
        <Container textAlign='left'>
          <Title/>
          <TableM/>
          <Title/>
        </Container>

        {/* <Title/>
        <Container textAlign='right'>
          <Title/>
          <ButtonBack/>
          <Title/>
        </Container>
        <Title/> */}

      </div>
    );
  }
}
