import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  border-left: 1px solid #E1E2E3;
  height: 60px;
  width: 100%;
  max-width: 60px;
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  margin-left: 40px;
  &:hover {
    background-color: #5B35D5;
    input {
      width: 300px;
      padding: 0 15px;
    }
  }
`;

export const Input = styled.input`
  transition: all 0.3s ease;
  position: absolute;
  width: 0px;
  right: 60px;
  top: 0px;
  padding: 0px 0px;
  height: 60px;
  border-radius: 0px;
  border: 0px;
  background-color: #f7f7f7;
  outline: none;
`;

export const Label = styled.label`
  cursor: pointer;
  span {
    padding: 20px;
  }
`;