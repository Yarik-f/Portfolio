import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'

export const Footer: React.FC = () => {
    return (
        <S.StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
                    <S.FooterList>
                        <S.FooterItem>
                            <a href=""><Icon iconId={'linkedin'}/></a>
                        </S.FooterItem>
                        <S.FooterItem>
                            <a href=""><Icon iconId={'instagram'}/></a>
                        </S.FooterItem>
                        <S.FooterItem>
                            <a href=""><Icon iconId={'behance'}/></a>
                        </S.FooterItem>
                        <S.FooterItem>
                            <a href=""><Icon iconId={'surface'}/></a>
                        </S.FooterItem>
                    </S.FooterList>
                    <S.FooterText>
                        Like me on <br/>
                        LinkedIn, Instagram, Behance, Dribble
                    </S.FooterText>
                </FlexWrapper>
            </Container>
        </S.StyledFooter>
    );
};

