import React from 'react';
import {Container} from "../../components/Container";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {S} from './Header_Styles'



export const Header: React.FC = () => {
    return (
        <S.StyledHeader>
            <Container>
                <HeaderMenu />
                <MobileMenu/>
            </Container>
        </S.StyledHeader>
    );
};

