import React from 'react';
import styled from "styled-components";
import {Menu} from "./Menu";

const items = ['Home', 'About me', 'Skills', 'Portfolio', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header``