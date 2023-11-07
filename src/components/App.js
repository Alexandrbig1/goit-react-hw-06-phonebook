import { useState } from "react";
import Filter from "./Filter/Filter";
import FormSubmit from "./FormSubmit/FormSubmit";
import ContactsList from "./ContactsList/ContactsList";
import ThemeButton from "./ThemeButton/ThemeButton";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { getContacts } from "../redux/selectors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      mainBgColor: "#e9ecef",
      textColor: "#050505",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#f8f9fa",
      containerColor: "#dee2e6",
      itemsEven: "#f8f9fa",
      itemsOdd: "#dee2e6",
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
      itemsEven: "#212529",
      itemsOdd: "#343a40",
      boxShadow: "none",
    },
  },
};

export default function App() {
  const contacts = useSelector(getContacts);
  const [isOpen, setIsOpen] = useState(contacts.length === 0 ? false : true);
  const [isDarkTheme, setIsDarkTheme] = useState(
    contacts.length === 0 ? false : true
  );

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

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
                <FormSubmit />
                {contacts.length !== 0 && (
                  <AppContactsDiv>
                    <AppTitleH2>Contacts</AppTitleH2>
                    <Filter contacts={contacts} />
                    <ContactsList />
                  </AppContactsDiv>
                )}
              </>
            )}
          </AppDiv>
        </AppWrapper>
      </AppContainer>
      <ToastContainer />
    </ThemeProvider>
  );
}
