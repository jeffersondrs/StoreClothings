import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../form-input/Form-input.component";
import Button, { btnTypesClasses } from "../button/button.component";
import { SignInFormContainer, HeaderSingIn } from "./sign-in-form.styles";
const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("Email not found, please check your email and try again");
          break;
        default:
          console.log(err.code);
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
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="flex flex-col items-center justify-center m-2 p-2">
      <HeaderSingIn>
        <h1 className="text-2xl text-center my-3">Already have an account?</h1>
        <span>Sign in with your email and password</span>
      </HeaderSingIn>
      <SignInFormContainer onSubmit={handleSubmit}>
        <FormInput
          label="E-mail"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          placeholder="E-mail"
        />
        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          placeholder="Password"
        />
        <div className="flex flex-row flex-wrap justify-evenly items">
          <Button
            type="submit"
            className="w-36 bg-white/10 text-white h-12 p-2 m-1 rounded-md hover:bg-gray-900 hover:text-white"
          >
            SIng IN
          </Button>
          <Button
            buttonTypes={btnTypesClasses.google}
            type="button"
            className="w-36 h-12 text-white m-1 p-2 rounded-md bg-white/10 hover:bg-blue-900 flex flex-row items-center justify-center"
            onClick={signInWithGoogle}
          >
            <FcGoogle className="mx-3 rounded-full w-7 h-7" />
          </Button>
        </div>
      </SignInFormContainer>
    </div>
  );
}
