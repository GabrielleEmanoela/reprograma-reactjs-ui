import React, { useState, useEffect } from "react";
import api from "../services/api";
import {
  Title,
  TextInput,
  Container,
  Div,
  DivTitle,
  NameCharacter,
  DivImg,
  divInput,
} from "./styles";

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

  return (
    <Container>
      <DivTitle>
        <Title>Character Harry Potter</Title>
      </DivTitle>
      <Div>
        <divInput>
          <TextInput
            onChange={(e) => {
              setBusca(e.target.value);
            }}
            placeholder="Search for the character"
          />
        </divInput>
        {filtroPersonagem.map((personagem) => (
          <DivImg key={personagem.id}>
            <NameCharacter>{personagem.name}</NameCharacter>
            <img src={personagem.image} alt={personagem.name} width={250} />
          </DivImg>
        ))}
      </Div>
    </Container>
  );
}

export default Main;
