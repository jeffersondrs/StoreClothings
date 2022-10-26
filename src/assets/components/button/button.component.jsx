import "./button.styles.scss";
const btnTypesClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children, buttonTypes, ...otherProps }) {
  return (
    <button
      className={`button-container ${btnTypesClasses[buttonTypes]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
