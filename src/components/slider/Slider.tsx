import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {Skill} from "../../layout/section/skills/skill/Skill";
import {Star} from "../../layout/section/skills/skill/star/Star";
import './../../styles/slider.css';

const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 3},
};

type SliderPropsType = {
    skillId: string
    skillTitle: string
    starId: string
    starTwo: string
}
const Slide = (props: SliderPropsType) => {
    return (
        <SliderItem>
            <Skill
                iconId={props.skillId}
                title={props.skillTitle}/>
            <StarList>
                <Star iconId={props.starId}/>
                <Star iconId={props.starId}/>
                <Star iconId={props.starId}/>
                <Star iconId={props.starId}/>
                <Star iconId={props.starTwo}/>
            </StarList>
        </SliderItem>
    );
}

const items = [
    <Slide
        skillId={'react'}
        skillTitle={'ReactJS'}
        starId={'star'}
        starTwo={'starTwo'}
    />
    ,
    <Slide
        skillId={'typescript'}
        skillTitle={'TypeScript'}
        starId={'star'}
        starTwo={'starTwo'}/>,
    <Slide
        skillId={'js'}
        skillTitle={'JavaScript'}
        starId={'star'}
        starTwo={'starTwo'}/>,
    <Slide
        skillId={'css'}
        skillTitle={'CSS'}
        starId={'star'}
        starTwo={'star'}/>,
    <Slide
        skillId={'html'}
        skillTitle={'HTML'}
        starId={'star'}
        starTwo={'starTwo'}/>,
    <Slide
        skillId={'figma'}
        skillTitle={'Figma'}
        starId={'star'}
        starTwo={'star'}/>,
    <Slide
        skillId={'git'}
        skillTitle={'GIT'}
        starId={'star'}
        starTwo={'starTwo'}/>,
    <Slide
        skillId={'styled'}
        skillTitle={'StyledComponents'}
        starId={'star'}
        starTwo={'star'}/>,
];

export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
        />
    </StyledSlider>
);


const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  max-width: 800px;
  width: 100%;
`
const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StarList = styled.ul`
  display: flex;
  gap: 10px;
`