import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { PieceContext, PieceModalToggleContext } from '../../helperFunctions/avtcContext'
import { DBURL } from '../../helperFunctions/config'


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

    /* width: 100vmin;
    height: 100vmin;
    max-width: 1000px;
    max-height: 1000px; */
    display: grid;
    grid-template-columns: repeat(3, 33%);
    /* grid-template-rows: repeat(2, 1fr); */
	/* grid-template-columns: repeat(auto-fill, minmax(26vmin, 1fr)); */
    justify-items: stretch;
    grid-gap: .5vmin;
    /* padding: 1vmin; */
    /* background: rgba(255, 255, 255, 0.07); */
    /* background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.421), rgba(50, 50, 50, 0.421), rgba(255, 255, 255, 0.171), rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.171), rgba(50, 50, 50, 0.421), rgba(0, 0, 0, 0.421), rgba(0, 0, 0, 0)); */
    /* border-radius: 30px; */
    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);
`

const Item = styled(motion.li)`
    /* width: 25.14433811802233vmin; */
    /* max-width: 315.31px; */
    /* width: 25.14433811802233vmin; */
    /* max-height: 315.31px; */

    width: 33vmin;
    height: 33vmin;
    max-width: 330px;
    max-height: 330px;

    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;

`

const Img = styled(motion.img)`
    display: block;

    width: inherit;
    height: inherit;
    max-height: 500px;

    margin: auto;
	padding: 0;
    /* transform: translate(-50%, -50%); */
    /* position: relative; */
	/* left: 50%; */
	/* top: 50%; */

    /* justify-content: center; */

    object-fit: cover;
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
`

const ItemTitle = styled.h1`
    font-size: 15px;
    width: 100%;
`

const Li = styled(motion.li)`

    width: 33vmin;
    height: 33vmin;
    max-width: 330px;
    max-height: 330px;

    overflow: hidden;
    display: grid;
    align-items: center;
    justify-content: center;

    /* background-color: rgba(0, 0, 0, 0.3); */
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    box-sizing: content-box;
`
const LiWithBorder = styled(motion.li)`

    width: 33vmin;
    height: 33vmin;
    max-width: 330px;
    max-height: 330px;

    overflow: hidden;
    display: grid;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-sizing: content-box;
`

const P = styled(motion.p)`
    color: rgba(255, 255, 255, 0.7);
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
            <Section>
                <ItemContainer
                    variants={ItemContainerAnimation}
                    initial="hidden"
                    animate="visible"
                    >
                        {gallery.slice(0,4).map((i) => (
                            <Item
                                key={i.slug}
                                variants={ItemAnimation}
                                onClick={() => fetchPiece(i.slug)}
                                >
                                    <Li>
                                        <Img
                                            src={i.art_image}
                                            alt={i.title}
                                            id={i.slug}
                                        
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                            />
                                    </Li>                          
                            </Item>
                        ))}
                        <LiWithBorder 
                            variants={ItemAnimation}
                            >
                            <Link to='/gallery'>
                                <P
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    >
                                        VIEW FULL GALLERY
                                </P>
                            </Link>
                        </LiWithBorder>
                        {gallery.slice(5,9).map((i) => (
                            <Item
                                key={i.slug}
                                variants={ItemAnimation}
                                onClick={() => fetchPiece(i.slug)}
                                >
                                    <Li>
                                        <Img
                                            src={i.art_image}
                                            alt={i.title}
                                            id={i.slug}
                                        
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                            />
                                    </Li>                          
                            </Item>
                        ))}
                </ItemContainer>
            </Section>
        </>
    )
}