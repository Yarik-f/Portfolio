import React from "react";
import {S} from './Menu_Styles'

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MenuList>
            {props.menuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item}>{item}</a>
                    </li>
                )
            })}
        </S.MenuList>
    );
};


