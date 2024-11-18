import styled from "styled-components";

export const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  margin: 20px 0px 0px 220px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
`;
