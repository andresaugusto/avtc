import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import { PieceContext, PieceModalToggleContext } from '../helperFunctions/avtcContext'


//  //  //  STYLED COMPONENTS   //  //  //

const PieceModalContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    top: 0;
    position: fixed;
    /* background: rgba(0, 0, 0, 0.7); */
    backdrop-filter: blur(15px) contrast(30%) grayscale(0%) brightness(20%);
`

const PieceModalSubContainer = styled(motion.div)`
    height: 100%;
    width: 100%;

    box-sizing: border-box;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: white; */
	backdrop-filter: invert(100%) sepia(30%) hue-rotate(335deg);
    border-radius: .5vmin;
`

const Img = styled(motion.img)`
    max-width: 90vmin;
    max-height: 90vmin;
    overflow: hidden;
    border-radius: .5vmin;
    filter: contrast(100%) grayscale(20%) brightness(120%);
`
const PieceCardInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px white solid;
`

const PieceTitle = styled(motion.h1)`
    margin-top: 4vmin;

  color: white;
  font-family: 'New Rocker', serif;
  /* font-family: 'Quantico', sans-serif; */
  /* font-family: 'Hepta Slab', serif; */
  /* font-family: 'Oswald', sans-serif; */
  /* font-family: 'Six Caps', sans-serif; */
  font-size: 2vmin;
  letter-spacing: .5vmin;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 600px) {
      font-size: 14px;
      letter-spacing: 2px;
      font-weight: 400;
  }
`

const PieceArtist = styled(motion.h1)`
  width: inherit;
  padding: .5vmin 1vmin;
  background-color: transparent;
  border: 2px solid;
  border-radius: .5vmin;

  color: white;
  /* font-family: 'New Rocker', serif; */
  font-family: 'Quantico', sans-serif;
  /* font-family: 'Hepta Slab', serif; */
  /* font-family: 'Oswald', sans-serif; */
  /* font-family: 'Six Caps', sans-serif; */
  font-size: 1.25vmin;
  letter-spacing: .5vmin;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 600px) {
      font-size: 11px;
      letter-spacing: 2px;
      font-weight: 400;
  }
    /* -webkit-filter: drop-shadow(0px 2px 2px #000000); */
    /* filter: drop-shadow(0px 2px 2px #000000); */
`

//  //  //  VARIABLES   //  //  //
const MainContainerAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1
    }
}; 
const PieceContainerAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

//  //  //  FUNCTION    //  //  //
export default function PieceModal() {

    //  //  //  PIECE SETTINGS    //  //  //
    const { piece } = useContext(PieceContext)
    const { showPiece, setShowPiece } = useContext(PieceModalToggleContext)

    return (
        <>
            <AnimatePresence>
                {showPiece ?
                    <PieceModalContainer
                        variants={MainContainerAnimation}
                        transition={{ duration: .2 }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={() => setShowPiece(!showPiece)}
                    >
                        <PieceModalSubContainer
                            variants={PieceContainerAnimation}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <Img
                                src={piece.img}
                                alt={piece.title}
                            />
                            <PieceTitle
                            >
                                {piece.title}
                            </PieceTitle>
                            <Link key={piece.artistSlug} to={`/artists/${piece.artistSlug}`}>
                                <PieceArtist
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.1 }}
                                >
                                        View {piece.artistName}'s Profile
                                </PieceArtist>
                            </Link>
                        </PieceModalSubContainer>
                    </PieceModalContainer>
                : null}
            </AnimatePresence>
        </>
    )
}