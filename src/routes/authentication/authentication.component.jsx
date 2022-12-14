import SignUpForm from "../../assets/components/sing-up-form/sign-up-form-component";

import SignInForm from "../../assets/components/sign-in-form/sign-in-form";

export default function Authentication() {
  return (
    <>
      <div className="w-screen flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-evenly items-center h-screen">
        <div className="flex flex-col justify-center items-center w-1/2">
          <SignInForm />
        </div>
        <p className="text-center my-3">OR</p>
        <div className="flex flex-col justify-center items-center w-1/2">
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
