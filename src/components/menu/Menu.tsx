import styled from "styled-components";
import {theme} from "../../styles/Theme";
import React from "react";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item}>{item}</a>
                        </li>
                    )
                })}
            </ul>
            <span></span>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  position: relative;
  ul {
   
    display: flex;
    gap: 150px;
    justify-content: center;
    margin: 35px 0 30px 0;
  }

  a {
    font-size: 18px;
    color: ${theme.colors.fontText};

    &:hover {
      color: ${theme.colors.font};
    }
  }

  span {
    position: absolute;
    content: '';
    border: 1px solid #828282;
    width: 100%;
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }

`