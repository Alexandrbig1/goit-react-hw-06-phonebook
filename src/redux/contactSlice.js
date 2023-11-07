import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { nanoid } from "nanoid";

// export const addContact = createAction("contacts/addcontact");
// export const removeContact = createAction("contacts/removecontact");

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.splice(index, 1);
    },
    // setFilter(state, action) {
    //   state.filter = action.payload;
    // },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;
