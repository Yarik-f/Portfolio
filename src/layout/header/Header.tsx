import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const items = ['Home', 'About me', 'Skills', 'Portfolio', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu menuItems={items}/>
                <MobileMenu MenuItems={items}/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
`