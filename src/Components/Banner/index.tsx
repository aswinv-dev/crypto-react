import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import CarouselX from "./Carousel";

const useStyles = makeStyles(() => ({
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Container className={classes.bannerContent}>
      <div className={classes.tagline}>
        <Typography
          variant="h2"
          style={{
            fontWeight: "bold",
            marginBottom: 15,
            color: "white",
          }}
        >
          Crypto Finder
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            fontWeight: "bold",
            marginBottom: 15,
            color: "darkgrey",
          }}
        >
          get trending &nbsp;
          <span
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              color: "gold",
            }}
          >
            Crypto Coins
          </span>
          &nbsp; in one place
        </Typography>
        <CarouselX />
      </div>
    </Container>
  );
};

export default Banner;
