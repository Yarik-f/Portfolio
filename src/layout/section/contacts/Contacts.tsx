import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {S} from './Contacts_Styles'

export const Contacts: React.FC = () => {
    return (
        <S.StyledContacts>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>Contacts</SectionTitle>
                    <S.ContactsText>
                        Want to know more or just chat?
                        You are welcome!
                    </S.ContactsText>
                    <Button>Send message</Button>
                </FlexWrapper>
            </Container>
        </S.StyledContacts>
    );
};

