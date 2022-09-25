import { FcGoogle } from "react-icons/fc";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../assets/components/sing-up-form/sign-form-component";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="mt-2">Don't have an account?</h2>
        <SignUpForm />
      </div>
      <p className="text-center my-3">OR</p>
      <div className="flex flex-row justify-center items-center">
        <button className="w-36 bg-gray-700 text-white h-12 p-2 m-1 rounded-md hover:bg-black">
          SIng IN
        </button>
        <button
          className="w-36 h-12 text-white m-1 p-2 rounded-md bg-blue-400 hover:bg-blue-500 flex flex-row items-center justify-center"
          onClick={logGoogleUser}
        >
          <FcGoogle className="mx-3 rounded-full w-7 h-7" />
        </button>
      </div>
    </>
  );
}
