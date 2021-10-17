import { motion } from "framer-motion";
import styled from "styled-components";

import GalleryCarousel from "./Gallery/GalleryCarousel";
import OriginalGallery from "./Gallery/OriginalGallery";

import bottom_bg_img from "../media/streetViewCrop.png";

//  //  //  STYLED COMPONENTS   //  //  //

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: grid;
  justify-items: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
`;

const BottomBGImg = styled(motion.img)`
  z-index: 0;

  width: 100vw;

  margin: 0;
  padding: 0;
  -webkit-transform: translate(-50%, -100%);
  position: relative;
  left: 50%;
  top: 100%;

  -webkit-filter: drop-shadow(0px 2px 2px #000000);
  filter: drop-shadow(0px 2px 2px #000000);
`;

const CarouselContainer = styled.div`
  height: 50vmin;
  width: 50vmin;
  background-color: pink;

  margin: 0;
  padding: 0;
  -webkit-transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
`;

export default function Gallery() {
  return (
    <>
      <head>
        <script src="pace.min.js"></script>
        <link rel="stylesheet" href="pace-theme-default.min.css" />
      </head>
      <Container>
        <OriginalGallery />
        <BottomBGImg src={bottom_bg_img} />
      </Container>
    </>
  );
}
