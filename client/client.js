import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import Home from "./component/Home";
// rendering
// const root = createRoot(document.getElementById("root"));

// root.render(<Home />);

// hydrate
const container = document.getElementById("root");
hydrateRoot(container, <Home />);
