import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Manu Macron" },
      { id: 2, nom: "Nico Sarkozi" },
      { id: 3, nom: "Francois Hollande" }
    ],
    nouveauClient: ""
  };

  handleDelete = id => {
    const clients = this.state.clients.slice(); // Slice copie le tableau, on le modifiera et le remplacera
    const index = clients.findIndex(function(client) {
      // Find index cherche dans un tab un index
      return client.id === id;
    });

    clients.splice(index, 1); // Supprime un élément du tableau

    this.setState({ clients: clients }); // Remplace l'ancien tab par le nouveau
  };

  handleSubmit = event => {
    event.preventDefault(); // Page ne se recharge pas

    const id = new Date().getTime(); // Time stamp pour id unique
    const nom = this.state.nouveauClient;

    const client = { id: id, nom: nom };

    const clients = this.state.clients.slice();
    clients.push(client);

    this.setState({ clients: clients, nouveauClient: "" });
  };

  handleChange = event => {
    this.setState({ nouveauClient: event.currentTarget.value });
  };

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <li>
              {client.nom}{" "}
              <button onClick={() => this.handleDelete(client.id)}>X</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.nouveauClient}
            onChange={this.handleChange}
            type="text"
            placeholder="Ajouter un client"
          />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
