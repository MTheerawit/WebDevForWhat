import React from 'react';
import './Badge.css';
import { Badge } from 'react-bootstrap';

export default class ModelPurchase extends React.Component{
  render(){
    return(
      <div className="web-header">
        <h1 className ="fontHeader">
          <Badge variant="primary">Model</Badge>
          <Badge variant="warning">Purchase</Badge>
        </h1>
      </div>
    );
  }
}