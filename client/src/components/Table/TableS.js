import React from 'react';
import { Table, Input } from "semantic-ui-react";
import DropdownDate from '../Dropdown/DropdownDate';
import { Badge } from 'react-bootstrap';
import Title from 'antd/lib/skeleton/Title';
import './Table.css';

const tmp =({symbol:'ABC',close:10.12,amount:0})

export default class TableS extends React.Component{

    BoxInputNumber = (number)=>{
        console.log('inputnum : ', number);
    }
    
    render(){
        return(
            <div>
                <div>
                    <h1 className = 'fontSelect' ><Badge variant="primary">Select</Badge> <Badge variant="info">date</Badge></h1>
                </div>
                <Title/>
                <DropdownDate/>
                <Title/>
                <div>
                    <h1 className = 'fontSelect' ><Badge variant="primary">Select</Badge><Badge variant="info">symbol</Badge> </h1>
                </div>
                <Title/>

                <Title/>
                <div>
                    <h1 className = 'fontSelect' ><Badge variant="warning">Enter</Badge><Badge variant="danger">amount</Badge> </h1>
                </div>
                <Title/>

                <Table>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Symbol</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Enter your amount</Table.HeaderCell>
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
                        *ยังไม่ฟิคให้ใส่ได้เฉพาะตัวเลข
                        </Table.Cell>
                    </Table.Row>
                    </Table.Body>

                    <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell>Total = {tmp.amount}  *ตรงนี้ค่าจะเปลี่ยนตามที่กรอก กุยังทำไม่ได้</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>ว่าจะใส่ Button ตรงนี้

                        </Table.HeaderCell>
                    </Table.Row>
                    </Table.Footer>
                </Table>

                <Title/>
            </div>
        )
    }
}

