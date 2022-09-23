import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../src/utils/firebase/firebase.ituls";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await  createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>Firebase</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </>
  );
}
