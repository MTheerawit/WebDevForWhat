import React from 'react';
// import './Boxinput.css';

export default class BoxinputSearch extends React.Component{

    BoxInputSearch = (keyword)=>{
        console.log('search : ',keyword);
    }

    render(){
        return(
            <div>
                <input className="boxinput" placeholder="Search..."  onChange={(event)=>{this.BoxInputSearch(event.target.value)}}/>  
            </div>
        )
    }
}