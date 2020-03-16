import React from 'react';
import './index.css';
import { Container } from 'semantic-ui-react';
import TableC from '../Table/TableC';
import TableS from '../Table/TableS';
import Title from 'antd/lib/skeleton/Title';

export default class App extends React.Component{
  render(){
    return (
      <div className="web-background" >
        <Title/>
        <Container>
          <TableC/>
        </Container>
        <Title/>
        <Container>
          <TableS/>
        </Container>
      </div>
    );
  }
}
