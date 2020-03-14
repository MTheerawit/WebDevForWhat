import React from "react";
import { Table, Input } from "semantic-ui-react";

const tmp =({symbol:'ABC',close:10.12,amount:0})

export default class TableS extends React.Component{

    BoxInputNumber = (number)=>{
        console.log('inputnum : ', number);
    }
    
    render(){
        return(
            <div>
                <Table>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Symbol</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Enter your amount.</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell >{tmp.symbol}</Table.Cell>
                        <Table.Cell>{tmp.close}</Table.Cell>
                        <Table.Cell>
                        <Input
                            color= "teal"
                            icon= "cart"
                            placeholder="0"
                            defaultValue="0"
                            onChange={(event)=>{this.BoxInputNumber(event.target.value)}}
                        />
                        </Table.Cell>angle double left
                    </Table.Row>
                    </Table.Body>

                    <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell>Total = {tmp.amount}</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>ว่าจะใส่ Button ตรงนี้</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>ยังไม่คิดต่อ อยู่ในช่วงหาโค๊ด555+</Table.Cell>
                    </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        )
    }
}

