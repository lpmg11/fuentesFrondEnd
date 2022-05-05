import React from 'react';
import { Header, Fuente } from '../Library/comons';
import Cards from '../components/Cards';
import axios from 'axios';

class Index extends React.Component {
  state = {
    elements: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/fuentes')
      .then(res => {
        this.setState({
          elements: res.data
        })
      })
  }
  render() {
    return (
      <div className="App">
        <Header tittle="Control de Fuentes"/>
        <Cards elements={this.state.elements}/>
      </div>
    );
  }
}

export default Index;