import React, { useEffect, useState } from "react";
import { getEmployeesData } from "../utils/dataStorage";
import { FormContainer, Header } from "../styles/SignUpForm";
import { useSearchParams } from "react-router-dom";
import { Table, StyledContent } from "../styles/ViewEmployees";
import { employeeData } from "../types/types";

const ViewEmployees = () => {
  const [searchParams] = useSearchParams();
  const customerEmail = searchParams.get("email");
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    const customers = getEmployeesData("customer");
    const currentCustomer = customers.find(
      (cust: any) => cust.email === customerEmail
    );
    if (currentCustomer) {
      setEmployees(currentCustomer.employees || []);
    }
  }, [customerEmail]);

  return (
    <FormContainer>
      <Header>VIEW EMPLOYEES</Header>
      {employees.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp: employeeData, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <StyledContent>No employees in the list</StyledContent>
      )}
    </FormContainer>
  );
};

export default ViewEmployees;
