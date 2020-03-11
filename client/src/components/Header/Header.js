import React from 'react';
import './Header.css';
import { Badge } from 'react-bootstrap';

export default class Header extends React.Component{
  render(){
    return(
      <table className="web-header">
        <tbody>
          <tr>
            <td>
              <h1 className ="fontHeader"><Badge variant="success">Advice</Badge><Badge variant="danger">Trading</Badge></h1>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}