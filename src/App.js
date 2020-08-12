import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";

function App() {
  return (
    <div className="app">
      <header>
        <span className="title">Pokemon</span> <input placeholder="🔎 Search" />
      </header>
      <main className="colorful-border">
        <List>
          <ListItem href="#">
            <ListItemIcon
              imgSrc="https://img.pokemondb.net/artwork/large/bulbasaur.jpg
"
            />
            <ListItemText title="PokemonName" subtitle="#123" />
            {/* 
            <ListItemIcon imgSrc="#" /> */}
          </ListItem>
        </List>
      </main>
      <footer>Tabs</footer>
    </div>
  );
}

export default App;
