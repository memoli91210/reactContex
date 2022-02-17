import React, { useContext } from "react";
import { MonContext } from "../MonContext";

export default function Contact() {
  const { nom, setnom, prenom } = useContext(MonContext);
  return (
    <div>
      <h1>Page de Contact</h1>
      <h2>
        {nom}
        {prenom}
      </h2>
      <input
        type="text"
        placeholder="nom"
        onChange={(event) => setnom(event.target.value)}
      />
    </div>
  );
}
