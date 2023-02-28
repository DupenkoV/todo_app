import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "./store/index";
import { Provider } from "react-redux";


import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = configureStore();

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);