import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="app">
      <header>
        <span className="title">Pokemon</span> <input placeholder="🔎 Search" />
      </header>
      <main className="colorful-border">
        <List>
          {/* <ListItem link="#">
              <ListItemIcon src="">
                <ListItemText primary="Pokemon1" secondary="weight: 20kg">
                  </ListItemText>
                </ListItem>  */}
        </List>
      </main>
      <footer>Tabs</footer>
    </div>
  );
}

export default App;
