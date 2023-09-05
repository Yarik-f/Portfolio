import React from 'react';
import styled from "styled-components";

export const About = () => {
    return (
        <StyledAbout>
            <AboutTitle>About me</AboutTitle>
            <AboutText>
                Hi, I'm Denis – UX/UI designer from Minsk.
                I'm interested in design and everything connected with it.

                I'm studying at courses "Web and mobile design
                interfaces" in IT-Academy.

                Ready to implement excellent projects
                with wonderful people.
            </AboutText>
        </StyledAbout>
    );
};

const StyledAbout = styled.section``
const AboutTitle = styled.h2``
const AboutText = styled.p``
