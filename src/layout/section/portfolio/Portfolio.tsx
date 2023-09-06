import React from 'react';
import styled from "styled-components";
import firstProj from './../../../assets/images/proj-1.png'
import secondProj from './../../../assets/images/proj-2.png'
import thirdProj from './../../../assets/images/proj-3.png'
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "../../../components/tabMenu/TabMenu";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";

const items = ['All', 'landing page', 'React', 'spa']
export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>Portfolio</SectionTitle>
                    <TabMenu menuItems={items}/>
                    <PortfolioList>
                        <PortfolioItem>
                            <ImageWrapper>
                                <PortfolioImage src={firstProj}/>
                                <Button>View Project</Button>
                            </ImageWrapper>
                        </PortfolioItem>
                        <PortfolioItem>
                            <ImageWrapper>
                                <PortfolioImage src={secondProj}/>
                                <Button>View Project</Button>
                            </ImageWrapper>
                        </PortfolioItem>
                        <PortfolioItem>
                            <ImageWrapper>
                                <PortfolioImage src={thirdProj}/>
                                <Button>View Project</Button>
                            </ImageWrapper>
                        </PortfolioItem>
                        <PortfolioItem>
                            <ImageWrapper>
                                <PortfolioImage src={thirdProj}/>
                                <Button>View Project</Button>
                            </ImageWrapper>
                        </PortfolioItem>
                        <PortfolioItem>
                            <ImageWrapper>
                                <PortfolioImage src={firstProj}/>
                                <Button>View Project</Button>
                            </ImageWrapper>
                        </PortfolioItem>
                        <PortfolioItem>
                            <ImageWrapper>
                                <PortfolioImage src={secondProj}/>
                                <Button>View Project</Button>
                            </ImageWrapper>
                        </PortfolioItem>
                    </PortfolioList>
                </FlexWrapper>
            </Container>
        </StyledPortfolio>
    );
};
const StyledPortfolio = styled.section`
`
const PortfolioList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 45px;
`
const PortfolioItem = styled.li`
  display: flex;
  align-items: center;

`
const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 4px;
      background-color: rgba(110, 107, 107, 0.1);
      backdrop-filter: blur(2px);
      border-radius: 10px;
    }

    ${Button}{
      opacity: 1;
      background-color: #070707;
      color: ${theme.colors.fontAnother};
    }
  }

  ${Button}{
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

`
const PortfolioImage = styled.img`
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(61, 59, 59, 0.32);
`