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
      <div>
        <Grid columns='equal'>
          <Grid.Column>
            <Form>
              <Form.Field>
                <Dropdown
                  selection
                  name = 'SYear'
                  options={getOptionsYear(2)}
                  onChange={this.handleChange}
                  placeholder='StartYear'
                  value={value}
                />
              </Form.Field>
              <Form.Field>
                <Dropdown
                  selection
                  name = 'SMonth'
                  options={getOptions(12)}
                  onChange={this.handleChange}
                  placeholder='StartMonth'
                  value={value}
                />
              </Form.Field>
              <Form.Field>
                <Dropdown
                  selection
                  name = 'SDay'
                  options={getOptions(31)}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  placeholder='EndYear'
                  value={value}
                />
              </Form.Field>
              <Form.Field>
                <Dropdown
                  selection
                  name = 'EMonth'
                  options={getOptions(12)}
                  onChange={this.handleChange}
                  placeholder='EndMonth'
                  value={value}
                />
              </Form.Field>
              <Form.Field>
                <Dropdown
                  selection
                  name = 'EDay'
                  options={getOptions(31)}
                  onChange={this.handleChange}
                  placeholder='EndDay'
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
      </div>
    )
  }
}

