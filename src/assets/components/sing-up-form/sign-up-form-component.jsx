import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../form-input/Form-input.component";
import Button from "../button/button.component";
import { SignInFormContainer } from "./sing-up-form-button.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center m-2 p-2">
      <h1 className="text-2xl text-center my-3">Don't have an account?</h1>
      <h2 className="text-center my-3">
        Sign Up with your e-mail and password
      </h2>
      <SignInFormContainer
        onSubmit={handleSubmit}
      >
        <FormInput
          label="Name Complete"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="E-mail"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <div className="px-28">

        <Button
          className="w-36 h-10 rounded-lg my-2 text-white hover:bg-blue-700 hover:text-white ease-in-out"
          type="submit"
          >
          Sign Up
        </Button>
          </div>
      </SignInFormContainer>
    </div>
  );
}
