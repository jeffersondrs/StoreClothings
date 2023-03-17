import SignUpForm from "../../assets/components/sing-up-form/sign-up-form-component";
import SignInForm from "../../assets/components/sign-in-form/sign-in-form";
import {
  AuthenticationContainer,
  AuthenticationFormContainer,
  AttributeParagrath
} from "./authentication-styles";

export default function Authentication() {
  return (
    <>
      <AuthenticationContainer>
        <AuthenticationFormContainer>
          <SignInForm />
        </AuthenticationFormContainer>
        <AttributeParagrath>OU</AttributeParagrath>
        <AuthenticationFormContainer>
          <SignUpForm />
        </AuthenticationFormContainer>
      </AuthenticationContainer>
    </>
  );
}
