import React from "react";
import { FormContainer, Header } from "../styles/SignUpForm";
import Form from "../components/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { saveEmployee } from "../utils/dataStorage";
import { employeeData } from "../types/types";

const CreateEmployee = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const customerEmail = searchParams.get("email") || "";

  const handleCreateEmployee = (data: employeeData) => {
    saveEmployee("employee", data, customerEmail);
    navigate(`./view-employees?email=${encodeURIComponent(customerEmail)}`);
  };

  return (
    <FormContainer>
      <Header>CREATE EMPLOYEE</Header>
      <Form
        fields={[
          { label: "Name", name: "name", type: "text" },
          { label: "Role", name: "role", type: "text" },
          { label: "Email", name: "email", type: "email" },
        ]}
        onSubmit={handleCreateEmployee}
      />
    </FormContainer>
  );
};

export default CreateEmployee;
