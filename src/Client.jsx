import React, { Component } from "react";

class Client extends Component {
  render() {
    const { client, onDelete } = this.props;

    return (
      <li key={client.id}>
        {client.name} <button onClick={() => onDelete(client.id)}>X</button>
      </li>
    );
  }
}

export default Client;
