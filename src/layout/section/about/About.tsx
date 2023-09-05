import React from 'react';
import styled from "styled-components";

export const About = () => {
    return (
        <StyledAbout>
            <AboutTitle>About me</AboutTitle>
            <AboutDescription>
                <AboutText>
                    Hi, I'm Denis – UX/UI designer from Minsk.
                    I'm interested in design and everything connected with it.
                </AboutText>
                <AboutText>
                    I'm studying at courses "Web and mobile design
                    interfaces" in IT-Academy.
                </AboutText>
                <AboutText>
                    Ready to implement excellent projects
                    with wonderful people.
                </AboutText>
            </AboutDescription>

        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  background-color: #F6F6F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
`
const AboutDescription = styled.section`
    padding-bottom: 105px;
`
const AboutTitle = styled.h2`
  padding-top: 120px;
  font-size: 32px;
  margin-bottom: 17px;
`
const AboutText = styled.p`
  max-width: 485px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`
