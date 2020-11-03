import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    newClient: ""
  };

  handleChange = event => {
    this.setState({ newClient: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const clients = this.props.clients;
    this.props.onClientAdd({
      id: clients[clients.length - 1].id + 1,
      name: this.state.newClient
    });

    this.setState({ newClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.newClient}
          onChange={this.handleChange}
          type="text"
          placeholder="Client name"
        />
        <button>Add a client</button>
      </form>
    );
  }
}

export default ClientForm;
