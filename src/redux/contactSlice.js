import { createSlice } from "@reduxjs/toolkit";

// export const addContact = createAction("contacts/addcontact");
// export const removeContact = createAction("contacts/removecontact");

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      state.push({
        // id: nanoid(),
        task: action.payload.task,
      });
    },
    removeContact(state, action) {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = contactSlice.reducer;
export const { addContact, removeContact } = contactSlice.actions;
