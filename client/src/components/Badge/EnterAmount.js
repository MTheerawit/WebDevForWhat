import React from 'react';
import './Badge.css';
import { Badge } from 'react-bootstrap';

export default class EnterAmount extends React.Component{
  render(){
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h1 className = 'fontAny' ><Badge variant="warning">Enter</Badge><Badge variant="danger">Amount</Badge> </h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}