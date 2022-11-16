import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = createRoot(document.getElementById("app")!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
