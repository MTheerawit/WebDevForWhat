import React from 'react';
import './index.css';

import Title from 'antd/lib/skeleton/Title';

import { Container } from 'semantic-ui-react';
import { Button } from "semantic-ui-react";

import Header from '../Badge/Header';
import TableR from '../Table/TableR';
import ModelPurchase from '../Badge/ModelPurchase';
import TableS from '../Table/TableS';

import TableM from '../Table/TableM';

export default class App extends React.Component{

  ClickBack = ()=>{
    console.log('cClick  : Back');
  }
  ClickNext = ()=>{
    console.log('cClick  : Next');
  }

  render(){
    return (
      <div className="web-background">
        <Container textAlign='center'>
          <Header/>
        </Container>

        <Title/>
        <Container textAlign='left'>
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
          <TableS/>
          <Title/>
        </Container>

        <Title/>
        <Container textAlign='right'>
          <Title/>
          <Button inverted color="teal" onClick={this.ClickNext} >Next</Button> 
          <Title/>
        </Container>
        <Title/>

        <Title/>
        <Container textAlign='center'>
          <ModelPurchase/>
        </Container>

        <Title/>
        <Container textAlign='left'>
          <Title/>
          <TableM/>
          <Title/>
        </Container>

        <Title/>
        <Container textAlign='right'>
          <Title/>
          <Button inverted color="blue" onClick={this.ClickBack} >Back</Button>  
          <Title/>
        </Container>
        <Title/>

      </div>
    );
  }
}
