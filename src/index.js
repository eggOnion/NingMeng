import React from "react";
import ReactDOM from "react-dom/client";
// import './styles/index.css';
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

// const theme = extendTheme({
//   styles: {
//     global: {
//       ".chakra-form__error-message": {
//         color: "red.500", // Custom error message font color
//         fontWeight: "bold", // Optional
//       },
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
