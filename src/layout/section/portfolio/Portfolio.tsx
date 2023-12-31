import React, {useState} from 'react';
import firstProj from './../../../assets/images/proj-1.png'
import secondProj from './../../../assets/images/proj-2.png'
import thirdProj from './../../../assets/images/proj-3.png'
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabsMenu, StatusType} from "../../../components/tabsMenu/TabsMenu";
import {Work} from "./work/Work";
import {AnimatePresence, motion} from "framer-motion"
import {S} from './Portfolio_Styles'

const tabsItems: Array<{ title: string, status: StatusType }> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'landing page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'spa',
        status: 'spa'
    },
]
const worksData = [
    {
        src: firstProj,
        type: 'react',
        id: 1
    },
    {
        src: secondProj,
        type: 'landing',
        id: 2
    },
    {
        src: thirdProj,
        type: 'spa',
        id: 3
    },
    {
        src: thirdProj,
        type: 'react',
        id: 4
    },
    {
        src: firstProj,
        type: 'landing',
        id: 5
    },
    {
        src: secondProj,
        type: 'react',
        id: 6
    }
]
export const Portfolio: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredWorks = worksData

    if (currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter(work => work.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = worksData.filter(work => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value: 'all' | 'landing' | 'react' | 'spa') {
        setCurrentFilterStatus(value)
    }


    return (
        <S.StyledPortfolio id={'portfolio'}>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>Portfolio</SectionTitle>
                    <TabsMenu
                        tabsItems={tabsItems}
                        changeFilterStatus={changeFilterStatus}
                        currentFilterStatus={currentFilterStatus}/>
                    <S.PortfolioItem>
                        <AnimatePresence>
                            {filteredWorks.map(work => {
                                return (
                                    <motion.div
                                        layout
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        key={work.id}
                                    >
                                        <Work
                                            src={work.src}
                                            key={work.id}/>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </S.PortfolioItem>
                </FlexWrapper>
            </Container>
        </S.StyledPortfolio>
    );
};

