import React from 'react';
import styled from "styled-components";
import {Menu} from "./Menu";

const items = ['Home', 'About me', 'Skills', 'Portfolio', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Menu menuItems={items}/>
            <span></span>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  span{
    position: absolute;
    content: '';
    border: 1px solid #828282;
    width: 940px;
    left: 287px;
  }
`