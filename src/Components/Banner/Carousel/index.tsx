import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { TrendingCoins } from "../../../config/api";
import { CryptoState } from "../../../Context/context";
import axios from "axios";
import AliceCarouel from "react-alice-carousel";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItem: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    courser: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
}));

const numberWithCommas = (x: any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CarouselX = () => {
  const [trending, setTrending] = useState([]);

  const classes = useStyles();

  const { currency, symbol } = CryptoState();

  const responsive = {
    0: {
      items: 2,
    },
    500: {
      items: 4,
    },
  };

  const items = trending.map((coin: any) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link className={classes.carouselItem} to={`/coin/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          <span
            style={{
              color: profit ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            &nbsp;
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return (
    <div className={classes.carousel}>
      <AliceCarouel
        mouseTracking
        infinite
        autoPlayInterval={2000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default CarouselX;
