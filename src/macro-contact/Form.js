// Components==============
import React from "react";
import styled from "styled-components";
import { Button } from "../style/Mixins";
// =========================

const Wrapper = styled.form`
  width: 100%;
  max-width: 500px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    margin-bottom: 0;
  }

  label {
    padding-bottom: ${({ theme: { spacing } }) => spacing[1]};
    display: block;
  }

  input {
    width: 100%;
    display: block;
    background: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid ${({ theme: { gray } }) => gray[7]};
    padding-bottom: ${({ theme: { spacing } }) => spacing[0]};
    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};

    @media screen and (min-width: 700px) {
      width: 50%;
    }
  }

  textarea {
    width: 100%;
    height: 25vh;
    background: transparent;
    border: 1px solid ${({ theme: { gray } }) => gray[7]};
    color: white;
    padding: ${({ theme: { spacing } }) => `${spacing[3]} ${spacing[4]}`};
    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  }
`;

const Input = ({ items, element = "input" }) => {
  const { name, type, placeholder } = items;

  return (
    <>
      <label htmlFor={name}>{name}</label>
      {element === "input" ? (
        <input
          aria-label={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required
        />
      ) : (
        <textarea
          aria-label={name}
          name={name}
          placeholder={placeholder}
          required
        />
      )}
    </>
  );
};

export default function Form() {
  const formName = "contact";

  const formItems = [
    { name: "Naam", placeholder: "Jon Doe" },
    { name: "Email", placeholder: "jondoe@email.com", type: "email" },
    { name: "onderwerp", placeholder: "Offerte" },
    { name: "bericht", placeholder: "..." },
  ];

  return (
    <Wrapper
      id={formName}
      name={formName}
      method="post"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input aria-label="bot-field" type="hidden" name="bot-field" />
      <input
        aria-label="form-name"
        type="hidden"
        name="form-name"
        value={formName}
      />
      <Input items={formItems[0]} />
      <Input items={formItems[1]} />
      <Input items={formItems[2]} />
      <Input items={formItems[3]} element="textarea" />
      <Button type="submit">Verstuur</Button>
    </Wrapper>
  );
}
