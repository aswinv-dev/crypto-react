import React from "react";
import {
  AppBar,
  Toolbar,
  MenuItem,
  Typography,
  Select,
  Container,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../../Context/context";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "black",
    fontWeight: 900,
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();

  const history = useNavigate();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ backgroundColor: "gold" }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography onClick={() => history("/")} className={classes.title}>
              <h2>Crypto Finder</h2>
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
                color: "gold",
                backgroundColor: "black",
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
};

export default Header;
