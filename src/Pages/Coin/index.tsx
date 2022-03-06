import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../config/api";
import { CryptoState } from "../../Context/context";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, LinearProgress } from "@material-ui/core";
import CoinInfo from "../../Components/CoinInfo";
import parse from "html-react-parser";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    color: "white",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    width: "100%",
    padding: 25,
    paddingBottom: 25,
    padddingTop: 0,
    textAlign: "justify",
  },
  extra: {
    color: "gold",
  },
  marketData: {
    alignSelf: "start",
    width: "100%",
    padding: 25,
    padddingTop: 10,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      alignItem: "start",
    },
  },
  sidebar: {
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid gold",
  },
}));

const numberWithCommas = (x: any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<any>();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  const classes = useStyles();

  useEffect(() => {
    fetchCoin();
  }, [currency]);

  console.log(coin);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image?.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography className={classes.heading} variant="h3">
          {coin?.name}
        </Typography>
        <Typography className={classes.description} variant="subtitle1">
          {coin?.description?.en?.split(". ")[0]}
        </Typography>
        <Typography className={classes.extra} variant="h5">
          Rank: #{coin?.market_cap_rank}
        </Typography>
        <Typography className={classes.extra} variant="h5">
          Current Price: {symbol}{" "}
          {numberWithCommas(
            coin?.market_data.current_price[currency.toLowerCase()]
          )}
        </Typography>
        <Typography className={classes.extra} variant="h5">
          Market Cap: {symbol}{" "}
          {numberWithCommas(
            coin?.market_data.market_cap[currency.toLowerCase()]
              .toString()
              .slice(0, -6)
          )}
          M
        </Typography>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default Coin;
