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

// const filterOption = (input, option) => {
//     if (select.includes(option.children.toLowerCase())) {
//     return false;
//     }
//     return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
// };

const select = [];
const options = ["ADVANC","AOT","BANPU","BBL","BDMS","BEM","BGRIM","BH","BJC","BPP","BTS","CBG","CPALL","CPF","CPN","DELTA","DTAC","EA","EGCO","GLOBAL","GPSC","GULF","HMPRO","INTUCH","IRPC","IVL","KBANK","KTB","KTC","LH","MINT","MTC","OSP","PTT","PTTEP","PTTGC","RATCH","SAWAD","SCB","SCC","TCAP","TISCO","TMB","TOA","TOP","TU","VGI","WHA"];

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
        console.log(`selected ${value}`)
        console.log({[name]: value})
    }

    InputNumberSymbol = (value)=>{
        console.log('inputnum : ', value);
    }

    onChange=(value)=> {
        console.log(`selected ${value}`);
    }
      
    onBlur=()=> {
        console.log("blur");
    }
      
    onFocus=()=> {
        console.log("focus");
    }
      
    onSearch=(value)=> {
        console.log(`search ${value}`);
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
                <SelectSymbol_EnterAmount/>
                <Title/>

                <Title/>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a symbol"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
                    filterOption={true}
                    >
                    {options.map(
                        (val, i) =>
                        !select.includes(val) && (
                            <Option value={val}>{val.toUpperCase()}</Option>
                        )
                    )}
                </Select>
                <InputNumber min={0} max={1000000} defaultValue={this.state.value} onChange={this.InputNumberSymbol} />
                <Title/>

                <Title/>
            </div>
        )
    }
}

