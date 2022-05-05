import axios from "axios";
import React from "react";
import { MemoryRouterProps } from "react-router-dom";

class Fuente extends React.Component<any,any> {
  state = {
    name: this.props.name,
    description: '',
    _id: this.props._id,
    repository: "",
    mostrarItems: false
  };
  mostrarInformacionDeFuente(){
    if (this.state.mostrarItems) {
      return this.setState({mostrarItems: false});
    }
    if(this.state.description === ''){
      axios.get('http://localhost:3001/fuentes/'+this.state._id)
      .then(res => {
        this.setState({ name: res.data.name, description: res.data.description, repository: res.data.repository, mostrarItems: true});
      })
      return
    }
    return this.setState({mostrarItems: true});
  }
  render() {
    return (
      <div className="Fuente" onClick={()=>{this.mostrarInformacionDeFuente()}}>
      <h1>{this.state.name}</h1>
      <p style={{display: this.state.mostrarItems ? 'block' : 'none' }} >{this.state.description}</p>
      <p style={{display: this.state.mostrarItems ? 'block' : 'none' }} >{this.state.repository}</p>
    </div>
    );
  }
}




export default Fuente;
