import { useState, useEffect, useContext, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Frame, Scroll, useCycle } from 'framer'
import { motion } from "framer-motion";
import styled from "styled-components";

import ArtistProfile from "./components/ArtistProfile";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PieceModal from "./components/PieceModal";

import {
  PieceContext,
  PieceModalToggleContext,
} from "./helperFunctions/avtcContext";
import { DBURL } from "./helperFunctions/config";

import main_bg_img from "./media/BGImg.png";
import main_bg_video_mp4 from "./media/BGVideo/ink_in_the_skin-tatoo-reel-1080p.mp4";
import main_bg_video_webm from "./media/BGVideo/ink_in_the_skin-tatoo-reel-1080p.webm";
import bottom_bg_img from "./media/streetViewCrop.png";

import "./App.css";

//  //  //  STYLED-COMPONENTS   //  //  //

const Body = styled.div`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* background-color: #000000; */
  /* min-height: 100vh; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  color: rgb(255, 255, 255);
  font-family: "New Rocker";
`;

//  // FOR STUDY  //  //
// const MainBGImg = styled(motion.div)`
//   z-index: -100;
//   height: 100vh;
//   background: url(${BGImg}) center center no-repeat;
// 	background-attachment: fixed;
// 	background-size: cover;
// 	background-blend-mode: saturation;
// 	background-color: rgba(0, 0, 0, 0.646);
// `

const MainBGImg = styled(motion.img)`
  z-index: -100;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100vmax;

  -webkit-transform: translate(-50%, 0%);
  position: fixed;
  overflow: hidden;
  left: 50%;
  top: 0%;
  -webkit-filter: blur(6px) brightness(40%)
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) opacity(69%);
  filter: blur(6px) brightness(40%) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    opacity(69%);
`;

const MainBGVideo = styled(motion.video)`
  z-index: -100;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100vmax;

  -webkit-transform: translate(-50%, 0%);
  position: fixed;
  overflow: hidden;
  left: 50%;
  top: 0%;
  /* -webkit-filter: blur(6px) brightness(40%)
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) opacity(69%); */
  /* filter: blur(6px) brightness(40%) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    opacity(69%); */
`;

const BottomBGImg = styled(motion.img)`
  z-index: -90;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;

  -webkit-transform: translate(0%, 0%);
  /* position: fixed; */
  /* overflow: hidden; */
  left: 50%;
  bottom: 0%;

  -webkit-filter:  brightness(10%) drop-shadow(0px 2px 2px #000000);
  filter:  brightness(10%) drop-shadow(0px 2px 2px #000000);
`;

//  //  //  FUNCTION    //  //  //

export default function App() {

  //  //  //  BACKGROUND FADE   //  //  //

  // const 


  //  //  //  PIECE MASTER SETTINGS  //  //  //

  const [piece, setPiece] = useState(null);
  const providerPiece = useMemo(() => ({ piece, setPiece }), [piece, setPiece]);

  const [showPiece, setShowPiece] = useState(false);
  const providerShowPiece = useMemo(
    () => ({ showPiece, setShowPiece }),
    [showPiece, setShowPiece]
  );

  //  //  //  RENDER    //  //  //

  return (
    <div className="App">
      <PieceContext.Provider value={providerPiece}>
        <PieceModalToggleContext.Provider value={providerShowPiece}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Route
              exact
              path="/artists/:artistSlug"
              component={ArtistProfile}
            />
          </Switch>
        </PieceModalToggleContext.Provider>
      </PieceContext.Provider>
      <MainBGImg src={main_bg_img} />
      {/* <MainBGVideo playsinline autoplay muted loop id="videoId">
        <source src={main_bg_video_mp4} type="video/mp4"/>
        <source src={main_bg_video_webm} type="video/webm"/>
      </MainBGVideo> */}
    </div>
  );
}
