import React, { useContext } from "react";
import { MonContext } from "../MonContext";

export default function Accueil() {
  const { nom, prenom } = useContext(MonContext);
  return (
    <div>
      <h1>Page d'accueil</h1>
      <h2>
        {nom} {prenom}
      </h2>
    </div>
  );
}
