import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./ContactSlice";

const store = configureStore({ reducer: contactsReducer });

export default store;

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filteredContacts,
//   },
// });
