import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

//TODO: I want react router to be available in my App once installed
//We have to give access to the package using a provider
//provider --> BrowserRouter
//we are nesting App within BrowserRouter so App has access to the react router tools
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
