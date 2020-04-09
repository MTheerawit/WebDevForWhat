import React from 'react';

import {  Grid, Dropdown, Form } from 'semantic-ui-react'
import _ from "lodash";

import 'antd/dist/antd.css';
import { Select } from 'antd';

import Title from 'antd/lib/skeleton/Title';
import SelectDate from '../Badge/SelectDate';
import SelectSymbol from '../Badge/SelectSymbol';
import EnterAmount from '../Badge/EnterAmount';

const getOptions = (number, prefix = "") =>
  _.times(number, index => ({
    key: index,
    text: `${prefix}${index + 1}`,
    value: index+1
  }));
const getOptionsYear = (number, prefix = "") =>
  _.times(number, index => ({
    key: index,
    text: `${prefix}${index + 2019}`,
    value: index+2019
  }));

const { Option } = Select;

const data = [];
  for (let i = 10; i < 36; i++) {
    data.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

export default class TableS extends React.Component{

    state = {
        SYear: '',
        SMonth: '',
        SDay: '',
        EYear: '',
        EMonth: '',
        EDay: '',
    }

    handleChangeDate = (e, { name, value }) => {
        this.setState({ [name]: value })
        console.log({[name]: value})
    }

    handleChangeSearch=(value)=>{
        console.log(`selected ${value}`);
    }

    render(){

        const { value } = this.state

        return(
            <div>
                <Title/>
                <SelectDate/>
                <Title/>
                
                <Grid columns='equal'>
                    <Grid.Column>
                        <Form>
                        <Form.Field>
                            <Dropdown
                            selection
                            name = 'SYear'
                            options={getOptionsYear(2)}
                            onChange={this.handleChangeDate }
                            placeholder='StartYear'
                            value={value}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Dropdown
                            selection
                            name = 'SMonth'
                            options={getOptions(12)}
                            onChange={this.handleChangeDate }
                            placeholder='StartMonth'
                            value={value}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Dropdown
                            selection
                            name = 'SDay'
                            options={getOptions(31)}
                            onChange={this.handleChangeDate }
                            placeholder='StartDay'
                            value={value}
                            />
                        </Form.Field>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Form>
                        <Form.Field>
                            <Dropdown
                            selection
                            name = 'EYear'
                            options={getOptionsYear(2)}
                            onChange={this.handleChangeDate }
                            placeholder='EndYear'
                            value={value}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Dropdown
                            selection
                            name = 'EMonth'
                            options={getOptions(12)}
                            onChange={this.handleChangeDate }
                            placeholder='EndMonth'
                            value={value}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Dropdown
                            selection
                            name = 'EDay'
                            options={getOptions(31)}
                            onChange={this.handleChangeDate }
                            placeholder='EndDay'
                            value={value}
                            />
                        </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid>

                <Title/>
                <SelectSymbol/>
                <Title/>
                
                <Select 
                mode="tags" 
                style={{ width: '100%' }}
                placeholder="Select or Search" 
                onChange={this.handleChangeSearch} 
                tokenSeparators={[',']}>
                {data}
                </Select>

                <Title/>
                <EnterAmount/>
                <Title/>
                
                <Title/>
            </div>
        )
    }
}

