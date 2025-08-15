import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

const Contacts = styled.section`
  position: relative;
`;

const Form = styled.form`
  textarea {
    resize: none;
    height: 155px;
  }
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
`;

const Field = styled.input`
  width: 100%;
  background-color: #2c2b2b;
  border: 1px solid grey;
  padding: 7px 15px;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${Theme.colors.fontMain};
  &::placeholder {
    color: ${Theme.colors.placeholder};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid grey;
  }
`;

export const S = {
  Contacts,
  Form,
  Field,
};
