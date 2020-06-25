import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import GlobalStyles from "./global/styles";

function App() {
  return (
    <BrowserRouter>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <GlobalStyles />
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
