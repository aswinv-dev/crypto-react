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
    color: "gold",
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
      <Container>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography onClick={() => history("/")} className={classes.title}>
              Crypto Finder
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
                color: "gold",
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
