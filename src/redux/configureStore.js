import { configureStore } from "@reduxjs/toolkit";
import reducer from "./contacts";

const store = configureStore({ reducer });

export default store;

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filteredContacts,
//   },
// });
