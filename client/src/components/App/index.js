import React from 'react';
import './index.css';
import TableS from '../Table/TableS';
import { Container } from 'semantic-ui-react';
import TableC from '../Table/TableC';

export default class App extends React.Component{
  render(){
    return (
      <div className="web-background" >
        <Container>
          <TableC/>
          <TableS/>
        </Container>
      </div>
    );
  }
}
