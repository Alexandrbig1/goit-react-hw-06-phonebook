import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import { addContact, removeContact } from "./redux/contacts";
// import store from "./redux/configureStore";

// store.dispatch(addContact({ task: "Contact 1" }));
// store.dispatch(removeContact({ task: "Contact 2" }));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
