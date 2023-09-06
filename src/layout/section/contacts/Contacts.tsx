import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>Contacts</SectionTitle>
                    <ContactsText>
                        Want to know more or just chat?
                        You are welcome!
                    </ContactsText>
                    <Button>Send message</Button>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};
const StyledContacts = styled.section`
    ${Button} {
      margin-bottom: 45px;
      transition: .2s ease-in-out;
    }
`
const ContactsText = styled.p`
  font-size: 18px;
  max-width: 300px;
  margin-bottom: 30px;
  text-align: center;
`
