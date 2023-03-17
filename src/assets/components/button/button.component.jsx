import {
  GoogleSignInStyles,
  InvertedButtonStyles,
  buttonStyles,
} from "./button.styles";
export const btnTypesClasses = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButtonStyles = (buttonTypes = btnTypesClasses.base) =>
  ({
    [btnTypesClasses.base]: buttonStyles,
    [btnTypesClasses.google]: GoogleSignInStyles,
    [btnTypesClasses.inverted]: InvertedButtonStyles,
  }[buttonTypes]);
export default function Button({ children, buttonTypes, ...otherProps }) {
  const ButtonStyles = getButtonStyles(buttonTypes);
  return <ButtonStyles {...otherProps}>{children}</ButtonStyles>;
}
