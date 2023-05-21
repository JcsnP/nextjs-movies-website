import styled from 'styled-components'
import Container from '../Container';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-contents: between;
  gap: 10px;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid white;
  padding: 15px 15px;
  background-color: #84848466;
  border-radius: 7px;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
`;

export const SubmitButton = styled.button`
  background-color: red;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  font-size: 1.2rem;
  padding: 15px 20px;
  color: white;
`;