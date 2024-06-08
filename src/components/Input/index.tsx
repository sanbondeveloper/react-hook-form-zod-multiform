import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from '../MultiForm';
import { ErrorMessage, Label, TextField } from './styles';

// onChange, onBlur, ref, name

const Input = React.forwardRef<
  HTMLInputElement,
  { label: string; type: string; error: string | undefined } & ReturnType<
    UseFormRegister<FormData>
  >
>(({ label, type, error, ...props }, ref) => (
  <div>
    <Label htmlFor="email">{label}</Label>
    <TextField type={type} id={label} {...props} ref={ref} />
    <ErrorMessage>{error && <p>{error}</p>}</ErrorMessage>
  </div>
));

export default Input;
