import ContactItems from "../ContactItems/ContactItems";
import { Menu } from "./ContactsList.styled";

export default function ContactsList({
  contacts,
  onDeleteHandler,
  searchTerm,
}) {
  return (
    <Menu className="contact-menu">
      {contacts.length === 0 && searchTerm.length > 0 ? (
        <li className="contact-list">No matching contacts found</li>
      ) : contacts.length > 0 ? (
        contacts.map(({ contact, phoneNumber, id }) => (
          <ContactItems
            key={id}
            id={id}
            contact={contact}
            phoneNumber={phoneNumber}
            onDeleteHandler={onDeleteHandler}
          />
        ))
      ) : contacts.length !== 0 ? (
        contacts.map(({ contact, phoneNumber, id }) => (
          <ContactItems
            key={id}
            id={id}
            contact={contact}
            phoneNumber={phoneNumber}
            onDeleteHandler={onDeleteHandler}
          />
        ))
      ) : (
        ""
      )}
    </Menu>
  );
}
