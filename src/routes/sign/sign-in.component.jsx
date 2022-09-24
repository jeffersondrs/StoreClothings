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
        <h1>Sign In</h1>
        <SignUpForm />
      </div>
      <div className="flex flex-row justify-center items-center">
        <button className="w-56 bg-black/90 text-white h-12 p-2 m-1 rounded-md hover:bg-black">
          SIng IN
        </button>
        <button
          className="w-56 h-12 text-white m-1 p-2 rounded-md bg-blue-800/90 hover:bg-blue-900"
          onClick={logGoogleUser}
        >
          Sign in with Google
        </button>
      </div>
    </>
  );
}
