import React, { useState, useEffect } from "react";
import api from "../services/api";


function Main() {
  const [character, setCharacter] = useState([]);
  const [filtroPersonagem, setFiltroPersonagem] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const dados = async () => {
      const res = await api.get("characters");
      const dados = await res.data;
      setCharacter(dados);
    };
    dados();
  }, []);

  useEffect(() => {
    setFiltroPersonagem(
      character.filter((repo) => {
        return repo.name.toLowerCase().includes(busca.toLowerCase());
      })
    );
  }, [busca, character]);

  console.log(character);
  return (
    <>
      <input
        onChange={(e) => {
          setBusca(e.target.value);
        }}
        placeholder="Digite o nome do personagem"
      />
      {filtroPersonagem.map((personagem) => (
        <div key={personagem.id}>
          <p>{personagem.name}</p>
          <img src={personagem.image} alt={personagem.name} width={250}/>
        </div>
      ))}
    </>
  );
}

export default Main;
