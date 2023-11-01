import {
  Button,
  List,
  P,
  ContactIcon,
  ContactDelete,
} from "./ContactItems.styled";

export default function ContactItems({
  contact,
  id,
  phoneNumber,
  onDeleteHandler,
}) {
  return (
    <List>
      <P>
        <ContactIcon />
        {contact}: {phoneNumber}
      </P>
      <Button onClick={() => onDeleteHandler(id)}>
        <ContactDelete />
      </Button>
    </List>
  );
}
