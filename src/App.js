import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";

const pokemons = ["Bulbasaur", "Pikachu", "Rattata", "Arbok"];
function App() {
  return (
    <div className="app">
      <header>
        <span className="title">Pokemon</span> <input placeholder="🔎 Search" />
      </header>
      <main className="colorful-border">
        <List>
          {pokemons.map((pokemon) => (
            <ListItem key={index} href={pokemon}>
              <ListItemIcon imgSrc={pokeUrl} />
              <ListItemText primary={pokemon} secondary={index + 1} />
            </ListItem>
          ))}
        </List>
      </main>
      <footer>Tabs</footer>
    </div>
  );
  return <div>Pokedex</div>;
}

export default App;

/* old list
<List>
{pokemons.map((pokemon, index) => {
  const pokeUrl = `https://img.pokemondb.net/artwork/large/${pokemon.toLowerCase()}.jpg`;
  return (
    <ListItem key={index} href={pokemon}>
      {/* Don't use index */
/* <ListItemIcon imgSrc={pokeUrl} />
      <ListItemText primary={pokemon} secondary={index + 1} />
    </ListItem>
  );
})}
</List> */
