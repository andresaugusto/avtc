import { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { avtcContext } from '../../helperFunctions/avtcContext'

import iconMicroBlading from '../../images/iconMicroBlading.png'
import iconTattoo from '../../images/iconTattoo.png'
import iconTattooCoverUp from '../../images/iconTattooCoverUp.png'
import iconTattooDesign from '../../images/iconTattooDesign.png'




//  //  //  STYLED-COMPONENTS   //  //  //

const Section = styled.section`
    overflow: hidden;
    padding: 0;
    margin: 3vmin;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ItemContainer = styled(motion.ul)`
    
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;

    width: 100vmin;
    /* height: 17.643vmin; */
    /* height: 21.007vmin; */
    /* height: 43vmin; */
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(4, 23.5%);
    justify-content: center;
    /* grid-template-rows: repeat(2, 1fr); */
	/* grid-template-columns: repeat(auto-fill, minmax(26vmin, 1fr)); */
    align-items: stretch;
    /* grid-gap: 1vmin; */
    padding: 2vmin;
    /* background: rgba(255, 255, 255, 0.07); */
    
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.3);
    /* background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.421), rgba(50, 50, 50, 0.421), rgba(255, 255, 255, 0.171), rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.171), rgba(50, 50, 50, 0.421), rgba(0, 0, 0, 0.421), rgba(0, 0, 0, 0)); */
    /* border-radius: 30px; */
    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);
`

const Item = styled(motion.li)`
    /* height: 21.007vmin; */
    /* background-color: pink; */
    overflow: hidden;

    display: grid;
    justify-items: center;
    align-items: center;
`

const Img = styled(motion.img)`
    height: 70%;
    max-height: 14vmin;

    -webkit-filter: opacity(80%);
    filter: opacity(80%);
`

const ItemTitle = styled.h1`
    font-size: 15px;
    color: rgba(255, 255, 255, 0.7);
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
                <div>
                {/* <h1 id='servicesTitle'>WHAT WE DO</h1> */}
                <Section id='services'>
                    <ItemContainer
                        variants={ItemContainerAnimation}
                        initial="hidden"
                        animate="visible"
                        >
                            {services.map((i) => (
                            <Item
                                key={i[0]}
                                variants={ItemAnimation}
                                // whileHover={{ scale: 1.05 }}
                                >
                                <Img src={i[0]} alt='tattooIcon' id='tattooIcon'/>
                                <ItemTitle>{i[1]}</ItemTitle>
                            </Item>
                            ))}
                    </ItemContainer>
                </Section>
            </div>
        </>
    )
}