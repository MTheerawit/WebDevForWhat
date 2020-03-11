import React from 'react';
// import './Boxinput.css';

export default class BoxinputNum extends React.Component{

    BoxInputNumber = (number)=>{
        console.log('inputnum : ', number);
    }
    
    render(){
        return(
            <input className="boxinput" placeholder="0"  onChange={(event)=>{this.BoxInputNumber(event.target.value)}}/>    
        )
    }
}