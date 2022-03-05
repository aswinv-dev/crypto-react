import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Container } from "@material-ui/core";
import Banner from "../../Components/Banner";
import CoinGrid from "../../Components/CoinGrid";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container>
      <Banner />
      <CoinGrid />
    </Container>
  );
};

export default Home;
