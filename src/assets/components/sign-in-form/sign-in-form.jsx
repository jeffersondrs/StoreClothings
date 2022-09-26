import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../form-input/Form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
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
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (err) {
      message: err.message;
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
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="w-96 h-96 flex flex-col justify-center m-2 p-2">
      <h1 className="text-2xl text-center my-3">Already have an account?</h1>
      <span>Sign in with your email and password</span>
      <form
        className="flex flex-col items-center justify-center p-2 mt-4"
        onSubmit={handleSubmit}
      >
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
        <div className="flex flex-row">
          <Button className="w-36 bg-white text-black h-12 p-2 m-1 rounded-md hover:bg-gray-900 hover:text-white">
            SIng IN
          </Button>
          <Button
            className="w-36 h-12 text-white m-1 p-2 rounded-md bg-white hover:bg-blue-900 flex flex-row items-center justify-center"
            onClick={signInWithGoogle}
          >
            <FcGoogle className="mx-3 rounded-full w-7 h-7" />
          </Button>
        </div>
      </form>
    </div>
  );
}