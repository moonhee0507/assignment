import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Accommodate from "./Accommodate";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Accommodate />
  </StrictMode>
);
