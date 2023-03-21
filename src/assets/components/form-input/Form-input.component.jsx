import {
  FormInput,
  FormInputLabel,
  GroupStyle,
} from "./form.styles";

export default function InputForm({ label, ...otherProps }) {
  return (
    <GroupStyle>
      <FormInput {...otherProps} />
      {label ? (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupStyle>
  );
}
