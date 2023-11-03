import ContactItems from "../ContactItems/ContactItems";
import { Menu, Item } from "./ContactsList.styled";

export default function ContactsList({
  contacts,
  onDeleteHandler,
  searchTerm,
}) {
  return (
    <Menu>
      {contacts.length === 0 && searchTerm.length > 0 ? (
        <Item className="contact-list">No matching contacts found</Item>
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
