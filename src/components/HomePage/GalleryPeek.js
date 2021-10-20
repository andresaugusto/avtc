import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { PieceContext, PieceModalToggleContext } from '../../helperFunctions/avtcContext'
import { DBURL } from '../../helperFunctions/config'

import LoadingGif from '../../media/LoadingGif.gif'

//  //  //  STYLED-COMPONENTS   //  //  //
const GalleryPeekContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SectionTitle = styled.div`
    width: 100vw;
    margin: 4vmin 0;

    color: black;
    /* font-family: 'New Rocker', serif; */
    font-family: 'Quantico', sans-serif;
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
const PieceCardsContainer = styled(motion.div)`
    
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding: 0vmin .5vmin 10vw .5vmin;

    display: flex;
    flex-flow: row wrap;
    grid-gap: .5vmin;
    justify-content: stretch;
    align-items: stretch;

    /* -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000); */
`
const PieceCard = styled(motion.div)`
    box-sizing: border-box;
    min-width: 18vw;
    min-height: 40vh;
    overflow: hidden;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    background-color: black;
	background-position: 50% 50%;
	background-size: cover;
    filter: saturate(25%);
    transition: 1s ease-in;
    border: black 1px solid;
`
const PieceCardBG = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    background-position: 50% 50%;
    background-size: cover;
    /* background-image: ${LoadingGif}; */

    &:hover {
        background-color: black;
        filter: saturate(00%) contrast(140%) brightness(30%);
    }
`
const PieceCardTitle = styled.div`
    /* z-index: +1; */
	/* min-width: 18vw; */
    width: 40vw;

	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;

	color: white;
    /* font-family: 'New Rocker', serif; */
    font-family: 'Quantico', sans-serif;
    /* font-family: 'Hepta Slab', serif; */
    /* font-family: 'Oswald', sans-serif; */
    /* font-family: 'Six Caps', sans-serif; */
    font-size: 1.5vmin;
    letter-spacing: .5vmin;
    font-weight: 700;
    text-align: center;
    transform: rotateZ(90deg);
    text-transform: uppercase;

    pointer-events: none;

    @media (max-width: 600px) {
        font-size: 11px;
        letter-spacing: 2px;
        font-weight: 400;
    }
`

//  //  //  VARIABLES   //  //  //
const ItemContainerAnimation = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
        delayChildren: 1.3,
        staggerChildren: 0.5
        }
    }
};
const ItemAnimation = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1
    }
};


//  //  //  FUNCTION    //  //  //
export default function GalleryPeek() {

    //  //  //  DATA FETCHING FROM DB   //  //  //
    
    useEffect(() => {fetchGallery()}, []);
    const [ gallery, setGallery ] = useState([LoadingGif]);
    const [ pieceCardBGImages, setPieceCardBGImages ] = useState((Array.from(Array(9).keys()).map((i)=>i = [i, LoadingGif])));
    // console.log(pieceCardBGImages)
    const fetchGallery = async () => {
      
      const gallData = await fetch(`${DBURL}/gallery`)
      const gall = await gallData.json();

      setGallery(gall);
      setPieceCardBGImages((Array.from(gall.slice(0,9).map((i)=> i.value = [i.slug, i.art_image]))))
    //   console.log(pieceCardBGImages)
    
    }

    //  //  //  PIECE SETTINGS    //  //  //
    const { setPiece } = useContext(PieceContext)
    const { showPiece, setShowPiece } = useContext(PieceModalToggleContext)
    const fetchPiece = async (i) => {
      
        const picData = await fetch(`${DBURL}/gallery/${i}`)
        const pic = await picData.json();

        setPiece(
            {
                title: pic.title,
                slug: pic.slug,
                img: pic.art_image,
                artistSlug: pic.artist_id,
                artistName: pic.artist_name
            }
        )

        setShowPiece(!showPiece)
    }

    //  //  //  FUNCTIONS    //  //  //
    return (
        <>
            <SectionTitle>PIECES</SectionTitle>
            <GalleryPeekContainer>
                <PieceCardsContainer
                    // variants={ItemContainerAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    {/* {gallery[0] === LoadingGif ? ( */}
                        {/* <> */}
                            {pieceCardBGImages.map((i) => (
                                <PieceCard
                                    key={`PieceCard${i[0]}`}
                                    onClick={gallery[0]===LoadingGif ? (null) : (() => fetchPiece(i[0]))}
                                    // variants={ItemAnimation}
                                >
                                    <PieceCardBG
                                        style={{
                                            // backgroundImage: (gallery[0]===LoadingGif ? (`url(${LoadingGif})`) : (`url(${i.art_image})`),
                                            backgroundImage: `url(${i[1]})`
                                        }}
                                    />
                                    {gallery[0]===LoadingGif ? (
                                        <PieceCardTitle>
                                            LOADING
                                        </PieceCardTitle>
                                    ) : (
                                        null
                                    )}
                                </PieceCard>                               
                            ))}
                            <PieceCard
                                key="link-to-gallery"
                                // variants={ItemAnimation}
                            >
                                <Link to='/gallery'
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                >
                                    <PieceCardTitle>
                                        VIEW FULL GALLERY
                                    </PieceCardTitle>
                                </Link>
                            </PieceCard>
                        {/* </> */}
                    {/* ) : (
                        <>
                            {gallery.slice(0,9).map((i) => (
                                <PieceCard
                                    onClick={() => fetchPiece(i.slug)}
                                    key={i.slug}
                                    variants={ItemAnimation}
                                >
                                    <PieceCardBG
                                        style={{
                                            backgroundImage: `url(${i.art_image})`
                                        }}
                                    >
                                    </PieceCardBG>
                                </PieceCard>
                            ))}
                            <PieceCard
                                key="link-to-gallery"
                                variants={ItemAnimation}
                            >
                                <Link to='/gallery'
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                >
                                    <PieceCardTitle>
                                        VIEW FULL GALLERY
                                    </PieceCardTitle>
                                </Link>
                            </PieceCard>
                        </>
                    )} */}
                </PieceCardsContainer>
            </GalleryPeekContainer>
        </>
    )
}