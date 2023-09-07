import React from 'react';
import {Container} from "../../components/Container";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {S} from './Header_Styles'

const items = ['Home', 'About me', 'Skills', 'Portfolio', 'Contacts']

export const Header: React.FC = () => {
    return (
        <S.StyledHeader>
            <Container>
                <HeaderMenu menuItems={items}/>
                <MobileMenu menuItems={items}/>
            </Container>
        </S.StyledHeader>
    );
};

