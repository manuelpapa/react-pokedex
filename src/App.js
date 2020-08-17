import React, { useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import fetchPokemons from "./api/pokemonApi";

function App() {
  async function setPokemons() {
    const pokemons = await fetchPokemons();
    setPokemonState(pokemons);
  }
  const [pokemonState, setPokemonState] = React.useState();
  useEffect(() => setPokemons().didUpdate);

  return (
    <div className="app">
      <header>
        Pokedex
        {/* <button onClick={handleClick}>catch 'em all</button> */}
      </header>
      <main className="colorful-border">
        <List>
          {pokemonState?.map((pokemon) => (
            <ListItem key={pokemon.id} href={pokemon.link}>
              <ListItemIcon
                src={pokemon.imgSrc}
                alt={`Picture of ${pokemon.name}`}
              ></ListItemIcon>
              <ListItemText
                primary={pokemon.name}
                secondary={`${pokemon.id}`}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
