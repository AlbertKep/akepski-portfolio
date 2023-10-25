import { useState } from "react";
import {
  Container,
  Heading,
  Form,
  InputsContainer,
  InputController,
  ErrorInfo,
  ButtonContainer,
} from "./Contact.styled";

import Modal from "../../components/modal/Modal";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: {
      value: "",
      error: null,
    },
    email: {
      value: "",
      error: null,
    },
    message: {
      value: "",
      error: null,
    },
  });
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: { value, error: null } }));
  };

  const isFormValid = (data) => {
    let isValid = true;
    const clone = { ...data };

    Object.entries(clone).forEach(([fieldName, fieldValue]) => {
      if (fieldName === "name") {
        if (fieldValue.value.length < 3) {
          isValid = false;
          fieldValue.error = "Name should contains minimum 3 characters";
        }
      }

      if (fieldName === "email") {
        const pattern =
          /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
        const patternIsValid = pattern.test(fieldValue.value);

        if (!patternIsValid) {
          isValid = false;
          fieldValue.error = "Email must be a valid, e.g. kowalski@gmail.com";
        }
      }

      if (fieldName === "message") {
        if (fieldValue.value.length < 5) {
          isValid = false;
          fieldValue.error = "Message should contains minimum 5 characters";
        }
      }
    });

    return { isValid, clone };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, clone } = isFormValid(formData);
    console.log(isValid);
    if (!isValid) {
      setFormData(clone);
    }
    setIsVisible((prev) => !prev);
    console.log("Evething is oke");
  };

  return (
    <Container>
      <Heading>
        <span>soo...</span>
        <span>what are you waiting for?</span>
      </Heading>

      <Form noValidate onSubmit={handleSubmit}>
        <InputsContainer>
          <InputController>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name.value}
              onChange={changeHandler}
              required
            />
            {formData.name.error && (
              <ErrorInfo>{formData.name.error}</ErrorInfo>
            )}
          </InputController>
          <InputController>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email.value}
              onChange={changeHandler}
            />
            {formData.email.error && (
              <ErrorInfo>{formData.email.error}</ErrorInfo>
            )}
          </InputController>
          <InputController>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="8"
              cols="25"
              value={formData.message.value}
              onChange={changeHandler}
            />
            {formData.message.error && (
              <ErrorInfo>{formData.message.error}</ErrorInfo>
            )}
          </InputController>
        </InputsContainer>

        <ButtonContainer>
          <button>send me a message</button>
        </ButtonContainer>
      </Form>
      {isVisible && <Modal setIsVisible={setIsVisible} />}
    </Container>
  );
};

export default Contact;
