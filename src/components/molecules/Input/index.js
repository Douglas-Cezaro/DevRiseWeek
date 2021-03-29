import React from "react";
import { InputContainer, InputText } from "./styles";
import { InputLabel } from "../../atoms";

export const Input = (props) => {
  const { label, placeholder } = props;
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText
        {...props}
        placeholder={placeholder}
        placeholderTextColor="white"
      />
    </InputContainer>
  );
};
