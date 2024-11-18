import React from "react";
import Form from "../components/Form";
import { Header, FormContainer } from "../styles/SignUpForm";
import { useNavigate } from "react-router-dom";
import { saveCustomer } from "../utils/dataStorage";
import { customerData } from "../types/types";

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleSignUp = (data: customerData) => {
    saveCustomer("customer", data);
    navigate(`/create-employee?email=${encodeURIComponent(data.email)}`);
  };

  const validatePassword = (value: string) => {
    return value.length < 6 ? "Password should be 6 characters long" : null;
  };

  return (
    <FormContainer>
      <Header>SIGN UP FORM</Header>

      <Form
        fields={[
          { label: "Full Name", name: "fullName", type: "text" },
          { label: "Email", name: "email", type: "email" },
          {
            label: "Password",
            name: "password",
            type: "password",
            validate: validatePassword,
          },
        ]}
        onSubmit={handleSignUp}
      />
    </FormContainer>
  );
};

export default SignUpForm;
