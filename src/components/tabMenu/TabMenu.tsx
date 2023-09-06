import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={'#'}>{item}</a>
                        </li>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
  }
  a{
    font-size: 18px;
    line-height: 26px;
    font-weight: bolder;
    color: ${theme.colors.fontText};
    text-transform: uppercase;
    
    &:hover{
      color: ${theme.colors.font};
    }
  }
`