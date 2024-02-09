import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme/theme.ts";
import { MyContextProvider } from "./context/Context.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MyContextProvider>
  </React.StrictMode>
);
