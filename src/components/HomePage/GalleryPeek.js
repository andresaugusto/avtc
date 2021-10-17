import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { PieceContext, PieceModalToggleContext } from '../../helperFunctions/avtcContext'
import { DBURL } from '../../helperFunctions/config'


//  //  //  STYLED-COMPONENTS   //  //  //

const GalleryPeekSection = styled.section`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: invert(100%) sepia(50%) hue-rotate(335deg);
`

const PieceCardContainer = styled(motion.div)`
    
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding: 4vmin .5vmin;

    display: flex;
    flex-flow: row wrap;
    grid-gap: .5vmin;
    justify-content: stretch;
    align-items: stretch;

    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);
`

const PieceCard = styled(motion.div)`

    box-sizing: border-box;
    min-width: 18vw;
    min-height: 40vh;
    overflow: hidden;

    /* display: flex;
    align-items: center;
    justify-content: center; */
    flex-grow: 1;

    background-color: rgba(0, 0, 0, 0.5);
	background-position: 50% 50%;
	background-size: cover;
    filter: saturate(25%);
    /* transition: .05s ease-in; */

    &:hover {
        filter: sepia(25%) saturate(50%) contrast(70%) brightness(140%);
    }

`

const PieceCardPlaceholder = styled(motion.div)`

    box-sizing: border-box;
    min-width: 18vw;
    min-height: 40vh;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-grow: 1;

    background-color: black;

    &:hover {
        background-color: white;
        color: black;
    }
`

const GalleryLink = styled(motion.div)`

    width: 40vw;
    /* height: 30vmin; */

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    
    /* color: black; */
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

    @media (max-width: 600px) {
        font-size: 11px;
        letter-spacing: 2px;
        font-weight: 400;
    }
`

// const Img = styled(motion.img)`
//     filter: sepia(30%) hue-rotate(335deg);
//     display: block;

//     width: inherit;
//     height: inherit;
//     max-height: 500px;

//     margin: auto;
// 	padding: 0;
//     /* transform: translate(-50%, -50%); */
//     /* position: relative; */
// 	/* left: 50%; */
// 	/* top: 50%; */

//     /* justify-content: center; */

//     object-fit: cover;
//     -webkit-filter: grayscale(0%);
//     filter: grayscale(0%);
// `

const ItemTitle = styled.h1`
    font-size: 15px;
    width: 100%;
`

const PieceCardSection = styled(motion.div)`

    /* width: 33vmin; */
    /* height: 33vmin; */

    overflow: hidden;
    box-sizing: content-box;
    /* display: flex;
    align-items: center;
    justify-content: center; */

    /* background-color: rgba(0, 0, 0, 0.3); */
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
`


//  //  //  VARIABLES   //  //  //

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

export default function GalleryPeek() {


    //  //  //  DATA FETCHING FROM DB   //  //  //
  
    useEffect(() => {fetchGallery()}, []);

    const [ gallery, setGallery ] = useState([]);
  
    const fetchGallery = async () => {
      
      const gallData = await fetch(`${DBURL}/gallery`)
      const gall = await gallData.json();

      setGallery(gall);
      
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
            <GalleryPeekSection>
                <PieceCardContainer
                    variants={ItemContainerAnimation}
                    initial="hidden"
                    animate="visible"
                    >
                        {gallery.slice(0,9).map((i) => (
                            <PieceCard
                                key={i.slug}
                                variants={ItemAnimation}
                                onClick={() => fetchPiece(i.slug)}
                                style={{ backgroundImage: `url(${i.art_image})`}}
                                >
                                    <PieceCardSection>
                                        {/* <Img
                                            src={i.art_image}
                                            alt={i.title}
                                            id={i.slug}
                                        
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                            /> */}
                                    </PieceCardSection>                          
                            </PieceCard>
                        ))}
                        <PieceCardPlaceholder 
                            variants={ItemAnimation}
                            >
                            <Link to='/gallery'>
                                <GalleryLink
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    >
                                        VIEW FULL GALLERY
                                </GalleryLink>
                            </Link>
                        </PieceCardPlaceholder>
                </PieceCardContainer>
            </GalleryPeekSection>
        </>
    )
}