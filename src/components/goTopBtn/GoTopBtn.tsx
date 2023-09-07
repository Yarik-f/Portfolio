import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Link} from "react-scroll";

export const GoTopBtn = () => {
    return (
        <StyledGoTopBtn>
            <BtnHome
                to={'home'}
                smooth={true}>
                <Icon iconId={'up'}/>
            </BtnHome>
        </StyledGoTopBtn>
    );
};

const StyledGoTopBtn = styled.button`
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`
const BtnHome = styled(Link)`
  
`
