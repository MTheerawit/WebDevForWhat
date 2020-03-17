import React from 'react';
import './Badge.css';
import { Badge } from 'react-bootstrap';

export default class ModelResult extends React.Component{
  render(){
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h1 className = 'fontAny' ><Badge variant="info">Model</Badge><Badge variant="warning">Result</Badge></h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}