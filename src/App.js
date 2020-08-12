import React from "react";
import "./App.css";
import List from "./components/list";

function App() {
  return (
    <div className="app">
      <header>
        <span className="title">Pokemon</span> <input placeholder="🔎 Search" />
      </header>
      <main>
        <nav>
          <List>
            Tescht
            {/* <ListItem>
              <ListItemIcon src="">
                <ListItemText primary="">
                  </ListItemText>
                </ListItem> */}
          </List>
        </nav>
      </main>
      <footer>Tabs</footer>
    </div>
  );
}

export default App;
