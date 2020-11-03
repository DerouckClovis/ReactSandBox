import React from "react";
import Client from "./Client";
import ClientForm from "./ClientForm";
import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, name: "Clovis" },
      { id: 2, name: "Thomas" },
      { id: 3, name: "Cha" }
    ]
  };

  handleDelete = id => {
    const clients = [...this.state.clients].filter(client => client.id !== id);
    this.setState({ clients });
  };

  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients });
  };

  render() {
    const title = "My Client List";

    return (
      <div className="App">
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <Client client={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm clients={this.state.clients} onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
