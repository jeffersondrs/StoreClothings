import {
  GoogleSignInStyles,
  InvertedButtonStyles,
  buttonStyles,
  ButtonSpinner,
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
export default function Button({
  children,
  buttonTypes,
  isLoading,
  ...otherProps
}) {
  const ButtonStyles = getButtonStyles(buttonTypes);
  return (
    <ButtonStyles disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </ButtonStyles>
  );
}
