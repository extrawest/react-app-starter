import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
   typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 76,
      fontWeight: 900,
      lineHeight: "92px",
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 54,
      fontWeight: 700,
      lineHeight: "64px",
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 20,
      fontWeight: 800,
      lineHeight: "22px",
      letterSpacing: "0.02em",
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 17,
      fontWeight: 600,
      lineHeight: "22px",
      letterSpacing: "0.0038em",
    },
    h5: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 16,
      fontWeight: 700,
      lineHeight: "20px",
      letterSpacing: "0.02em",
    },
    h6: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 13,
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "-0.00615385em",
    },
    body1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 16,
      lineHeight: "20px",
      letterSpacing: "0.02em",
    },
    body2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 17,
      lineHeight: "28px",
      letterSpacing: "0.02em",
    },
    caption: {
      fontFamily: "Montserrat, sans-serif",
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
      default: "#fff",
    },
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      fontSize: 20,
      lineHeight: "20px",
      color: theme.palette.common.white,
      padding: "16px 40px",
      background: "linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)",
      borderRadius: 50,
      minWidth: "none",
      maxWitdh: "none",
      textTransform: "none"
    },
    text: {
      padding: "16px 40px",
    }
  },
  MuiMenuItem: {
    root: {
      color: theme.palette.common.black
    }
  }
};

export default theme;