import React from "react";
import {Menu} from "../../../components/menu/Menu";
import {S} from './HeaderMenu_Styles'


export const HeaderMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.StyledHeaderMenu>
            <Menu menuItems={props.menuItems}/>
            <span></span>
        </S.StyledHeaderMenu>
    );
};


