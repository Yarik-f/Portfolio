import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>About me</SectionTitle>
                    <AboutDescription>
                        <AboutText>
                            Hi, I'm Yaroslav – Frontend Developer from Minsk.
                            I'm interested in design and everything connected with it.
                        </AboutText>
                        <AboutText>
                            I'm studying at courses "Frontend Developer" in IT-Incubator.
                        </AboutText>
                        <AboutText>
                            Ready to implement excellent projects
                            with wonderful people.
                        </AboutText>
                    </AboutDescription>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
`
const AboutDescription = styled.section`
    padding-bottom: 105px;
`
const AboutText = styled.p`
  max-width: 485px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`
