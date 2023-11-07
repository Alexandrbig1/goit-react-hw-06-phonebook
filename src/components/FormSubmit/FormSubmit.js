import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import {
  FormContactBtn,
  FormLabel,
  FormStyled,
  FormField,
  FormError,
  FormHiUser,
  FormHiPhone,
  FormInputWrapper,
} from "./FormSubmit.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact, removeContact } from "../../redux/contactSlice";

export default function FormSubmit({ onFormSubmit }) {
  const dispatch = useDispatch();
  const contactsEl = useSelector((state) => state.contacts);

  console.log(dispatch);
  console.log(contactsEl);

  const [contact, setContact] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(values) {
    const newValue = { ...values, id: nanoid() };

    if (!newValue.contact || !newValue.phoneNumber) {
      return;
    }
    console.log(newValue);
    dispatch(addContact(newValue.contact));

    onFormSubmit(newValue);

    setContact("");
    setPhoneNumber("");
  }

  const formSchema = Yup.object({
    contact: Yup.string()
      .min(1, "Too Short Name!")
      .max(50, "Too Long Name!")
      .required("Please write a name"),
    phoneNumber: Yup.string()
      .min(9, "Invalid Phone Number")
      .required("Please fill up the phone number!"),
  });

  return (
    <Formik
      initialValues={{
        contact: contact,
        phoneNumber: phoneNumber,
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm({
          values: {
            contact: contact,
            phoneNumber: phoneNumber,
          },
        });
      }}
    >
      <FormStyled className="contact-form">
        <FormLabel htmlFor="contact">Name</FormLabel>
        <FormInputWrapper>
          <FormHiUser />
          <FormField type="text" name="contact" placeholder="John Doe" />
        </FormInputWrapper>

        <FormError component="span" name="contact" />

        <FormLabel htmlFor="phoneNumber">Number</FormLabel>

        <FormInputWrapper>
          <FormHiPhone />
          <FormField
            type="number"
            name="phoneNumber"
            placeholder="123 45 6789"
          />
        </FormInputWrapper>

        <FormError component="span" name="phoneNumber" />

        <FormContactBtn type="submit">Add contact</FormContactBtn>
      </FormStyled>
    </Formik>
  );
}
