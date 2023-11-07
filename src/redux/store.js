import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // reducer: { contacts: contactsReducer, filters: filtersContacts },
});

export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filteredContacts,
//   },
// });
