import React from 'react';
import './index.css';
import { Container } from 'semantic-ui-react';
import TableC from '../Table/TableC';
import Title from 'antd/lib/skeleton/Title';

export default class App extends React.Component{
  render(){
    return (
      <div className="web-background" >
        <Title/>{/*ใส่เว้นวรรคเฉยๆ*/}
        <Container>
          <TableC/>
        </Container>
      </div>
    );
  }
}
