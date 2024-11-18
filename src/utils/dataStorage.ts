export const saveCustomer = (name: string, data: any) => {
  let existingData = JSON.parse(localStorage.getItem(name) || "[]");
  if (!Array.isArray(existingData)) {
    existingData = [];
  }
  localStorage.setItem(
    name,
    JSON.stringify([...existingData, { ...data, employees: [] }])
  );
};

export const saveEmployee = (
  name: string,
  data: any,
  customerEmail: string
) => {
  const customers = JSON.parse(localStorage.getItem("customer") || "[]");

  const updatedCustomers = customers.map((cust: any) => {
    if (cust.email === customerEmail) {
      return { ...cust, employees: [...cust.employees, data] };
    }
    return cust;
  });
  localStorage.setItem("customer", JSON.stringify(updatedCustomers));
};

export const getEmployeesData = (name: string) => {
  return JSON.parse(localStorage.getItem(name) || "[]");
};
