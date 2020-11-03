import React from "react";

const Client = ({ client, onDelete }) => (
  <li key={client.id}>
    {client.name} <button onClick={() => onDelete(client.id)}>X</button>
  </li>
);

export default Client;
