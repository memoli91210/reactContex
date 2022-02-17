import React, { useContext } from "react";
import { MonContext } from "../MonContext";

export default function About() {
  let { nom, prenom, setprenom } = useContext(MonContext);

  return (
    <div>
      <h1>About</h1>
      <h2>
        {nom}
        {prenom}
      </h2>
      <input
        type="text"
        placeholder="prenom"
        onChange={(event) => setprenom(event.target.value)}
      />
    </div>
  );
}
