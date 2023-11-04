import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactSlice = createSlice({
  name: "tasks",
  initialState: {
    contacts: [],
    filter: "",
  },
  task: {
    addContact: (state, action) => {
      state.push({
        id: nanoid(),
        task: action.payload.task,
      });
    },
    removeContact: (state, action) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;

// // Actions
// export const addContact = createAction("ADD_CONTACT");
// export const removeContact = createAction("REMOVE_CONTACT");

// export default createReducer([], {
//   [addContact.type]: (state, action) => {
//     state.push({
//       id: ++id,
//       task: action.payload.task,
//     });
//   },
//   [removeContact.type]: (state, action) => {
//     const index = state.findIndex(
//       (contact) => contact.id === action.payload.id
//     );
//     state.splice(index, 1);
//   },
// });

// const initialState = {
//   contacts: [],
//   filter: "",
// };
