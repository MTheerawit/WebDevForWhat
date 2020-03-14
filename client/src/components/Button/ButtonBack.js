import React from "react";
import { Button } from "semantic-ui-react";

export default class ButtonBack extends React.Component{

    cClick = ()=>{
        console.log('cClick  : Back');
    }

    render(){
        return(
            <div>
                <Button inverted color="blue" onClick={this.cClick} >Back</Button>  
            </div>
        )
    }
}