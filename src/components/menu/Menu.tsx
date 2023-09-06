import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = (props: {menuItems: Array<string>}) => {
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
            <span></span>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    position: relative;
    display: flex;
    gap: 150px;
    justify-content: center;
    margin: 35px 0 30px 0;
  }
  a{
    font-size: 18px;
    color: ${theme.colors.fontText};
    
    &:hover{
      color: ${theme.colors.font};
    }
  }
  
  span {
    position: absolute;
    content: '';
    border: 1px solid #828282;
    width: 940px;
    left: 287px;
  }
`