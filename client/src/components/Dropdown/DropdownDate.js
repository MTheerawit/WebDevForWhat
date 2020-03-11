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
    Year: '',
    Month: '',
    Day: '',
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
                name = 'Year'
                options={getOptionsYear(2)}
                onChange={this.handleChange}
                placeholder='Year'
                value={value}
              />
            </Form.Field>
            <Form.Field>
              <Dropdown
                selection
                name = 'Month'
                options={getOptions(12)}
                onChange={this.handleChange}
                placeholder='Month'
                value={value}
              />
            </Form.Field>
            <Form.Field>
              <Dropdown
                selection
                name = 'Day'
                options={getOptions(31)}
                onChange={this.handleChange}
                placeholder='Day'
                value={value}
              />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <Segment secondary>
            Dropdown values:
            <pre>{JSON.stringify(this.state, null, 3)}</pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

