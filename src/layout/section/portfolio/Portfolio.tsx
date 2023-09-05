import React from 'react';
import styled from "styled-components";
import firstProj from './../../../assets/images/proj-1.png'
import secondProj from './../../../assets/images/proj-2.png'
import thirdProj from './../../../assets/images/proj-3.png'

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem>
                    <PortfolioImage src={firstProj}/>
                    <PortfolioLink href={'#'}>Online fashion store - Homepage</PortfolioLink>
                </PortfolioItem>
                <PortfolioItem>
                    <PortfolioImage src={secondProj}/>
                    <PortfolioLink href={'#'}>Reebok Store - Concept</PortfolioLink>
                </PortfolioItem>
                <PortfolioItem>
                    <PortfolioImage src={thirdProj}/>
                    <PortfolioLink href={'#'}>Braun Landing Page - Concept</PortfolioLink>
                </PortfolioItem>
            </PortfolioList>
        </StyledPortfolio>
    );
};
const StyledPortfolio = styled.section`
  padding-top: 115px;
  background-color: #F6F6F6;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PortfolioTitle = styled.h2`
  font-size: 34px;
  margin-bottom: 45px;
`
const PortfolioList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PortfolioItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PortfolioImage = styled.img`
  margin-bottom: 45px;
`
const PortfolioLink = styled.a`
  margin-bottom: 100px;
  text-decoration: underline;
`