import React from 'react';
import './Badge.css';
import { Badge } from 'react-bootstrap';

export default class RecommendToday extends React.Component{
  render(){
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h1 className = 'fontRecommend'><Badge variant="info">Recommend</Badge><Badge variant="warning">Today</Badge></h1>                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}