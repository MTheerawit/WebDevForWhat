import React from 'react'
import {  Grid, Dropdown, Form, Segment } from 'semantic-ui-react'
import _ from "lodash";

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


export default class DropdownDate extends React.Component {

  state = {
    SYear: '',
    SMonth: '',
    SDay: '',
    EYear: '',
    EMonth: '',
    EDay: '',
}

// handleChange = (e, { value }) => this.setState({ value })
handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {

    const { value } = this.state

    return (
      <Grid columns='equal'>
        <Grid.Column>
          <Form>
            <Form.Field>
              <Dropdown
                selection
                name = 'SYear'
                options={getOptionsYear(2)}
                onChange={this.handleChange}
                placeholder='SYear'
                value={value}
              />
            </Form.Field>
            <Form.Field>
              <Dropdown
                selection
                name = 'SMonth'
                options={getOptions(12)}
                onChange={this.handleChange}
                placeholder='SMonth'
                value={value}
              />
            </Form.Field>
            <Form.Field>
              <Dropdown
                selection
                name = 'SDay'
                options={getOptions(31)}
                onChange={this.handleChange}
                placeholder='SDay'
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
                onChange={this.handleChange}
                placeholder='EYear'
                value={value}
              />
            </Form.Field>
            <Form.Field>
              <Dropdown
                selection
                name = 'EMonth'
                options={getOptions(12)}
                onChange={this.handleChange}
                placeholder='EMonth'
                value={value}
              />
            </Form.Field>
            <Form.Field>
              <Dropdown
                selection
                name = 'EDay'
                options={getOptions(31)}
                onChange={this.handleChange}
                placeholder='EDay'
                value={value}
              />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <Segment secondary>
            Dropdown values:
            <pre>{JSON.stringify(this.state, null, 6)}</pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

