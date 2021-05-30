import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
   typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      color: "#fff",
      fontSize: 76,
      fontWeight: 900,
      lineHeight: "92px",
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 54,
      fontWeight: 700,
      lineHeight: "64px",
      color: "#fff",
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 20,
      fontWeight: 800,
      lineHeight: "22px",
      letterSpacing: "0.02em",
      color: "#fff",
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 17,
      fontWeight: 600,
      lineHeight: "22px",
      letterSpacing: "0.0038em",
      color: "#fff",
    },
    h5: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 16,
      fontWeight: 700,
      lineHeight: "20px",
      letterSpacing: "0.02em",
      color: "#fff",
    },
    h6: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 13,
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "-0.00615385em",
      color: "#fff",
    },
    body1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 16,
      lineHeight: "20px",
      letterSpacing: "0.02em",
      color: "#fff"
    },
    body2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 17,
      lineHeight: "28px",
      letterSpacing: "0.02em",
      color: "#C0C0C0"
    },
    caption: {
      fontFamily: "Montserrat, sans-serif",
      color: "#fff",
      fontSize: 11,
      lineHeight: "18px",
      letterSpacing: "-0.00615385em",
    }
  },
  palette: {
    primary: {
      main: "#4A00E0",
    },
    secondary: {
      main: "#8E2DE2",
    },
    background: {
      default: "#181B48",
    },
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      fontSize: 20,
      lineHeight: "20px",
      color: theme.palette.common.white,
      padding: "30px 80px",
      background: "linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)",
      borderRadius: 50,
      minWidth: "none",
      maxWitdh: "none",
      textTransform: "none"
    },
  },
  MuiMenuItem: {
    root: {
      color: theme.palette.common.black
    }
  }
};

export default theme;