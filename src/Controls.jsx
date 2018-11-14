import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: block;
  margin: 5px;
  padding: 3px;
`;

const Button = styled.button`
  box-sizing: border-box;
  margin: 5px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: palevioletred;
  font-size: 16px;
`;

export default class Controls extends Component {
  state = {
    color1: '',
    color2: '',
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { color1, color2 } = this.state;
    return(
      <Form>
        <h2>Epilepcy emulator</h2>
        <Input type="text" name="color1" value={color1} onChange={this.onChange} placeholder="Color one"></Input>
        <Input type="text" name="color2" value={color2} onChange={this.onChange} placeholder="Color two"></Input>
        <Button onClick={() => this.props.handleChange(color1, color2)}>Change</Button>
      </Form>
    )
  }
}
