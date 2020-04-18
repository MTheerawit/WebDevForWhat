import React from 'react';

import {  Grid, Dropdown, Form} from 'semantic-ui-react'
import _ from "lodash";

import 'antd/dist/antd.css';
import { Select, InputNumber} from 'antd';

import Title from 'antd/lib/skeleton/Title';
import SelectDate from '../Badge/SelectDate';
import SelectSymbol_EnterAmount from '../Badge/SelectSymbol_EnterAmount';

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

const dataSymbol = [];
for (let i = 10; i < 36; i++) {
    dataSymbol.push(<Option key={i}>{'A' + i}</Option>);
}

export default class TableS extends React.Component{

    state = {
        SYear: '',
        SMonth: '',
        SDay: '',
        EYear: '',
        EMonth: '',
        EDay: '',
        // dataSymbol: [],
        value: undefined
    }

    handleChangeDate = (e, { name, value }) => {
        this.setState({ [name]: value })
        console.log({[name]: value})
    }

    handleChangeSelected=(value)=>{
        console.log(`selected ${value}`);
    }

    handleSearch = (value) => {
        this.setState({ data: [] });
        console.log(`Search ${value}`);
    };
    
    handleChange = (value) => {
        this.setState({ value });
        console.log(`selected ${value}`);
    };

    InputNumber = (value)=>{
        console.log('inputnum : ', value);
    }

    render(){

        const { value } = this.state
        // const options = this.state.data.map(d => (
        //     <Option key={d.value}>{d.text}</Option>
        // ));

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
                <SelectSymbol_EnterAmount/>
                <Title/>

                <Title/>
                <Select
                    showSearch
                    value={this.state.value}
                    style={{ width: 300 }}
                    placeholder="Select symbol"
                    optionFilterProp="dataSymbol"
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    onSearch={this.handleSearch}
                    onChange={this.handleChange}
                    notFoundContent={null}
                >
                    {dataSymbol}
                </Select>
                <InputNumber min={0} max={1000000} defaultValue={this.state.value} onChange={this.InputNumber} />
                <Title/>

                <Title/>
            </div>
        )
    }
}

