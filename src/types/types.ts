interface textFieldProps {
  label: string;
  name: string;
  type: string;
  validate?: (value: string) => string | null;
}

export interface formProps<T> {
  fields: textFieldProps[];
  onSubmit: (formData: T) => void;
}

export interface customerData {
  fullName: string;
  email: string;
  password: string;
}

export interface employeeData {
  name: string;
  role: string;
  email: string;
}
