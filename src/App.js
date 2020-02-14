import React from "react";
import "./App.css";
import Main from "./views/Main.js";
import { ContextProvider } from "./store/MainContext";

function App() {
  return (
    <ContextProvider>
      <Main></Main>
    </ContextProvider>
  );
}

export default App;
