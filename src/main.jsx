import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#22543d",
    800: "#276749",
    700: "#2f855a",
  },
  primary: {
    50: "#e6fffa",
    100: "#b2f5ea",
    200: "#81e6d9",
    300: "#4fd1c5",
    400: "#38b2ac",
    500: "#319795",
    600: "#2c7a7b",
    700: "#285e61",
    800: "#234e52",
    900: "#1d4044",
  },
  secondary: {
    50: "#f0fff4",
    100: "#c6f6d5",
    200: "#9ae6b4",
    300: "#68d391",
    400: "#48bb78",
    500: "#38a169",
    600: "#2f855a",
    700: "#276749",
    800: "#22543d",
    900: "#1c4532",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);