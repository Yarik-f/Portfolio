import React from 'react';
import {Icon} from "../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterList>
                <FooterItem>
                    <Icon iconId={'linkedin'}/>
                </FooterItem>
                <FooterItem>
                    <Icon iconId={'instagram'}/>
                </FooterItem>
                <FooterItem>
                    <Icon iconId={'behance'}/>
                </FooterItem>
                <FooterItem>
                    <Icon iconId={'surface'}/>
                </FooterItem>
            </FooterList>
            <FooterText>
                Like me on <br/>
                LinkedIn, Instagram, Behance, Dribble
            </FooterText>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 125px;
`
const FooterList = styled.ul`
  display: flex;
  gap: 60px;
  margin-bottom: 50px;
`
const FooterItem = styled.li``
const FooterText = styled.p`
  font-size: 14px;
  color: ${theme.colors.fontText};
  max-width: 280px;
  text-align: center;
`
