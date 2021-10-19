import { useState } from 'react'
import { findByLabelText } from "@testing-library/dom"

import styled from 'styled-components'
import Merch from "../../media/SHOP_IMG_1.png"

const SectionContainer = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`
const SectionBackground = styled.div`
    box-sizing: border-box;
    height: 50%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    background-position: 50% 50%;
    background-size: cover;
    filter: saturate(0%) blur(.3vmin) invert(00%);
    background-color: black;

`
const SectionTitle = styled.div`
    z-index: +1;

    color: white;
    font-family: 'New Rocker', serif;
    /* font-family: 'Quantico', sans-serif; */
    /* font-family: 'Hepta Slab', serif; */
    /* font-family: 'Oswald', sans-serif; */
    /* font-family: 'Six Caps', sans-serif; */
    font-size: 2vmin;
    letter-spacing: 1vmin;
    font-weight: 700;

    @media (max-width: 600px) {
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: 400;
    }
`

export default function MerchandisePeek() {

    // const [bGYPosition, setBGYPosition] = useState((window.pageYOffset)/(document.body.offsetHeight))
    // const Body =  window;
    // Body.onscroll(setBGYPosition((window.pageYOffset)/(document.body.offsetHeight)))

    // window.addEventListener('scroll', (e) => {
    //     setBGYPosition((window.pageYOffset)/(document.body.offsetHeight))
    //     console.log(bGYPosition)
    // })

    // console.log(document.getElementById('merchandisePeek').getBoundingClientRect())

    // Get the top, left coordinates of the element
    // const merchWindow = document.getElementById('merchandisePeek').getBoundingClientRect();
    // console.log(merchWindow)
    
    // Add the scroll postion to get the full distance from the element
    // to the top, left sides of the document
    // const top = merchWindow.top + document.body.scrollTop;
    // const left = merchWindow.left + document.body.scrollLeft;
    // console.log(top)


    return (
        <SectionContainer>
            <SectionBackground
                style={{
                    backgroundImage: `url(${Merch})`
                }}>
            </SectionBackground>
            <div 
                style={{
                position: 'relative',
            }}>
                <SectionTitle id='merchandisePeekTitle'>
                    SHOP MERCH COMING SOON
                </SectionTitle>
                {/* <div id='merchandisePeekGrid'>
                    <div id='linkToMerchandisePage'>
                        <h5 className='visit-our-store-button'>VISIT<br/>OUR<br/>STORE</h5>
                    </div>
                    <img alt='imgName' id='merchandisePeekImg' className='merchandise-peek-img'/>
                </div> */}
            </div>
        </SectionContainer>
    )
}