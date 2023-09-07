import React from "react";
import {Menu} from "../../../components/menu/Menu";
import {S} from './HeaderMenu_Styles'


export const HeaderMenu: React.FC = () => {
    return (
        <S.StyledHeaderMenu>
            <Menu/>
            <span></span>
        </S.StyledHeaderMenu>
    );
};


