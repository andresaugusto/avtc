import { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { avtcContext } from '../../helperFunctions/avtcContext'

import iconMicroBlading from '../../media/iconMicroBlading.png'
import iconTattoo from '../../media/iconTattoo.png'
import iconTattooCoverUp from '../../media/iconTattooCoverUp.png'
import iconTattooDesign from '../../media/iconTattooDesign.png'




//  //  //  STYLED-COMPONENTS   //  //  //

const Section = styled.section`
    perspective: 1500px;
    transform-style: preserve-3d;

    box-sizing: border-box;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    column-gap: 2vmin;
    /* transform: translateY(-15vmin); */
`
const SectionTitle = styled.div`
    width: 100vw;
    margin-bottom: 4vmin;

    /* font-family: 'New Rocker', serif; */
    font-family: 'Quantico', sans-serif;
    /* font-family: 'Hepta Slab', serif; */
    /* font-family: 'Oswald', sans-serif; */
    /* font-family: 'Six Caps', sans-serif; */
    font-size: 2vmin;
    letter-spacing: .5vmin;
    font-weight: 700;

    @media (max-width: 600px) {
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: 400;
    }
`

const ItemContainer = styled(motion.div)`
    
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;

    width: 90vw;
    /* max-width: 800px; */
    /* height: 60vmin; */
    display: flex;
    flex-flow: row wrap;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;


    /* background-color: rgba(0, 0, 0, 0.3); */
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    /* -webkit-filter: drop-shadow(0px 2px 2px #000000); */
    /* filter: drop-shadow(0px 2px 2px #000000); */

    @media (max-width: 600px) {
        /* width: 100vmin; */
    }

    
`

const Item = styled(motion.div)`
    /* height: 50vmin; */
    /* max-height: 77px; */
    flex-grow: 1;
    width: 90vw;
    /* padding: 0 10vmin; */
    display: flex;
    flex-direction: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
    /* background-color: black; */
    border-bottom: 1px white solid;

    /* backdrop-filter: invert(0%) sepia(70%) hue-rotate(155deg) blur(15px); */
    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.51) 10.87%, rgba(0, 0, 0, 0.33144) 93.74%, rgba(0, 0, 0, 0.28) 90%); */

    @media (max-width: 600px) {
        width: 90vmin;
    }
`

const ImgContainer = styled(motion.div)`
    /* width: 32vmin; */
    /* max-height: 77px; */

    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    /* background: -webkit-linear-gradient(22deg, rgba(140, 160, 160, 0)10%, rgba(180, 215, 210, .9) 17%, rgba(150, 255, 235, .55) 29.87%, rgba(140, 160, 160, 0) 90%); */
    /* background: -webkit-linear-gradient(22deg, rgba(140, 160, 160, 0)10%, rgba(255, 255, 255, .9) 17%, rgba(255, 255, 255, .65) 29.87%, rgba(255, 255, 255, 0) 90%); */
    -webkit-background-clip: content-box;

    &:hover {
        /* transform: scale(1.05); */
        /* background: -webkit-linear-gradient(22deg, rgba(140, 160, 160, 0)10%, rgba(255, 255, 255, .9) 17%, rgba(255, 255, 255, .65) 29.87%, rgba(255, 255, 255, 0) 90%); */
    }


`

const Img = styled(motion.img)`
    height: 10vmin;
    /* height: 20vmin; */
    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-filter: opacity(80%);
    filter: invert(0%) opacity(100%) brightness(1.5);
    /* filter: brightness(100%); */
    /* transform: rotateY(30deg) rotateX(40deg); */

    @media (max-width: 600px) {
        height: 44px;
        /* height: 15vmin; */
    }
`

const ItemTitle = styled.h1`

    /* background: -webkit-linear-gradient(22deg, rgba(180, 215, 210, .7) 20%, rgba(150, 235, 210, .8) 15%, rgba(150, 255, 235, .7) 29.87%, rgba(255, 255, 255, 0.9) 90%); */
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
    /* color: rgba(255, 0, 0, 1); */

    margin-bottom: 1.15vmin;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    font-family: 'New Rocker', serif;
    /* font-family: 'Quantico', sans-serif; */
    /* font-family: 'Hepta Slab', serif; */
    /* font-family: 'Oswald', sans-serif; */
    /* font-family: 'Six Caps', sans-serif; */
    font-size: 1.65vmin;
    letter-spacing: .5vmin;
    font-weight: 400;
    text-transform: uppercase;

    @media (max-width: 600px) {
        font-size: 12px;
        letter-spacing: 2px;
    }
`

//  //  //  VARIABLES   //  //  //

const services = [
    // [iconTattoo, 'Tattoo'],
    // [iconTattooDesign, 'Tattoo Design'],
    // [iconTattooCoverUp, 'Tattoo Cover-Up'],
    // [iconMicroBlading, 'Micro Blading'],
    [iconTattoo, 'Tats'],
    [iconTattooDesign, 'Designs'],
    [iconTattooCoverUp, 'Cover-Ups'],
    [iconMicroBlading, 'Micro Blading']
]

const ItemContainerAnimation = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
        delayChildren: 1.3,
        staggerChildren: 0.5
        }
    }
};
  
const ItemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


//  //  //  FUNCTION    //  //  //

export default function Services() {

    return (
        <>
            <Section id='services'>
                <SectionTitle>S E R V I C E S</SectionTitle>
                <ItemContainer
                    variants={ItemContainerAnimation}
                    initial="hidden"
                    animate="visible"
                    >
                        {services.map((i) => (
                        <Item
                            key={i[0]}
                            variants={ItemAnimation}
                            whileHover={{ transform: 1.05 }}
                            >
                            <ItemTitle>{i[1]}</ItemTitle>
                            <ImgContainer><Img src={i[0]} alt={`${i[0]}Icon`} id={`${i[0]}Icon`}/></ImgContainer>
                        </Item>
                        ))}
                </ItemContainer>
            </Section>
        </>
    )
}