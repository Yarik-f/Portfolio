import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";

const items = ['Home', 'About me', 'Skills', 'Portfolio', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu menuItems={items}/>

            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  
`