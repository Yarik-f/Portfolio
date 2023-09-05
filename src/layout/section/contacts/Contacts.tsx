import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <ContactsTitle>Contacts</ContactsTitle>
            <ContactsText>
                Want to know more or just chat?
                You are welcome!
            </ContactsText>
            <ContactsButton>Send message</ContactsButton>
        </StyledContacts>
    );
};
const StyledContacts = styled.section`
  margin-top: 115px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContactsTitle = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
`
const ContactsText = styled.p`
  font-size: 18px;
  max-width: 300px;
  margin-bottom: 30px;
  text-align: center;
`
const ContactsButton = styled.a`
  border: 1px solid black;
  border-radius: 100px;
  padding: 10px 30px 10px 30px;
  color: ${theme.colors.fontAnother};
  background-color: ${theme.colors.font};
  margin-bottom: 45px;
  
  &:hover{
    cursor: pointer;
    background-color: ${theme.colors.fontAnother};
    color: ${theme.colors.font};
  }
`