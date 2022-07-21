import React, { useState } from "react";
import "./FormStyles.css";
import { validateEmail } from "../utils/helpers";

function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
        />

        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          rows="5"
          defaultValue={message}
          onBlur={handleChange}
        />

        {errorMessage && <p className="error-text">{errorMessage}</p>}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
