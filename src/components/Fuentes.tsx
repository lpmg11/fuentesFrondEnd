import axios from "axios";
import React from "react";

class Fuente extends React.Component<any, any> {
  state = {
    name: this.props.name,
    description: "",
    _id: this.props._id,
    repository: "",
    mostrarItems: true,
  };
  cargarInformacionDeFuente() {
    axios.get("http://localhost:3001/fuentes/" + this.state._id).then((res) => {
      this.setState({
        name: res.data.name,
        description: res.data.description,
        repository: res.data.repository,
      });
    });
  }
  mostrarInformacionDeFuente() {
    if(this.state.repository === ""){
      this.cargarInformacionDeFuente();
    }
    this.setState({ mostrarItems: true });
  }
  ocultarInformacionDeFuente() {
    this.setState({ mostrarItems: false });
  }
  render() {
    return (
      <div
        className="Fuente"
        onMouseOver={() => {
          this.mostrarInformacionDeFuente();
        }}
        onMouseLeave={() => {
          this.ocultarInformacionDeFuente();
        }}
      >
        <h1>{this.state.name}</h1>
        {this.state.description && this.state.mostrarItems ? (
          <p>{this.state.description}</p>
        ) : null}
        {this.state.repository && this.state.mostrarItems ? (
          <p>{this.state.repository}</p>
        ) : null}
      </div>
    );
  }
}
export default Fuente;
