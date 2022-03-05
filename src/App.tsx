import React from "react";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Coin from "./Pages/Coin";
import Home from "./Pages/Home";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "black",
    color: "gold",
    minHeight: "100vh",
    fontWeight: 700,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
