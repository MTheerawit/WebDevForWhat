import React from 'react';
import './index.css';
import { Container } from 'semantic-ui-react';
import TableR from '../Table/TableR';
import TableS from '../Table/TableS';
import Title from 'antd/lib/skeleton/Title';
import ButtonNext from '../Button/ButtonNext';
import { Badge } from 'react-bootstrap';
import DropdownDate from '../Dropdown/DropdownDate';
import SelectAndSearch from '../SelectAndSearch/SelectAndSearch'
export default class App extends React.Component{
  render(){
    return (
      <div className="web-background" >
        <Title/>
        <Container>
          <div>
            <h1 className = 'fontRecommend' >Recommend <Badge variant="success">Today</Badge></h1>
          </div>
        </Container>
        <Title/>
        <Container>
          <TableR/>
        </Container>
        <Title/>
        <Container>
          <div>
            <h1 className = 'fontSelect' ><Badge variant="primary">Select</Badge> <Badge variant="info">date</Badge></h1>
          </div>
        </Container>
        <Title/>
        <Container>
          <DropdownDate/>
        </Container>
        <Title/>
        <Container>
          <div>
            <h1 className = 'fontSelect' ><Badge variant="primary">Select</Badge><Badge variant="info">symbol</Badge> </h1>
          </div>
        </Container>
        <Container>
          <div>
            <SelectAndSearch/>
          </div>
        </Container>
        <Container>
          <div>
            <h1 className = 'fontSelect' ><Badge variant="warning">Enter</Badge><Badge variant="danger">amount</Badge> </h1>
          </div>
        </Container>
        <Title/>
        <Container>
          <TableS/>
        </Container>
        <Title/>
        <Container textAlign='right'>
          <ButtonNext/>
        </Container>
        <Title/>
      </div>
    );
  }
}
