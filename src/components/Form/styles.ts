import styled from 'styled-components';

export const ErrorText = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const FormContainer = styled.form`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #357a38;
  }
`;
