import React from 'react';

import {  Grid, Dropdown, Form} from 'semantic-ui-react'
import _ from "lodash";

import 'antd/dist/antd.css';
import { Select, InputNumber, Button } from 'antd';

import Title from 'antd/lib/skeleton/Title';
import SelectDate from '../Badge/SelectDate';
import SelectSymbol_EnterAmount from '../Badge/SelectSymbol_EnterAmount';

// const filterOption = (input, option) => {
//     if (select.includes(option.children.toLowerCase())) {
//     return false;
//     }
//     return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
// };

export default class TableS extends React.Component{

    state = {
        SYear: '',
        SMonth: '',
        SDay: '',
        EYear: '',
        EMonth: '',
        EDay: '',
        select: [],
        disabled_S1: true,
        disabled_S2: true,
        disabled_S3: true,
        disabled_S4: true,
        disabled_S5: true,
        Symbol_S1:'',
        Symbol_S2:'',
        Symbol_S3:'',
        Symbol_S4:'',
        Symbol_S5:'',
        Input_S1:'',
        Input_S2:'',
        Input_S3:'',
        Input_S4:'',
        Input_S5:'',
    }

    handleChangeDate = (e, { name, value }) => {
        this.setState({ [name]: value })
        console.log(`selected ${value}`)
        console.log({[name]: value})
    }

    onSearch =(value)=> {
        console.log(`search ${value}`);
    }

    InputNumberSymbol_S1 = (value)=>{
        this.setState({Input_S1:value})
        console.log('input1 : ', value);
        console.log({Input_S1: value})
    }

    onChange_S1 =(value)=> {
        this.setState({Symbol_S1:value})
        console.log(`selected1 ${value}`);
        console.log({Symbol_S1: value})
    }
 
    toggle_S1 = () => {
        this.setState({
            disabled_S1: !this.state.disabled_S1,
            Symbol_S1:'',
            Input_S1:'',
        });
        console.log('toggle_S1!!!');
        console.log(this.state.disabled_S1)
        console.log(this.state.Symbol_S1)
        console.log(this.state.Input_S1)
    };
    // -------------------------------------------------------
    InputNumberSymbol_S2 = (value)=>{
        this.setState({Input_S2:value})
        console.log('input2 : ', value);
        console.log({Input_S2: value})
    }

    onChange_S2 =(value)=> {
        this.setState({Symbol_S2:value})
        console.log(`selected2 ${value}`);
        console.log({Symbol_S2: value})
    }
 
    toggle_S2 = () => {
        this.setState({
            disabled_S2: !this.state.disabled_S2,
            Symbol_S2:'',
            Input_S2:'',
        });
        console.log('toggle_S2!!!');
        console.log(this.state.disabled_S2)
        console.log(this.state.Symbol_S2)
        console.log(this.state.Input_S2)
    };
    // -------------------------------------------------------

    render(){

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
        const { value,select } = this.state
        const options = ["ADVANC","AOT","BANPU","BBL","BDMS","BEM","BGRIM","BH","BJC","BPP","BTS","CBG","CPALL","CPF","CPN","DELTA","DTAC","EA","EGCO","GLOBAL","GPSC","GULF","HMPRO","INTUCH","IRPC","IVL","KBANK","KTB","KTC","LH","MINT","MTC","OSP","PTT","PTTEP","PTTGC","RATCH","SAWAD","SCB","SCC","TCAP","TISCO","TMB","TOA","TOP","TU","VGI","WHA"];

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
                <Button onClick={this.toggle_S1} type="primary">
                    Add a symbol
                </Button>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a symbol"
                    optionFilterProp="children"
                    onChange={this.onChange_S1}
                    onSearch={this.onSearch}
                    filterOption={true}
                    disabled={this.state.disabled_S1}
                    >
                    {options.map(
                        (val, i) =>
                        !select.includes(val) && (
                            <Option value={val}>{val.toUpperCase()}</Option>
                        )
                    )}
                </Select>
                <InputNumber 
                    min={0} 
                    max={1000000} 
                    defaultValue={0} 
                    onChange={this.InputNumberSymbol_S1}
                    disabled={this.state.disabled_S1} 
                />
                <Title/>
                <Button onClick={this.toggle_S2} type="primary">
                    Add a symbol
                </Button>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a symbol"
                    optionFilterProp="children"
                    onChange={this.onChange_S2}
                    onSearch={this.onSearch}
                    filterOption={true}
                    disabled={this.state.disabled_S2}
                    >
                    {options.map(
                        (val, i) =>
                        !select.includes(val) && (
                            <Option value={val}>{val.toUpperCase()}</Option>
                        )
                    )}
                </Select>
                <InputNumber 
                    min={0} 
                    max={1000000} 
                    defaultValue={0} 
                    onChange={this.InputNumberSymbol_S2}
                    disabled={this.state.disabled_S2} 
                />
                <Title/>

                <Title/>
            </div>
        )
    }
}

