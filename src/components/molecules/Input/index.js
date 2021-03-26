import React from "react";
import { InputContainer, InputText } from "./styles";
import { InputLabel } from "../../atoms";

export const Input = ({ label, placeholder }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText placeholder={placeholder} placeholderTextColor="white" />
    </InputContainer>
  );
};
