import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

export type StatusType = 'all' | 'landing' | 'react' | 'spa'

type TabsMenuPropsType = {
    tabsItems: Array<{ title: string, status: StatusType }>
    changeFilterStatus: (value: StatusType) => void
    currentFilterStatus: string
}

export const TabsMenu = (props: TabsMenuPropsType) => {
    return (
        <StyledMenu>
            <ul>

                {props.tabsItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link active={props.currentFilterStatus === item.status} as={'button'} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
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
  
`
const Link = styled.a<{active: boolean}>`
  font-size: 18px;
  line-height: 26px;
  font-weight: bolder;
  color: ${theme.colors.fontText};
  text-transform: uppercase;
  
  transition: .2s ease-in-out;
  
  &:hover{
    color: ${theme.colors.font};
    cursor: pointer;
  }
  
  ${props => props.active && css<{active: boolean}>`
    color: ${theme.colors.font};
  `}
`