import React from 'react';
import './Badge.css';
import { Badge } from 'react-bootstrap';

export default class SelectDate extends React.Component{
  render(){
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h1 className = 'fontAny' ><Badge variant="secondary">Select</Badge><Badge variant="info">Date</Badge></h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}