import { useState } from 'react'
import { findByLabelText } from "@testing-library/dom"

import styled from 'styled-components'
import Merch from "../../media/SHOP_IMG_1.png"

const MerchPeekContainer = styled.div`
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
const MerchPeekBackground = styled.div`
    box-sizing: border-box;
    height: 66%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    background-image: url(${Merch});
    background-position: 50% 50%;
    background-size: cover;
    filter: saturate(0%) blur(.3vmin) invert(00%);
    background-color: black;

`
const MerchPeekTitle = styled.div`
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
    return (
        <MerchPeekContainer>
            <MerchPeekBackground/>
            <div 
                style={{
                position: 'relative',
            }}>
                <MerchPeekTitle id='merchandisePeekTitle'>
                    SHOP MERCH COMING SOON
                </MerchPeekTitle>
            </div>
        </MerchPeekContainer>
    )
}