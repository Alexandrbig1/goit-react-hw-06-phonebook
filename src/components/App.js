import { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import FormSubmit from "./FormSubmit/FormSubmit";
import ContactsList from "./ContactsList/ContactsList";
import ThemeButton from "./ThemeButton/ThemeButton";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import {
  AppDiv,
  AppTitleH1,
  AppTitleH2,
  AppContactsDiv,
  AppContainer,
  AppWrapper,
} from "./App.styled";
import {
  AppButton,
  AppButtonOpen,
  AppButtonClose,
} from "./AppButton/AppButton";

const theme = {
  light: {
    colors: {
      mainBgColor: "#ced4da",
      textColor: "#050505",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#f8f9fa",
      containerColor: "#dee2e6",
      boxShadow: "rgba(255, 255, 255, 0.5)",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#1E1E1E",
      textColor: "#fffaff",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#0b0014",
      containerColor: "#050505",
      boxShadow: "none",
    },
  },
};

export default function App() {
  const startState = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(
    startState === null ? [] : startState
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(contacts.length === 0 ? false : true);
  const [isDarkTheme, setIsDarkTheme] = useState(
    contacts.length === 0 ? false : true
  );

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  function onFormSubmit(contact) {
    const contactExist = contacts.some(
      (item) => item.contact === contact.contact
    );

    if (contactExist) {
      alert(`${contact.contact} is already in contacts.`);
    } else {
      setContacts((contacts) => [...contacts, contact]);
    }
  }

  function onDeleteHandler(id) {
    setContacts((contact) => contact.filter((item) => item.id !== id));
  }

  function changeFilter(e) {
    const searchContact = e.toLowerCase();
    setSearchTerm(searchContact);
  }

  function filteredByContact() {
    const filter = searchTerm.toLowerCase();
    const filtered = contacts.filter((item) =>
      item.contact.toLowerCase().includes(filter)
    );
    return filtered;
  }
  const visibleContacts = filteredByContact();

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      <AppContainer>
        <ThemeButton toggleTheme={toggleTheme} />
        <AppWrapper open={isOpen}>
          <AppButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AppButtonClose /> : <AppButtonOpen />}
          </AppButton>
          <AppDiv>
            {isOpen && (
              <>
                <AppTitleH1>Phonebook</AppTitleH1>
                <FormSubmit onFormSubmit={onFormSubmit} />
                {contacts.length !== 0 && (
                  <AppContactsDiv>
                    <AppTitleH2>Contacts</AppTitleH2>
                    <Filter contacts={contacts} onInputHandler={changeFilter} />
                    <ContactsList
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      contacts={visibleContacts}
                      onDeleteHandler={onDeleteHandler}
                    />
                  </AppContactsDiv>
                )}
              </>
            )}
          </AppDiv>
        </AppWrapper>
      </AppContainer>
    </ThemeProvider>
  );
}
