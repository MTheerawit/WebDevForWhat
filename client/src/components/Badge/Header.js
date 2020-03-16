import React from 'react';
import './Badge.css';
import { Badge } from 'react-bootstrap';

export default class Header extends React.Component{
  render(){
    return(
      <div className="web-header">
        <h1 className ="fontHeader">
          <Badge variant="success">Advice</Badge>
          <Badge variant="danger">Trading</Badge>
        </h1>
      </div>
    );
  }
}