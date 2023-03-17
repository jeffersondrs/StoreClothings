import { FormContainer, FormInputContainer } from "./form.styles";

export default function InputForm({ label, ...otherProps }) {
  return (
    <FormContainer>
      <FormInputContainer
        {...otherProps}
        className="bg-transparent border-b outline-none transition-all p-1"
      />
    </FormContainer>
  );
}
