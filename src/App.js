import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Controls from './Controls.jsx';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  ${props =>
    props.color1 && props.color2 && css `
      background-image: linear-gradient(${props.degree}deg, ${props.color1} , ${props.color2});
    `
  }
`;

class App extends Component {
  state = {
    degree: 90,
    color1: '#CCFFCC',
    color2: '#FFCCFF',
  }

  changeColor = (color1, color2) => {
    const reg = /#[0-9a-fA-F]{5}/;
    let degree = this.state.degree + 45;
    if (degree >= 360) degree = 0;
    if (reg.test(color1) && reg.test(color2)) {
      this.setState({ degree, color1, color2 });
    } else {
      this.setState({ degree });
    }
  }

  render() {
    const { degree, color1, color2 } = this.state;
    return (
      <Wrapper degree={degree} color1={color1} color2={color2}>
        <Controls handleChange={this.changeColor} />
      </Wrapper>
    );
  }
}

export default App;
