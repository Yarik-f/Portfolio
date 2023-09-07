import React from "react";
import {S} from './Menu_Styles'


const items = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'About me',
        href: 'about'
    },
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Portfolio',
        href: 'portfolio'
    },
    {
        title: 'Contacts',
        href: 'contacts'
    }
]
export const Menu: React.FC = () => {
    return (
        <S.MenuList>
            {items.map((item, index) => {
                return (
                    <li key={index}>
                        <S.MenuLink
                            to={item.href}
                            smooth={true}
                        >{item.title}</S.MenuLink>
                    </li>
                )
            })}
        </S.MenuList>
    );
};


