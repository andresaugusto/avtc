//  //  //  FUNCTIONALITY   //  //  //

import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//  //  //  COMPONENTS  //  //  //

import Services from "./HomePage/Services";
import GalleryPeek from "./HomePage/GalleryPeek";
import ArtistCards from "./HomePage/ArtistCards";
import MerchandisePeek from "./HomePage/MerchandisePeek";
import ContactUs from "./HomePage/ContactUs";

//  //  //  IMAGES  //  //  //

import HeaderImg from "../images/HomeHeader.png";
import bottom_bg_img from "../images/streetViewCrop (2).png";

//  //  //  STYLED-COMPONENTS   //  //  //

const HomePageSection = styled(motion.section)`
  margin-top: 10vh;
`;

const HomeHeader = styled(motion.section)`
  padding-top: 5vh;
  text-align: center;
`;

const HomeHeaderImg = styled.img`
  width: 80vw;
  max-width: 550px;

  -webkit-filter: drop-shadow(0px 2px 2px #000000);
  filter: drop-shadow(0px 2px 2px #000000);

  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;

const BottomBGImg = styled(motion.img)`
  z-index: 0;
  width: 100vw;

  margin: 0;
  padding: 0;
  -webkit-transform: translate(-50%, 0%);
  position: relative;
  /* top: -100%; */
  left: 50%;

  -webkit-filter: drop-shadow(0px 2px 2px #000000);
  filter: drop-shadow(0px 2px 2px #000000);
`;

// const ArtistSectionTitle = styled.h1`
//   padding-top: 10%;
//   margin: 0;
//   font-size: 7vmin;
//   width: 100%;
// `;

//  //  //  FUNCTION    //  //  //

export default function Home() {
  return (
    <>
      <head>
        <script src="pace.min.js"></script>
        <link rel="stylesheet" href="pace-theme-default.min.css" />
      </head>
      <HomePageSection>
        <HomeHeader>
          <HomeHeaderImg
            id="HomeHeaderImg"
            src={HeaderImg}
            alt="Specialty American Traditional Tattoo Shop"
          />
        </HomeHeader>
      </HomePageSection>
      <HomePageSection>
        <Services />
      </HomePageSection>
      <HomePageSection>
        <GalleryPeek />
      </HomePageSection>
      <HomePageSection id="artistCards">
        <ArtistCards />
      </HomePageSection>
      <HomePageSection id="merchandisePeek">
        {/* <MerchandisePeek /> */}
      </HomePageSection>
      <HomePageSection id="contactUs">
        <ContactUs />
      </HomePageSection>
      <BottomBGImg src={bottom_bg_img} alt={bottom_bg_img} />
    </>
  );
}
