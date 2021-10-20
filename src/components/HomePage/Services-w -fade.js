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
`
const SectionTitle = styled.div`
    width: 50vmin;

    @media (max-width: 600px) {
        width: 90vmin;
    }
`

const ItemContainer = styled(motion.div)`
    
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;

    /* width: 60vmin; */
    /* max-width: 800px; */
    /* height: 60vmin; */
    display: flex;
    flex-flow: row wrap;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;


    /* background-color: rgba(0, 0, 0, 0.3); */
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);

    @media (max-width: 600px) {
        width: 100vmin;
    }

    
`

const Item = styled(motion.div)`
    height: 18vmin;
    max-height: 77px;
    flex-grow: 1;
    /* max-width: 777px; */
    padding: 0 10vmin;
    display: flex;
    justify-content: space-between;
    align-items: bottom;
    flex-direction: row nowrap;
    /* background-color: black; */

    /* backdrop-filter: invert(0%) sepia(70%) hue-rotate(155deg) blur(15px); */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.51) 10.87%, rgba(0, 0, 0, 0.33144) 93.74%, rgba(0, 0, 0, 0.28) 90%);

    @media (max-width: 600px) {
        width: 90vmin;
    }
`

const ImgContainer = styled(motion.div)`
    height: 18vmin;
    width: 32vmin;
    max-height: 77px;

    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    background: -webkit-linear-gradient(22deg, rgba(140, 160, 160, 0)10%, rgba(180, 215, 210, .9) 17%, rgba(150, 255, 235, .55) 29.87%, rgba(140, 160, 160, 0) 90%);
    -webkit-background-clip: content-box;

    &:hover {
        /* transform: scale(1.05); */
        background: -webkit-linear-gradient(22deg, rgba(140, 160, 160, 0)10%, rgba(255, 255, 255, .9) 17%, rgba(255, 255, 255, .65) 29.87%, rgba(255, 255, 255, 0) 90%);
    }


`

const Img = styled(motion.img)`
    height: 20vmin;
    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-filter: opacity(80%);
    filter: invert(100%) opacity(100%);
    transform: rotateY(30deg) rotateX(40deg);

    @media (max-width: 600px) {
        /* height: 15vmin; */
    }
`

const ItemTitle = styled.h1`
    font-size: 20px;

    background: -webkit-linear-gradient(22deg, rgba(180, 215, 210, .7) 20%, rgba(150, 235, 210, .8) 15%, rgba(150, 255, 235, .7) 29.87%, rgba(255, 255, 255, 0.9) 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* color: rgba(255, 0, 0, 1); */

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        font-size: 11.5px;
    }
`

//  //  //  VARIABLES   //  //  //

const services = [
    [iconTattoo, 'Tattoo'],
    [iconTattooDesign, 'Tattoo Design'],
    [iconTattooCoverUp, 'Tattoo Cover-Up'],
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
            <h1 id='servicesTitle'>WHAT WE DO</h1>
            <Section id='services'>
                {/* <dSectionTitle>services</dSectionTitle> */}
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