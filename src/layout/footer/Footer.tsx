import React from 'react';
import {Icon} from "../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
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
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
`
const FooterList = styled.ul`
  padding-top: 70px;
  display: flex;
  gap: 60px;
  margin-bottom: 25px;
`
const FooterItem = styled.li``
const FooterText = styled.p`
  font-size: 14px;
  color: ${theme.colors.fontText};
  max-width: 280px;
  text-align: center;
  padding-bottom: 125px;
`
