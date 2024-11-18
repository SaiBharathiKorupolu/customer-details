import React, { useState } from "react";
import { Button, Input, Label } from "../styles/Form";
import { formProps } from "../types/types";

const Form = <T extends {}>({ fields, onSubmit }: formProps<T>) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const field = fields.find((f) => f.name === name);
    if (field?.validate) {
      setErrors({ ...errors, [name]: field.validate(value) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors: { [key: string]: string | null } = {};

    fields.forEach(({ name, validate }) => {
      if (validate) {
        const error = validate(formData[name] || "");
        newErrors[name] = error;
        if (error) {
          formIsValid = false;
        }
      }
    });
    setErrors(newErrors);
    if (formIsValid) {
      onSubmit(formData as T);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ label, name, type }) => (
        <div key={name}>
          <Label>{label}</Label>
          <Input
            name={name}
            type={type}
            value={formData[name] || ""}
            onChange={onChangeHandler}
            required
          />
          {errors[name] && <span style={{ color: "red" }}>{errors[name]}</span>}
        </div>
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
