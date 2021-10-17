import { useState } from 'react'
import { findByLabelText } from "@testing-library/dom"
import Merch from "../../media/SHOP_IMG_1.png"

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
        <div style={{
                    zAxis: '-10',
                    boxSizing: 'border-box',
                    height: '100vh',
                    width: '100vw',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
        }}>
            <div id='merchandisePeek' className='home-page-divs'
                style={{
                    zAxis: '-10',
                    boxSizing: 'border-box',
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                    position: 'absolute',
                    backgroundColor: 'black',
                    backgroundImage: `url(${Merch})`,
                    // backgroundPosition: `50% ${bGYPosition}%`,
                    backgroundPosition: '50% 50%',
                    backgroundSize: 'cover',
                    filter: 'saturate(0%) blur(.5vmin) invert(0%)',
                    color: 'white',
                }}
                >
            </div>
            <div style={{
                position: 'relative',
                zAxis: '+10',
            }}>
                <h1 id='merchandisePeekTitle'>SHOP MERCH COMING SOON</h1>
                {/* <div id='merchandisePeekGrid'>
                    <div id='linkToMerchandisePage'>
                        <h5 className='visit-our-store-button'>VISIT<br/>OUR<br/>STORE</h5>
                    </div>
                    <img alt='imgName' id='merchandisePeekImg' className='merchandise-peek-img'/>
                </div> */}
            </div>
        </div>
    )
}