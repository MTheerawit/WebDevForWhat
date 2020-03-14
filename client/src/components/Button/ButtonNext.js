import React from "react";
import { Button } from "semantic-ui-react";

export default class ButtonNext extends React.Component{

    cClick = ()=>{
        console.log('cClick  : Next');
    }

    render(){
        return(
            <div>
                <Button inverted color="teal" onClick={this.cClick} >Next</Button> 
            </div>
        )
    }
}